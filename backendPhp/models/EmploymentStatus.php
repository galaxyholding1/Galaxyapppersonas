<?php

require_once __DIR__ . '/../config/database.php';

class EmploymentStatus
{

   


    private PDO $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM employment_status ORDER BY id_employment_status  ASC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create($name, $description)
    {
        $sql = "INSERT INTO employment_status (name, description) VALUES (?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([$name, $description]);
    }
}
