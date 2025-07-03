<?php
// config/database.php

class Database
{
    private string $host = 'localhost';
    private int $port = 3307;
    private string $db_name = 'galaxybdeng';
    private string $username = 'root';
    private string $password = '';
    private string $charset = 'utf8mb4';
    private ?PDO $conn = null;

    public function connect(): PDO
    {
        if ($this->conn) return $this->conn;

        $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset={$this->charset}";

        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $this->conn = new PDO($dsn, $this->username, $this->password, $options);
            return $this->conn;
        } catch (PDOException $e) {
            http_response_code(500);
            die(json_encode([
                'error' => 'Database connection failed',
                'message' => $e->getMessage()
            ]));
        }
    }
}
