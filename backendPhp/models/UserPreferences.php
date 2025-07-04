<?php

require_once __DIR__ . '/../config/Database.php';

class UserPreferences
{
    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function create($data)
    {
        $sql = "INSERT INTO user_preferences (
                    user_data_id,
                    is_us_citizen,
                    is_us_tax_resident,
                    fiscal_id,
                    accept_terms_conditions,
                    accept_security_policy,
                    allow_visibility,
                    allow_updates,
                    allow_partnerships
                ) VALUES (
                    :user_data_id,
                    :is_us_citizen,
                    :is_us_tax_resident,
                    :fiscal_id,
                    :accept_terms_conditions,
                    :accept_security_policy,
                    :allow_visibility,
                    :allow_updates,
                    :allow_partnerships
                )";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            ':user_data_id' => $data['user_data_id'],
            ':is_us_citizen' => $data['is_us_citizen'],
            ':is_us_tax_resident' => $data['is_us_tax_resident'],
            ':fiscal_id' => $data['fiscal_id'],
            ':accept_terms_conditions' => $data['accept_terms_conditions'],
            ':accept_security_policy' => $data['accept_security_policy'],
            ':allow_visibility' => $data['allow_visibility'],
            ':allow_updates' => $data['allow_updates'],
            ':allow_partnerships' => $data['allow_partnerships']
        ]);
    }
}
