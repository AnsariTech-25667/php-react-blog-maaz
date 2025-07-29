<?php

require_once '../../config/cors.php';
require_once '../../config/database.php';
require_once '../../lib/Utils.php'; // DIRECTLY INCLUDE Utils class
require_once '../../lib/Database.php'; // DIRECTLY INCLUDE Database class

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    \App\Utils::sendJsonResponse(['message' => 'Method Not Allowed'], 405);
}

$searchQuery = $_GET['q'] ?? '';

if (empty($searchQuery)) {
    \App\Utils::sendJsonResponse(['message' => 'Search query is required.'], 400);
}

$database = new \App\Database();
$db = $database->getConnection();

try {
    $query = "SELECT id, username, email, full_name, bio FROM users WHERE username LIKE :search OR full_name LIKE :search LIMIT 10";
    $stmt = $db->prepare($query);
    $param = '%' . $searchQuery . '%';
    $stmt->bindParam(':search', $param);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($users) {
        \App\Utils::sendJsonResponse($users);
    } else {
        \App\Utils::sendJsonResponse(['message' => 'No users found.'], 404);
    }
} catch (PDOException $e) {
    error_log("User search error: " . $e->getMessage());
    \App\Utils::sendJsonResponse(['message' => 'An error occurred during user search.'], 500);
}