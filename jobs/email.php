<?php
$recipient_email    = "hello@creanima.ru"; //recepient
$from_email         = "jobs@creanima.ru"; //from email using site domain.


if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    die('Sorry Request must be Ajax POST'); //exit script
}

if($_POST){

    $sender_name    = filter_var($_POST["name"], FILTER_SANITIZE_STRING); //capture sender name
    $sender_email   = filter_var($_POST["email"], FILTER_SANITIZE_STRING); //capture sender email
    $country_code   = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
    $portfolio      = filter_var($_POST["portfolio"], FILTER_SANITIZE_STRING);

    $attachments = $_FILES['file_attach'];

    $file_count = count($attachments['name']); //count total files attached
    $boundary = md5("jobs.creanima.ru");

    if($file_count > 0){ //if attachment exists
        //header
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From:".$from_email."\r\n";
        $headers .= "Reply-To: ".$sender_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

        //message text
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";



        $body .= "Name:  $sender_name \n";
        $body .= "Email:  $sender_email \n";
        $body .= "Phone:  $country_code \n";
        $body .= "Portfolio: $portfolio \n";

        //attachments
        for ($x = 0; $x < $file_count; $x++){
            if(!empty($attachments['name'][$x])){

                if($attachments['error'][$x]>0) //exit script and output error if we encounter any
                {
                    $mymsg = array(
                        1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
                        2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
                        3=>"The uploaded file was only partially uploaded",
                        4=>"No file was uploaded",
                        6=>"Missing a temporary folder" );
                    print  json_encode( array('type'=>'error',$mymsg[$attachments['error'][$x]]) );
                    exit;
                }

                //get file info
                $file_name = $attachments['name'][$x];
                $file_size = $attachments['size'][$x];
                $file_type = $attachments['type'][$x];

                //read file
                $handle = fopen($attachments['tmp_name'][$x], "r");
                $content = fread($handle, $file_size);
                fclose($handle);
                $encoded_content = chunk_split(base64_encode($content)); //split into smaller chunks (RFC 2045)

                $body .= "--$boundary\r\n";
                $body .="Content-Type: $file_type; name=".$file_name."\r\n";
                $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
                $body .="Content-Transfer-Encoding: base64\r\n";
                $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n";
                $body .= $encoded_content;
            }
        }

    }else{ //send plain email otherwise
        $headers = "CV from jobs.creanima.ru\r\n";
        $headers .= "Name:  $sender_name \n";
        $headers .= "Email:  $sender_email \n";
        $headers .= "Phone:  $country_code \n";
        $headers .= "Portfolio: $portfolio \n";
    }

    $sentMail = mail($recipient_email, $from_email, $body, $headers );
    if($sentMail) //output success or failure messages
    {
        print json_encode(array('type'=>'done', 'text' => 'Done :) '));
        exit;
    }else{
        print json_encode(array('type'=>'error', 'text' => 'Error :( '));
        exit;
    }
}