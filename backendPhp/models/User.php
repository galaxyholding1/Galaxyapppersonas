<?php
require_once __DIR__ . '/../config/database.php';

class User
{
    private PDO $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function emailExists(string $email): bool
    {
        $stmt = $this->conn->prepare("SELECT id FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        return (bool) $stmt->fetch();
    }

    public function phoneExists(string $phone): bool
    {
        $stmt = $this->conn->prepare("SELECT user_id FROM user_data WHERE phone = :phone LIMIT 1");
        $stmt->execute(['phone' => $phone]);
        return (bool) $stmt->fetch();
    }


    public function registerUser(array $data): bool
    {
        try {
            $this->conn->beginTransaction();

            // 1. Insertar en users
            // 1. Insert into users
            $stmt = $this->conn->prepare("
        INSERT INTO users (email, user_type, state, accept_terms, accept_polits)
        VALUES (:email, :user_type, 'active', :accept_terms, :accept_polits)
      ");
            $stmt->execute([
                'email' => $data['email'],
                'user_type' => $data['clientType'],
                'accept_terms' => (bool)$data['acceptTerms'],
                'accept_polits' => (bool)$data['acceptPolitics']
            ]);

            $userId = $this->conn->lastInsertId();

            // 2. Insertar en user_data
            // 2. Insert into user_data
            $stmt = $this->conn->prepare("
        INSERT INTO user_data (user_id, name, family_name, phone, address, address_secondary, postal_code, country_id)
        VALUES (:user_id, :name, :family_name, :phone, :address, :address_secondary, :postal_code, :country_id)
      ");
            $stmt->execute([
                'user_id' => $userId,
                'name' => $data['name'],
                'family_name' => $data['familyName'],
                'phone' => $data['phone'],
                'address' => $data['address'],
                'address_secondary' => $data['addressSecondary'] ?? null,
                'postal_code' => $data['postalCode'],
                'country_id' => $data['countryId']
            ]);

            // 3. Insertar en user_auth
            // 3. Insert into user_auth
            $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
            $stmt = $this->conn->prepare("
        INSERT INTO user_auth (user_id, password)
        VALUES (:user_id, :password)
      ");
            $stmt->execute([
                'user_id' => $userId,
                'password' => $hashedPassword
            ]);

            $this->conn->commit();
            return true;
        } catch (Exception $e) {
            $this->conn->rollBack();
            error_log("Error registering user: " . $e->getMessage());
            return false;
        }
    }

    public function documentExists(string $document): bool
    {
        $stmt = $this->conn->prepare("SELECT user_id FROM user_data WHERE document_number = :doc LIMIT 1");
        $stmt->execute(['doc' => $document]);
        return (bool) $stmt->fetch();
    }
}
