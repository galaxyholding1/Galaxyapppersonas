<?php
require_once __DIR__ . '/../config/database.php';

class DocumentType
{
    private PDO $conn;

    public function __construct()
    {
        $this->conn = (new Database())->connect();
    }

    public function getByCountryAndType(int $countryId, string $userType): array
    {
        $stmt = $this->conn->prepare("
      SELECT dt.id, dt.name, dt.acronym, dt.user_type
      FROM document_type dt
      JOIN document_type_by_country dtc ON dt.id = dtc.document_type_id
      WHERE dtc.country_id = :countryId AND dt.user_type = :userType
      ORDER BY dt.name ASC
    ");
        $stmt->execute([
            'countryId' => $countryId,
            'userType' => $userType
        ]);
        return $stmt->fetchAll();
    }
}
