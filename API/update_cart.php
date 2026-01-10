<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['user_id']) && isset($data['product_id'])) {
    $user_id = $conn->real_escape_string($data['user_id']);
    $product_id = $conn->real_escape_string($data['product_id']);
    $quantity = (int)$data['quantity'];

    if ($quantity > 0) {
        // Jika kuantiti lebih dari 0, kita UPDATE
        $sql = "UPDATE cart SET quantity = '$quantity' WHERE user_id = '$user_id' AND product_id = '$product_id'";
    } else {
        // Jika kuantiti 0 (user tekan tong sampah), kita DELETE
        $sql = "DELETE FROM cart WHERE user_id = '$user_id' AND product_id = '$product_id'";
    }

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Cart updated successfully"]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
} else {
    echo json_encode(["error" => "Incomplete data"]);
}

$conn->close();
?>