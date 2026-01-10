<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'connect.php';

$user_id = $_GET['user_id'];

$sql = "SELECT * FROM orders o 
        JOIN order_items oi ON o.order_id = oi.order_id 
        WHERE o.user_id = '$user_id' 
        ORDER BY o.order_id DESC";

$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["error" => $conn->error]);
    exit;
}

$history = [];
while($row = $result->fetch_assoc()) {
    $history[] = $row;
}

echo json_encode($history);
?>