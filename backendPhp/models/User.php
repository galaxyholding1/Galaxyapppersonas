<?php
require_once __DIR__ . '/../config/database.php';

class User
{
    private $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function existsByEmail($email)
    {
        $stmt = $this->conn->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetchColumn();
    }

    public function create($data)
    {
        $stmt = $this->conn->prepare("INSERT INTO users (email, user_type, accept_terms, accept_polits) VALUES (?, ?, ?, ?)");
        if ($stmt->execute([
            $data['email'],
            $data['user_type'],
            $data['accept_terms'],
            $data['accept_polits']
        ])) {
            return $this->conn->lastInsertId();
        }
        return false;
    }
}
