<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Auth.php'; // DIRECTLY INCLUDE Auth class
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$data = \App\Utils::getJsonInput();

$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (empty($username) || empty($password)) {
    \App\Utils::sendJsonResponse(['message' => 'Please provide username and password.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();
$auth = new \App\Auth();

try {
    $query = "SELECT id, username, password_hash FROM users WHERE username = :username LIMIT 0,1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && \App\Auth::verifyPassword($password, $user['password_hash'])) {
        $token = \App\Auth::generateToken($user['id'], $user['username']);
        \App\Utils::sendJsonResponse([
            'message' => 'Login successful.',
            'token' => $token,
            'userId' => $user['id'],
            'username' => $user['username']
        ]);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'Invalid credentials.'], 401);
    }
} catch (PDOException $e) {
    error_log("Login error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred during login.'], 500);
}