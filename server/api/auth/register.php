<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php';
require_once '../../lib/Database.php'; 

use App\Utils; // Keep Utils namespace if it works, or use \App\Utils::

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$data = \App\Utils::getJsonInput();

$username = $data['username'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($username) || empty($email) || empty($password)) {
    \App\Utils::sendJsonResponse(['message' => 'Please provide username, email, and password.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();

$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

try {
    $query = "INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password_hash', $hashedPassword);

    if ($stmt->execute()) {
        \App\Utils::sendJsonResponse(['message' => 'User registered successfully.'], 201);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'Failed to register user.'], 500);
    }
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        \App\Utils::sendJsonResponse(['message' => 'Username or Email already exists.'], 409);
    } else {
        error_log("Registration error: " . $e->getMessage());
        \App\Utils::sendJsonResponse(['message' => 'An error occurred during registration.'], 500);
    }
}