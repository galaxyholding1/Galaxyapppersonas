<?php
// models/Country.php

require_once __DIR__ . '/../config/database.php';

class Country
{
    private PDO $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getAll(): array
    {
        $stmt = $this->conn->query("
      SELECT 
        id,
        name,
        iso_code AS isoCode,
        flag_url AS flagUrl,
        dialing_code AS dialingCode
      FROM country
      ORDER BY name ASC
    ");
        return $stmt->fetchAll();
    }
}
