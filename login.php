<?php
session_start();
include 'db.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $user = $data['username'];
    $pass = $data['password'];

    // 1. Find user by username
    $result = $conn->query("SELECT * FROM users WHERE username='$user'");

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // 2. Verify Password
        if (password_verify($pass, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];
            echo json_encode(["status" => "success", "message" => "Login Successful!", "username" => $row['username']]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid Password!"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found!"]);
    }
}
$conn->close();
?>