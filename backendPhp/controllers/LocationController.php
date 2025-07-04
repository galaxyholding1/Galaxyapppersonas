<?php
require_once __DIR__ . '/../config/database.php';

class LocationController
{

    // 🔹 Listar países
    public function getCountries()
    {
        try {
            $db = (new Database())->connect();
            $stmt = $db->query("SELECT id, name FROM country ORDER BY name");
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($results);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Internal server error", "message" => $e->getMessage()]);
        }
    }

    // 🔹 Listar provincias por país
    public function getProvinces()
    {
        try {
            if (!isset($_GET['country_id'])) {
                http_response_code(400);
                echo json_encode(["error" => "country_id is required"]);
                return;
            }

            $db = (new Database())->connect();
            $stmt = $db->prepare("SELECT id, name FROM province WHERE country_id = :country_id ORDER BY name");
            $stmt->execute(['country_id' => $_GET['country_id']]);
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Internal server error", "message" => $e->getMessage()]);
        }
    }

    // 🔹 Listar localidades por provincia
    public function getLocalities()
    {
        try {
            if (!isset($_GET['province_id'])) {
                http_response_code(400);
                echo json_encode(["error" => "province_id is required"]);
                return;
            }

            $db = (new Database())->connect();
            $stmt = $db->prepare("SELECT id, name FROM locality WHERE province_id = :province_id ORDER BY name");
            $stmt->execute(['province_id' => $_GET['province_id']]);
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Internal server error", "message" => $e->getMessage()]);
        }
    }
}
