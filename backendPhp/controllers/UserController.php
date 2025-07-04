<?php

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../models/UserAuth.php';
require_once __DIR__ . '/../models/UserData.php';

class UserController
{
    public function register()
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);

            if (!$data || !isset($data['email']) || !isset($data['password'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Email y contraseña son obligatorios']);
                return;
            }

            $email = trim($data['email']);
            $password = trim($data['password']);

            $userModel = new User();
            $userData = new UserData();

            // Validar duplicado de email
            if ($userModel->existsByEmail($email)) {
                http_response_code(409);
                echo json_encode(['error' => 'Este correo ya está registrado']);
                return;
            }

            // Validar duplicado de documento
            if (!empty($data['documentNumber']) && $userData->existsByDocument($data['documentNumber'])) {
                http_response_code(409);
                echo json_encode(['error' => 'Este número de documento ya está registrado']);
                return;
            }

            // Validar duplicado de teléfono
            if (!empty($data['phone']) && $userData->existsByPhone($data['phone'])) {
                http_response_code(409);
                echo json_encode(['error' => 'Este número de teléfono ya está registrado']);
                return;
            }

            // 1. Insertar en users
            $userId = $userModel->create([
                'email' => $email,
                'user_type' => $data['clientType'],
                'accept_terms' => $data['acceptTerms'] ? 1 : 0,
                'accept_polits' => $data['acceptPolitics'] ? 1 : 0
            ]);

            if (!$userId) {
                http_response_code(500);
                echo json_encode(['error' => 'Error al registrar usuario']);
                return;
            }

            // 2. Insertar en user_auth
            $userAuth = new UserAuth();
            $userAuth->create([
                'user_id' => $userId,
                'password' => password_hash($password, PASSWORD_BCRYPT)
            ]);

            // 3. Insertar en user_data
            $userData->create([
                'user_id' => $userId,
                'name' => $data['name'] ?? null,
                'family_name' => $data['familyName'] ?? null,
                'phone' => $data['phone'] ?? null,
                'address' => $data['address'] ?? null,
                'address_secondary' => $data['addressSecondary'] ?? null,
                'postal_code' => $data['postalCode'] ?? null,
                'country_id' => $data['countryId'] ?? null,
                'locality_id' => $data['localityId'] ?? null,
                'document_number' => $data['documentNumber'] ?? null,
                'birthdate' => $data['birthdate'] ?? null,
                'document_type_id' => $data['documentTypeId'] ?? null,
                'id_employment_status' => $data['id_employment_status'] ?? null,
                'id_fund_source' => $data['id_fund_source'] ?? null,
                'id_job_sector' => $data['id_job_sector'] ?? null
            ]);

            echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => 'Error interno',
                'details' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}
