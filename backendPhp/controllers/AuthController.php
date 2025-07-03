<?php
// controllers/AuthController.php

require_once __DIR__ . '/../models/Auth.php';
require_once __DIR__ . '/../utils/JWT.php';

class AuthController
{
    public function login()
    {
        $input = json_decode(file_get_contents("php://input"), true);

        $email = $input['email'] ?? null;
        $password = $input['password'] ?? null;

        if (!$email || !$password) {
            http_response_code(400);
            echo json_encode(['error' => 'Email and password are required']);
            return;
        }

        $authModel = new Auth();
        $user = $authModel->getUserByEmail($email);

        if (!$user || !password_verify($password, $user['password'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
            return;
        }

        // Si las credenciales son correctas, generamos el token
        // If the credentials are correct, we generate the token
        $payload = [
            'sub' => $user['id'],
            'email' => $user['email'],
            'iat' => time(),
            'exp' => time() + 3600 // 1 hora de validez
        ];

        $token = JWT::encode($payload);
        echo json_encode(['token' => $token]);
    }
}
