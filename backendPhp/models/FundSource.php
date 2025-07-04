<?php

require_once __DIR__ . '/../config/database.php';

class FundSource
{

    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getAll()
    {
        $sql = "SELECT * FROM fund_source ORDER BY id_fund_source ASC";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create($name, $description)
    {
        $sql = "INSERT INTO fund_source (name, description) VALUES (?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([$name, $description]);
    }
}
