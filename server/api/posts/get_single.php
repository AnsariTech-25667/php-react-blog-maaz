<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$postId = $_GET['id'] ?? null;

if (empty($postId)) {
    \App\Utils::sendJsonResponse(['message' => 'Post ID is required.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();

try {
    $query = "
        SELECT 
            p.id, 
            p.user_id, 
            p.title, 
            p.content, 
            p.created_at, 
            p.updated_at,
            u.username, 
            u.full_name,
            u.bio
        FROM 
            posts p
        JOIN 
            users u ON p.user_id = u.id
        WHERE 
            p.id = :id
        LIMIT 0,1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $postId);
    $stmt->execute();
    $post = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($post) {
        \App\Utils::sendJsonResponse($post);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'Post not found.'], 404);
    }
} catch (PDOException $e) {
    error_log("Get single post error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred while fetching the post.'], 500);
}