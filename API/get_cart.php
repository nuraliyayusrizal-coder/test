<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

include 'connect.php';

// Check if user_id is provided
if (isset($_GET['user_id'])) {
    $user_id = $conn->real_escape_string($_GET['user_id']);

    $sql = "SELECT * FROM cart WHERE user_id = '$user_id'";
    $result = $conn->query($sql);

    $cart = [];
    while($row = $result->fetch_assoc()) {
        $cart[] = $row;
    }

    echo json_encode($cart);
} else {
    echo json_encode(["error" => "User ID not provided"]);
}

$conn->close();
?>