<?php
// controllers/UserController.php
require_once __DIR__ . '/../config/database.php';

require_once __DIR__ . '/../models/User.php';

class UserController
{

    public function register()
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $db = (new Database())->connect();

            $required = ['email', 'password', 'name', 'phone', 'documentNumber', 'birthdate', 'documentTypeId', 'countryId'];
            foreach ($required as $field) {
                if (empty($data[$field])) {
                    http_response_code(400);
                    echo json_encode(["error" => "Missing field: $field"]);
                    return;
                }
            }

            // Validar duplicados con nombres reales de columna
            $validations = [
                ['field' => 'email', 'table' => 'users', 'column' => 'email'],
                ['field' => 'documentNumber', 'table' => 'user_data', 'column' => 'document_number'],
                ['field' => 'phone', 'table' => 'user_data', 'column' => 'phone'],
            ];

            foreach ($validations as $v) {
                $value = $data[$v['field']] ?? null;
                if (!$value) continue;

                $stmt = $db->prepare("SELECT id FROM {$v['table']} WHERE {$v['column']} = :value");
                $stmt->execute(['value' => $value]);
                if ($stmt->fetch()) {
                    http_response_code(409);
                    echo json_encode(["error" => "{$v['field']} already exists"]);
                    return;
                }
            }

            // 1. users
            $stmt = $db->prepare("INSERT INTO users (email, user_type, accept_terms, accept_polits) VALUES (:email, :type, :terms, :polits)");
            $stmt->execute([
                'email' => $data['email'],
                'type' => $data['clientType'] ?? 'people',
                'terms' => $data['accept_terms_conditions'] ?? 1,
                'polits' => $data['accept_security_policy'] ?? 1
            ]);
            $userId = $db->lastInsertId();

            // 2. user_data
            $stmt = $db->prepare("INSERT INTO user_data (
        user_id, name, family_name, phone, address, address_secondary,
        postal_code, country_id, document_number, birthdate, document_type_id,
        province, locality, id_employment_status, id_fund_source, id_job_sector
      ) VALUES (
        :user_id, :name, :family_name, :phone, :address, :address_secondary,
        :postal_code, :country_id, :document_number, :birthdate, :document_type_id,
        :province, :locality, :employment_status, :fund_source, :job_sector
      )");
            $stmt->execute([
                'user_id' => $userId,
                'name' => $data['name'],
                'family_name' => $data['familyName'] ?? null,
                'phone' => $data['phone'],
                'address' => $data['address'] ?? null,
                'address_secondary' => $data['addressSecondary'] ?? null,
                'postal_code' => $data['postalCode'] ?? null,
                'country_id' => $data['countryId'],
                'document_number' => $data['documentNumber'],
                'birthdate' => $data['birthdate'],
                'document_type_id' => $data['documentTypeId'],
                'province' => $data['province'] ?? null,
                'locality' => $data['locality'] ?? null,
                'employment_status' => $data['id_employment_status'] ?? null,
                'fund_source' => $data['id_fund_source'] ?? null,
                'job_sector' => $data['id_job_sector'] ?? null
            ]);

            // 3. user_auth
            $stmt = $db->prepare("INSERT INTO user_auth (user_id, password) VALUES (:uid, :pw)");
            $stmt->execute([
                'uid' => $userId,
                'pw' => password_hash($data['password'], PASSWORD_BCRYPT)
            ]);

            // 4. user_preferences
            $stmt = $db->prepare("INSERT INTO user_preferences (
        user_data_id, is_us_citizen, is_us_tax_resident, fiscal_id,
        accept_terms_conditions, accept_security_policy,
        allow_visibility, allow_updates, allow_partnerships
      ) VALUES (
        (SELECT id FROM user_data WHERE user_id = :uid),
        :citizen, :tax_resident, :fiscal,
        :terms, :policy,
        :visibility, :updates, :partners
      )");
            $stmt->execute([
                'uid' => $userId,
                'citizen' => $data['is_us_citizen'] ?? 0,
                'tax_resident' => $data['is_us_tax_resident'] ?? 0,
                'fiscal' => $data['fiscal_id'] ?? '',
                'terms' => $data['accept_terms_conditions'] ?? 0,
                'policy' => $data['accept_security_policy'] ?? 0,
                'visibility' => $data['allow_visibility'] ?? 0,
                'updates' => $data['allow_updates'] ?? 0,
                'partners' => $data['allow_partnerships'] ?? 0
            ]);

            // 5. user_tax_residency_country
            if (!empty($data['residenceFiscalCountries']) && is_array($data['residenceFiscalCountries'])) {
                $stmt = $db->prepare("INSERT INTO user_tax_residency_country (user_data_id, country_id) VALUES ((SELECT id FROM user_data WHERE user_id = :uid), :cid)");
                foreach ($data['residenceFiscalCountries'] as $cid) {
                    $stmt->execute(['uid' => $userId, 'cid' => $cid]);
                }
            }

            http_response_code(201);
            echo json_encode(["message" => "User registered successfully", "user_id" => $userId]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to register user", "message" => $e->getMessage()]);
        }
    }

    public function validateEmailAndPhone()
    {
        try {
            $input = json_decode(file_get_contents("php://input"), true);

            $email = $input['email'] ?? null;
            $phone = $input['phone'] ?? null;

            if (!$email || !$phone) {
                http_response_code(400);
                echo json_encode(["error" => "Missing email or phone"]);
                return;
            }


            $db = (new Database())->connect();
            $model = new UserModel($db);

            $response = [];

            if ($model->emailExists($email)) {
                $response['emailExists'] = true;
            }

            if ($model->phoneExists($phone)) {
                $response['phoneExists'] = true;
            }

            if (!empty($response)) {
                http_response_code(409); // conflicto
                echo json_encode($response);
            } else {
                http_response_code(200);
                echo json_encode(["message" => "Email and phone are available"]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                "error" => "Internal server error",
                "message" => $e->getMessage()
            ]);
        }
    }

    public function validateDocument()
    {
        try {
            $input = json_decode(file_get_contents("php://input"), true);
            $documentNumber = $input['documentNumber'] ?? null;

            if (!$documentNumber) {
                http_response_code(400);
                echo json_encode(["error" => "Missing documentNumber"]);
                return;
            }


            $db = (new Database())->connect();
            $model = new UserModel($db);

            if ($model->documentExists($documentNumber)) {
                http_response_code(409); // conflicto
                echo json_encode(["documentExists" => true]);
            } else {
                http_response_code(200);
                echo json_encode(["message" => "Document number is available"]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                "error" => "Internal server error",
                "message" => $e->getMessage()
            ]);
        }
    }




    public function getUserByDocument($document)
    {
        try {
            // Validar que el documento no esté vacío y sea numérico
            if (empty($document) || !is_numeric($document)) {
                http_response_code(400);
                echo json_encode(["error" => "Invalid document number"]);
                return;
            }

            // Conectar a la base de datos

            $db = (new Database())->connect();

            if (!$db) {
                http_response_code(500);
                echo json_encode(["error" => "Failed to connect to database"]);
                return;
            }

            $model = new UserModel($db);

            // Ejecutar la búsqueda
            $user = $model->findByDocument($document);

            if ($user && is_array($user)) {
                http_response_code(200);
                echo json_encode($user);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "User not found"]);
            }
        } catch (PDOException $pdoEx) {
            http_response_code(500);
            echo json_encode([
                "error" => "Database error",
                "message" => $pdoEx->getMessage()
            ]);
        } catch (Exception $ex) {
            http_response_code(500);
            echo json_encode([
                "error" => "Internal server error",
                "message" => $ex->getMessage()
            ]);
        }
    }
}
