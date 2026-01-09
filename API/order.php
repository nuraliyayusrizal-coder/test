<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request from browser
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include 'connect.php';

// Take JSON from React
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['submitOrder'])) {
    // Take data from payload React
    $user_id = $data['user_id'];
    $fName   = $data['firstName'];
    $lName   = $data['lastName'];
    $email   = $data['email_address'];
    $street  = $data['street'];
    $city    = $data['city'];
    $state   = $data['state'];
    $phone   = $data['phone_num'];
    $payment = $data['payment_method']; 

    // Query SQL 
    $sql = "INSERT INTO orders (user_id, firstName, lastName, email_address, street, city, state, phone_num, payment_method) 
            VALUES ('$user_id', '$fName', '$lName', '$email', '$street', '$city', '$state', '$phone', '$payment')";
    
    // Run query and send response back to React
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Order successfully placed!"]);
    } else {
        echo json_encode(["error" => "Database Error: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "No order data received"]);
}
?>