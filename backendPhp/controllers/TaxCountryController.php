<?php
class TaxCountryController
{
    public function getAll()
    {
        try {
            require_once __DIR__ . '/../config/Database.php';

            $db = (new Database())->connect();

            $stmt = $db->prepare("SELECT id, name FROM tax_country ORDER BY name ASC");
            $stmt->execute();

            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            http_response_code(200);
            echo json_encode($results);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                "error" => "Internal server error",
                "message" => $e->getMessage()
            ]);
        }
    }

    public function store()
    {
        try {
            $input = json_decode(file_get_contents("php://input"), true);
            $name = trim($input['name'] ?? '');

            if (!$name) {
                http_response_code(400);
                echo json_encode(["error" => "Missing country name"]);
                return;
            }

            require_once __DIR__ . '/../config/Database.php';
            $db = (new Database())->connect();

            $stmt = $db->prepare("INSERT INTO tax_country (name) VALUES (:name)");
            $stmt->execute(['name' => $name]);

            http_response_code(201);
            echo json_encode([
                "message" => "Tax country created",
                "id" => $db->lastInsertId()
            ]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode([
                "error" => "Database error",
                "message" => $e->getMessage()
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                "error" => "Internal server error",
                "message" => $e->getMessage()
            ]);
        }
    }
}
