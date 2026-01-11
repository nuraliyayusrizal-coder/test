<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// To handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['signUp'])) {
    $u = $data['fName']; 
    $e = $data['email'];
    $p = md5($data['password']); 

    $sql = "INSERT INTO user (username, email, password_hash) VALUES ('$u', '$e', '$p')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Account Created!"]);
    } else {
        echo json_encode(["error" => "Database Error: " . $conn->error]);
    }
}

if (isset($data['signIn'])) {
    $e = $data['email'];
    $p = md5($data['password']);
    
    $sql = "SELECT * FROM user WHERE email='$e' AND password_hash='$p'";
    $res = $conn->query($sql);
    
    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();
        echo json_encode(["message" => "Login Success", "username" => $row['username'], "user_id" => $row['user_id']
        ]);
    } else {
        echo json_encode(["error" => "Wrong Email/Password"]);
    }
}
?>