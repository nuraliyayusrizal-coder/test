<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit; }

include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['submitOrder'])) {
    $user_id = $conn->real_escape_string($data['user_id']);
    $fName   = $conn->real_escape_string($data['firstName']);
    $lName   = $conn->real_escape_string($data['lastName']);
    $email   = $conn->real_escape_string($data['email_address']);
    $street  = $conn->real_escape_string($data['street']);
    $city    = $conn->real_escape_string($data['city']);
    $state   = $conn->real_escape_string($data['state']);
    $phone_num = $conn->real_escape_string($data['phone_num']);
    $payment = $conn->real_escape_string($data['payment_method']);
    $status  = $conn->real_escape_string($data['status']);
    
    // From React- default with RM8 delivery fee
    $total_price = $conn->real_escape_string($data['total_price']);
    
    $items = $data['cart_items']; 

    $sqlOrder = "INSERT INTO orders (user_id, firstName, lastName, email, street, city, state, phone_num, payment_method, status, total_price) 
                 VALUES ('$user_id', '$fName', '$lName', '$email', '$street', '$city', '$state', '$phone_num', '$payment', '$status', '$total_price')";

    if ($conn->query($sqlOrder) === TRUE) {
        $order_id = $conn->insert_id; 

        foreach ($items as $item) {
            $p_id    = $conn->real_escape_string($item['_id']);
            $p_name  = $conn->real_escape_string($item['name']);
            $p_qty   = (int)$item['quantity'];
            $p_price = (float)$item['price'];
            $p_img   = $conn->real_escape_string($item['image'][0]); 

            $sqlItems = "INSERT INTO order_items (order_id, product_id, product_name, price, quantity, image_url) 
                         VALUES ('$order_id', '$p_id', '$p_name', '$p_price', '$p_qty', '$p_img')";
            $conn->query($sqlItems);
        }

        $sqlClearCart = "DELETE FROM cart WHERE user_id = '$user_id'";
        $conn->query($sqlClearCart);

        echo json_encode(["message" => "Success", "order_id" => $order_id]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
}
?>
