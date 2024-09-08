<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST["fname"];
    $lastName = $_POST["lname"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["mob"];
    $message = $_POST["job"];

    // You can perform further validation or data processing here

    // Example: Sending an email with the form data
    $to = "sehatcom94@gmail.com";
    $subject = "Contact Form Submission";
    $emailBody = "First Name: $firstName\n" .
                 "Last Name: $lastName\n" .
                 "Email: $email\n" .
                 "Phone Number: $phoneNumber\n" .
                 "Message: $message\n";

    // Send the email
    if (mail($to, $subject, $emailBody)) {
        echo "Thank you for your submission!";
    } else {
        echo "Sorry, an error occurred while processing your form.";
    }
}
?>