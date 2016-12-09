$(function () {


    $(document).on('click', '.browse', function () {
        var file = $(this).parent().parent().parent().find('.file');
        file.trigger('click');
    });
    $(document).on('change', '.file', function () {
        $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });

    // Get the form.
    // var form = $('#subscribe_form');
    //
    // // Get the messages div.
    // var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    // $(form).submit(function(e) {
    //     // Stop the browser from submitting the form.
    //     e.preventDefault();
    //
    //     // Serialize the form data.
    //     var formData = $(form).serialize();
    //
    //     // Submit the form using AJAX.
    //     $.ajax({
    //         type: 'POST',
    //         url: $(form).attr('action'),
    //         data: formData
    //     })
    //         .done(function(response) {
    //             // Make sure that the formMessages div has the 'success' class.
    //             $(formMessages).removeClass('error');
    //             $(formMessages).addClass('success');
    //
    //             // Set the message text.
    //             $(formMessages).text(response);
    //
    //             // Clear the form.
    //             $('#name').val('');
    //             $('#email').val('');
    //             $('#phone').val('');
    //             $('#message').val('');
    //         })
    //         .fail(function(data) {
    //             // Make sure that the formMessages div has the 'error' class.
    //             $(formMessages).removeClass('success');
    //             $(formMessages).addClass('error');
    //
    //             // Set the message text.
    //             if (data.responseText !== '') {
    //                 $(formMessages).text(data.responseText);
    //             } else {
    //                 $(formMessages).text('Oops! An error occured and your message could not be sent.');
    //             }
    //         });
    //
    // });


});

var allowed_file_size = "1048576"; //allowed file size
var allowed_files = ['image/png', 'image/gif', 'image/jpeg', 'image/pjpeg']; //allowed file types
var border_color = "#C2C2C2"; //initial input border color
var formMessages = $('#form-messages');

$("#subscribe_form").submit(function (e) {
    e.preventDefault(); //prevent default action 
    proceed = true; //set proceed flat to true

    //simple input validation
    $($(this).find("input[data-required=true], textarea[data-required=true]")).each(function () {
        if (!$.trim($(this).val())) { //if this field is empty
            $(this).css('border-color', 'red'); //change border color to red
            proceed = false; //set do not proceed flag
        }
        //check invalid email
        var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))) {
            $(this).css('border-color', 'red'); //change border color to red
            proceed = false; //set do not proceed flag              
        }
    }).on("input", function () { //change border color to original
        $(this).css('border-color', border_color);
    });

    //check file size and type before upload, works in modern browsers
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var total_files_size = 0;
        $(this.elements['file_attach[]'].files).each(function (i, ifile) {
            if (ifile.value !== "") { //continue only if file(s) are selected
                if (allowed_files.indexOf(ifile.type) === -1) { //check unsupported file
                    alert(ifile.name + " is unsupported file type!");
                    proceed = false;
                }
                total_files_size = total_files_size + ifile.size; //add file size to total size
            }
        });
        if (total_files_size > allowed_file_size) {
            alert("Make sure total file size is less than 1 MB!");
            proceed = false;
        }
    }

    //if everything's ok, continue with Ajax form submit
    if (proceed) {
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = new FormData(this); //constructs key/value pairs representing fields and values

        $.ajax({ //ajax form submit
            url: post_url,
            type: request_method,
            data: form_data,
            dataType: "json",
            contentType: false,
            cache: false,
            processData: false
        }).done(function (res) { //fetch server "json" messages when done
            if(res.type == "error") {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                $(formMessages).text(res.text);
            }

            if(res.type == "done") {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(res.text);
                $('#name').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#message').val('');
                $('#cv').val('');
            }
        });
    }
    ;
});