<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['first_name']);
    $workEmail = htmlspecialchars($_POST['work_email']);
    $companyName = htmlspecialchars($_POST['company_name']);
    $country = htmlspecialchars($_POST['country']);
    $otherCountry = isset($_POST['other']) ? htmlspecialchars($_POST['other']) : '';
    $referral = htmlspecialchars($_POST['referral']);

    // Format the data
    $data = "Name: $firstName\n";
    $data .= "Work Email: $workEmail\n";
    $data .= "Company Name: $companyName\n";
    $data .= "Country: $country\n";
    if ($country === 'OT') {
        $data .= "Other Country: $otherCountry\n";
    }
    $data .= "Referral: $referral\n";
    $data .= "--------------------------\n";

    // Define the directory and file name
    $dir = 'submissions';
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
    $fileName = $dir . '/submission' . time() . '.txt';

    // Save the data to the file
    if (file_put_contents($fileName, $data)) {
        echo '<script>alert("Form data saved successfully.");';
        echo 'window.location.href = "bookdemo.html";</script>';
    } else {
        echo '<script>alert("Error saving form data.");</script>';
        echo 'window.location.href = "bookdemo.html";</script>';
    }
} else {
       echo '<script>alert("Invalid request method.");</script>';
        echo 'window.location.href = "bookdemo.html";</script>'; 
}
?>