<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Get the form data
   $name = $_POST["name"];
   $surname = $_POST["surname"];
   $email = $_POST["email"];
   $phone = $_POST["phone"];
   $message = $_POST["message"];
   
   // TODO: Perform form validation and any additional processing
   
   // Example: Sending an email
   $to = "houdaelalani0320@gmail.com";
   $subject = "New Contact Form Submission";
   $body = "Name: $name\nSurname: $surname\nEmail: $email\nPhone: $phone\nMessage: $message";
   $headers = "From: $email";
   
   // Send the email
   if (mail($to, $subject, $body, $headers)) {
      echo "Message sent successfully!";
   } else {
      echo "Error sending the message.";
   }
}
?>