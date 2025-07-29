<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$userId = $_GET['id'] ?? null;

if (empty($userId)) {
    \App\Utils::sendJsonResponse(['message' => 'User ID is required.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();

try {
    $userQuery = "SELECT id, username, email, full_name, bio, created_at FROM users WHERE id = :id LIMIT 0,1";
    $userStmt = $db->prepare($userQuery);
    $userStmt->bindParam(':id', $userId);
    $userStmt->execute();
    $user = $userStmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        \App\Utils::sendJsonResponse(['message' => 'User not found.'], 404);
    }

    $postsQuery = "SELECT id, title, content, created_at, updated_at FROM posts WHERE user_id = :user_id ORDER BY created_at DESC";
    $postsStmt = $db->prepare($postsQuery);
    $postsStmt->bindParam(':user_id', $userId);
    $postsStmt->execute();
    $posts = $postsStmt->fetchAll(PDO::FETCH_ASSOC);

    $user['posts'] = $posts;

    \App\Utils::sendJsonResponse($user);

} catch (PDOException $e) {
    error_log("Get user profile error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred while fetching user profile.'], 500);
}