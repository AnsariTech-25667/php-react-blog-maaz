<?php

namespace App;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth {
    private static $secretKey;

    public function __construct() {
        self::$secretKey = $_ENV['JWT_SECRET'];
    }

    public static function hashPassword($password) {
        return password_hash($password, PASSWORD_BCRYPT);
    }

    public static function verifyPassword($password, $hashedPassword) {
        return password_verify($password, $hashedPassword);
    }

    public static function generateToken($userId, $username) {
        $issuedAt = time();
        $expirationTime = $issuedAt + 3600; 
        $payload = [
            'iat' => $issuedAt,
            'exp' => $expirationTime,
            'data' => [
                'userId' => $userId,
                'username' => $username
            ]
        ];
        return JWT::encode($payload, self::$secretKey, 'HS256');
    }

    public static function validateToken($token) {
        if (empty($token)) {
            return false;
        }
        try {
            $decoded = JWT::decode($token, new Key(self::$secretKey, 'HS256'));
            return (array) $decoded->data;
        } catch (\Exception $e) {
            return false;
        }
    }
}