<?php
require_once __DIR__ . '/../config/database.php';

class UserAuth
{
    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function create($data)
    {
        $stmt = $this->conn->prepare("INSERT INTO user_auth (user_id, password) VALUES (?, ?)");
        return $stmt->execute([
            $data['user_id'],
            $data['password']
        ]);
    }
}
