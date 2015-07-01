<html class="" xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <title>billthecreator.com</title>
        <link type="image/x-icon" href="../images/favicon.ico" rel="shortcut icon">
        <link type="image/x-icon" href="../images/favicon.ico" rel="icon">

        <link href="../css/styles.css" rel="stylesheet"/>
        <link href="../css/foundation.css" rel="stylesheet"/>
        <link href="../css/font-awesome.min.css" rel="stylesheet"/>

        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

    </head>

<body>

    <section id="cards">
        <section class="card" id="contact">
            <div class="sub_container">
                <div class="card_title">
                    <h2>Contact</h2>
                </div>
                <div class="card_content">
                    <div class="row collapse">
                        <div class="large-12 columns">
                            <div class="row ">
                                <div class="large-12 medium-12 small-12 columns">
                                    <?php

                                    if(isset($_POST['email'])) {
                                        $email_to = "billreithmeyer@gmail.com";
                                        $email_subject = "Message from BILLTHECREATOR.com";
                                        function died($error) {

                                            // your error code can go here

                                            echo "<h5>I am very sorry, but there were errors found with the form you submitted. </h5>";

                                            echo "<h5>These errors appear below.<br /></h5>";

                                            echo "<h5 class='cError'>".$error."<br /></h5>";

                                            echo "<h5>Please go back and fix these errors.<br /></h5>";
                                            echo "<div class='button square' onclick='window.history.go(-1); return false;'>Go Back</div>";

                                            // write all error codes above this.
                                            // if errors, all functions stop
                                            die();

                                        }



                                        // validation expected data exists

                                        if(!isset($_POST['FirstName']) ||
                                            !isset($_POST['email']) ||
                                            !isset($_POST['comments'])) {
                                            died('I am sorry, but there appears to be a problem with the form you submitted.');
                                        }

                                        $first_name = $_POST['FirstName']; // required
                                        $email_from = $_POST['email']; // required
                                        $comments = $_POST['comments']; // required
                                        $bugReport = $_POST['bug']; // required
                                        $error_message = "";

                                        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

                                        if(!preg_match($email_exp,$email_from)) {
                                        $error_message .= 'The Email Address you entered does not appear to be valid.<br />"'.$email_from.'"<br/>';
                                        }

                                        $string_exp = "/^[A-Za-z .'-]+$/";

                                        if(!preg_match($string_exp,$first_name)) {
                                        $error_message .= 'The First Name you entered does not appear to be valid.<br />"'.$first_name.'"<br/>';
                                        }

                                        if(strlen($comments) < 2) {
                                        $error_message .= 'The Comments you entered do not appear to be valid.<br />"'.$comments.'"<br/>';
                                        }

                                        if(strlen($error_message) > 0) {
                                        died($error_message);
                                        }

                                        $email_message = "Form details below.\n\n";

                                        function clean_string($string) {
                                          $bad = array("content-type","bcc:","to:","cc:","href");
                                          return str_replace($bad,"",$string);

                                        }

                                        $email_message .= "Name: ".clean_string($first_name)."\n";
                                        $email_message .= "Email: ".clean_string($email_from)."\n";
                                        $email_message .= "Comments: ".clean_string($comments)."\n";
                                        $email_message .= "Bug Report: ".clean_string($bugReport)."\n";

                                        // create email headers

                                        $headers = 'From: '.$email_from."\r\n".

                                        'Reply-To: '.$email_from."\r\n" .

                                        'X-Mailer: PHP/' . phpversion();

                                        @mail($email_to, $email_subject, $email_message, $headers);

                                        $success_message = "<h4>Thank you for  submitting a message.</h4><br/><br/>";
                                        $success_message .= "<div class='button square' onclick=location.href='../index.html';>Go Back</div>";

                                        echo $success_message;



//                                        header('Location: ../index.html');

                                      }

                                    ?>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>

</body>
</html>
