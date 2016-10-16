<?php

function test_input($data){
    $data=trim($data);// jnjum e skzbi ev verji space-ery
    $data=stripslashes($data);// jnjum e ekranizacnox simvolnery
    $data=htmlspecialchars($data);// thml tag-ery dardznum e text hatuk simvolnery poxelov hamapatasxan code-ov

    return $data;
}

if (isset($_POST['name']) and isset($_POST['phone']) and isset($_POST['message'])!== ''){
    $to='info@inomma.ru';
    $user_name= $subject = test_input($_POST['name']);
    $user_email=test_input($_POST['phone']);
    $user_message=test_input($_POST['message']);
    $from = 'Inomma.ru';
    $message ='<html><body>';
    $message .= '<h3 style="margin:0">Client Name: '.$user_name.'</h3><br>';
    $message .= '<h3 style="margin:0">Telephone: '.$user_email.'</h3><br>';
    $message .= '<p color="black">'.$user_message.'</p></body></html> ';
    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    $result= mail($to, $subject, $message, $headers);
    echo 1;
}else {
    echo 0;
}

