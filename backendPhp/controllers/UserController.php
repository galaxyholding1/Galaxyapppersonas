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


    public function validateEmailAndPhone()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid JSON']);
            return;
        }

        $email = $data['email'] ?? null;
        $phone = $data['phone'] ?? null;

        if (!$email && !$phone) {
            http_response_code(400);
            echo json_encode(['error' => 'Provide at least email or phone']);
            return;
        }

        $userModel = new User();

        $response = [
            'emailExists' => $email ? $userModel->emailExists($email) : null,
            'phoneExists' => $phone ? $userModel->phoneExists($phone) : null
        ];

        echo json_encode($response);
    }

    public function validateDocument()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['documentNumber'])) {
            http_response_code(400);
            echo json_encode(['error' => 'documentNumber is required']);
            return;
        }

        $userModel = new User();
        $exists = $userModel->documentExists($data['documentNumber']);

        echo json_encode(['documentExists' => $exists]);
    }
}
