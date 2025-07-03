<?php

require_once __DIR__ . '/../config/database.php';

class Auth
{
    private PDO $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getUserByEmail(string $email): ?array
    {
        $stmt = $this->conn->prepare("
            SELECT users.id, users.email, user_auth.password
            FROM users
            JOIN user_auth ON users.id = user_auth.user_id
            WHERE users.email = :email
            LIMIT 1
        ");
        $stmt->execute(['email' => $email]);

        return $stmt->fetch() ?: null;
    }
}
