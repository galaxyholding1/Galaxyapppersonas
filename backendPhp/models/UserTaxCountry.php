<?php

require_once __DIR__ . '/../config/Database.php';

class UserTaxCountry
{
    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function create($data)
    {
        $sql = "INSERT INTO user_tax_country (
                    user_data_id,
                    country_id
                ) VALUES (
                    :user_data_id,
                    :country_id
                )";

        $stmt = $this->conn->prepare($sql);

        return $stmt->execute([
            ':user_data_id' => $data['user_data_id'],
            ':country_id' => $data['country_id']
        ]);
    }
}
