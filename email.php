<?php
/**
 * This example shows making an SMTP connection with authentication.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;

date_default_timezone_set('Etc/UTC');

require "lib/PHPMailer/class.phpmailer.php";
require "lib/PHPMailer/PHPMailerAutoload.php";
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "vps27438.inmotionhosting.com";  // specify main and backup 
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 465;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
//Username to use for SMTP authentication
$mail->Username = "chat@leadchatlive.com";
//Password to use for SMTP authentication
$mail->Password = "0881Digital!";
//Set who the message is to be sent from
$mail->setFrom = $email;
//Set an alternative reply-to address
// $mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('chat@leadchatlive.com', 'Lead Chat Live | Support');
//Set the subject line
$mail->Subject = "You have received feedback from your website!";
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body

// $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

$mail->Body    = $message;
//Replace the plain text body with one created manually
$mail->AltBody = $message;
//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}

?>