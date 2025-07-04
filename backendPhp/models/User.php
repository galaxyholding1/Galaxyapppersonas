<?php
// models/UserModel.php
class UserModel
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function emailExists($email)
    {
        $stmt = $this->db->prepare("SELECT id FROM users WHERE email = :email");
        $stmt->execute(['email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC) ? true : false;
    }

    public function phoneExists($phone)
    {
        $stmt = $this->db->prepare("SELECT id FROM user_data WHERE phone = :phone");
        $stmt->execute(['phone' => $phone]);
        return $stmt->fetch(PDO::FETCH_ASSOC) ? true : false;
    }

    public function documentExists($documentNumber)
    {
        $stmt = $this->db->prepare("SELECT id FROM user_data WHERE document_number = :doc");
        $stmt->execute(['doc' => $documentNumber]);
        return $stmt->fetch(PDO::FETCH_ASSOC) ? true : false;
    }

    public function createUser($email, $type, $terms, $polits)
    {
        $stmt = $this->db->prepare("INSERT INTO users (email, user_type, accept_terms, accept_polits) VALUES (?, ?, ?, ?)");
        $stmt->execute([$email, $type, $terms, $polits]);
        return $this->db->lastInsertId();
    }

    public function createUserData($userId, $data)
    {
        $stmt = $this->db->prepare("INSERT INTO user_data (
      user_id, name, family_name, phone, address, address_secondary, postal_code,
      country_id, document_number, birthdate, document_type_id,
      province, locality, id_employment_status, id_fund_source, id_job_sector
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->execute([
            $userId,
            $data['name'],
            $data['familyName'] ?? null,
            $data['phone'],
            $data['address'] ?? null,
            $data['addressSecondary'] ?? null,
            $data['postalCode'] ?? null,
            $data['countryId'],
            $data['documentNumber'],
            $data['birthdate'],
            $data['documentTypeId'],
            $data['province'] ?? null,
            $data['locality'] ?? null,
            $data['id_employment_status'] ?? null,
            $data['id_fund_source'] ?? null,
            $data['id_job_sector'] ?? null
        ]);
    }

    public function createUserAuth($userId, $hashedPassword)
    {
        $stmt = $this->db->prepare("INSERT INTO user_auth (user_id, password) VALUES (?, ?)");
        $stmt->execute([$userId, $hashedPassword]);
    }

    public function createUserPreferences($userId, $data)
    {
        $stmt = $this->db->prepare("INSERT INTO user_preferences (
      user_data_id, is_us_citizen, is_us_tax_resident, fiscal_id,
      accept_terms_conditions, accept_security_policy,
      allow_visibility, allow_updates, allow_partnerships
    ) VALUES (
      (SELECT id FROM user_data WHERE user_id = ?), ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->execute([
            $userId,
            $data['is_us_citizen'] ?? 0,
            $data['is_us_tax_resident'] ?? 0,
            $data['fiscal_id'] ?? '',
            $data['accept_terms_conditions'] ?? 0,
            $data['accept_security_policy'] ?? 0,
            $data['allow_visibility'] ?? 0,
            $data['allow_updates'] ?? 0,
            $data['allow_partnerships'] ?? 0
        ]);
    }

    public function insertTaxResidencyCountries($userId, $countries)
    {
        if (!is_array($countries)) return;
        $stmt = $this->db->prepare("INSERT INTO user_tax_residency_country (user_data_id, country_id) VALUES ((SELECT id FROM user_data WHERE user_id = ?), ?)");
        foreach ($countries as $cid) {
            $stmt->execute([$userId, $cid]);
        }
    }

    public function findByEmail($email)
    {
        $stmt = $this->db->prepare("SELECT u.id, u.email, u.user_type, u.state, ud.name, ud.document_number, ud.phone FROM users u LEFT JOIN user_data ud ON u.id = ud.user_id WHERE u.email = :email");
        $stmt->execute(['email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function findByDocument($document)
    {
        // ✅ Respuesta simulada (mock)
        if ($document === '123234567890') {
            return [
                "id" => 999,
                "email" => "test@example.com",
                "user_type" => "mock",
                "state" => "enabled",
                "name" => "Mock User",
                "family_name" => "Test Family",
                "document_number" => "123234567890",
                "phone" => "3000000000",
                "country_id" => 1,
                "address" => "Calle Falsa 123",
                "address_secondary" => "Apto 3B",
                "postal_code" => "110111",
                "birthdate" => "1990-01-01",
                "document_type_id" => 1
            ];
        }

        // 👇 Código real para producción
        $stmt = $this->db->prepare("
        SELECT 
            u.id, u.email, u.user_type, u.state,
            ud.name, ud.family_name, ud.document_number, ud.phone, ud.country_id,
            ud.address, ud.address_secondary, ud.postal_code,
            ud.birthdate, ud.document_type_id
        FROM users u
        LEFT JOIN user_data ud ON u.id = ud.user_id
        WHERE ud.document_number = :doc
        LIMIT 1
    ");

        $stmt->execute(['doc' => $document]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
