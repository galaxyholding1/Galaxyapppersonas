<?php
require_once __DIR__ . '/../config/database.php';

class UserData
{
    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function existsByDocument($document_number)
    {
        $stmt = $this->conn->prepare("SELECT id FROM user_data WHERE document_number = ?");
        $stmt->execute([$document_number]);
        return $stmt->fetchColumn();
    }

    public function existsByPhone($phone)
    {
        $stmt = $this->conn->prepare("SELECT id FROM user_data WHERE phone = ?");
        $stmt->execute([$phone]);
        return $stmt->fetchColumn();
    }

    public function create($data)
    {
        $stmt = $this->conn->prepare("INSERT INTO user_data (
            user_id, name, family_name, phone, address, address_secondary,
            postal_code, country_id, locality_id, document_number, birthdate,
            document_type_id, id_employment_status, id_fund_source, id_job_sector
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        return $stmt->execute([
            $data['user_id'],
            $data['name'],
            $data['family_name'],
            $data['phone'],
            $data['address'],
            $data['address_secondary'],
            $data['postal_code'],
            $data['country_id'],
            $data['locality_id'],
            $data['document_number'],
            $data['birthdate'],
            $data['document_type_id'],
            $data['id_employment_status'],
            $data['id_fund_source'],
            $data['id_job_sector']
        ]);
    }
}
