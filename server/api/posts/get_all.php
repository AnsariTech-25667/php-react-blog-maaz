<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
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
            u.username, 
            u.full_name 
        FROM 
            posts p
        JOIN 
            users u ON p.user_id = u.id
        ORDER BY 
            p.created_at DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($posts) {
        \App\Utils::sendJsonResponse($posts);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'No posts found.'], 404);
    }
} catch (PDOException $e) {
    error_log("Get all posts error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred while fetching posts.'], 500);
}