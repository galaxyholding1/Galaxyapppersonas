<?php
require_once __DIR__ . '/../models/User.php';

class UserController
{
    public function register()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        $requiredFields = [
            'email',
            'password',
            'name',
            'familyName',
            'phone',
            'address',
            'postalCode',
            'countryId',
            'acceptTerms',
            'acceptPolitics',
            'clientType',
            'documentNumber',
            'birthdate',
            'documentTypeId'

        ];

        foreach ($requiredFields as $field) {
            if (!isset($data[$field])) {
                http_response_code(400);
                echo json_encode(['error' => "Missing required field: $field"]);
                return;
            }
        }

        // Validación simple (puedes mejorarla con expresiones regulares, etc.)
        // Simple validation (you can enhance it with regular expressions, etc.)
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            return;
        }

        $userModel = new User();

        if ($userModel->emailExists($data['email'])) {
            http_response_code(409);
            echo json_encode(['error' => 'Email already registered']);
            return;
        }

        $result = $userModel->registerUser($data);

        if ($result) {
            http_response_code(201);
            echo json_encode(['message' => 'User registered successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to register user']);
        }
    }
}
