<?php

namespace App;

class Utils {
    public static function sendJsonResponse($data, $statusCode = 200) {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($data);
        exit();
    }

    public static function getJsonInput() {
        $input = file_get_contents('php://input');
        return json_decode($input, true);
    }
}