<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Middleware.php'; // DIRECTLY INCLUDE Middleware class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$authData = \App\Middleware::checkAuth();
$userId = $authData['userId'];

$data = \App\Utils::getJsonInput();

$title = $data['title'] ?? '';
$content = $data['content'] ?? '';

if (empty($title) || empty($content)) {
    \App\Utils::sendJsonResponse(['message' => 'Please provide title and content.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();

try {
    $query = "INSERT INTO posts (user_id, title, content) VALUES (:user_id, :title, :content)";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':user_id', $userId);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':content', $content);

    if ($stmt->execute()) {
        \App\Utils::sendJsonResponse(['message' => 'Post created successfully.', 'postId' => $db->lastInsertId()], 201);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'Failed to create post.'], 500);
    }
} catch (PDOException $e) {
    error_log("Create post error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred while creating the post.'], 500);
}