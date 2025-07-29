<?php

namespace App;

use App\Auth;
use App\Utils;

class Middleware {
    public static function checkAuth() {
        $headers = getallheaders();
        $token = $headers['Authorization'] ?? '';

        if (preg_match('/Bearer\s(\S+)/', $token, $matches)) {
            $jwt = $matches[1];
            $auth = new Auth();
            $userData = Auth::validateToken($jwt);

            if ($userData) {
                return $userData;
            }
        }
        Utils::sendJsonResponse(['message' => 'Unauthorized: Invalid or missing token.'], 401);
    }
}