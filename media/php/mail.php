<?php
if(isset($_POST['action']) && $_POST['action'] == "SendMessage") {
     
    // EDIT THE LINE BELLOW
    $email_to = "nasrul.hadi@live.com";
    
    // GET DATA INTO POST
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    
	$email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Subject: ".clean_string($subject)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
     
     
	// CREATE EMAIL HEADER
	$headers = 'From: '.$email."\r\n".
	'Reply-To: '.$email."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $subject, $email_message, $headers);
	
	echo '{"ResponseData":"Thanks for sending your message!"}';
	
}else{
	echo '{"ResponseData":"Please complete all the fields with the correct information!"}';
}
?>
