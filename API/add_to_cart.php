<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['user_id']) && isset($data['product_id'])) {
    $user_id = $data['user_id'];
    $p_id    = $data['product_id'];
    $p_name  = $data['name'];
    $p_price = $data['price'];
    $p_img   = $data['image'];
    $qty     = 1; // Default quantity to add

    // Check if the product already exists in the cart
    $check = "SELECT * FROM cart WHERE user_id = '$user_id' AND product_id = '$p_id'";
    $result = $conn->query($check);

    if ($result->num_rows > 0) {
        // If exists, update quantity
        $sql = "UPDATE cart SET quantity = quantity + 1 WHERE user_id = '$user_id' AND product_id = '$p_id'";
    } else {
        // If not exists, insert new
        $sql = "INSERT INTO cart (user_id, product_id, product_name, price, quantity, image_url) 
                VALUES ('$user_id', '$p_id', '$p_name', '$p_price', '$qty', '$p_img')";
    }

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Cart updated!"]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
}
?>