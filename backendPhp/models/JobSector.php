<?php

require_once __DIR__ . '/../config/database.php';

class JobSector
{

    private $conn;


    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM work_sector ORDER BY id ASC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create($name, $description)
    {
        $sql = "INSERT INTO work_sector (name, description) VALUES (?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([$name, $description]);
    }
}
