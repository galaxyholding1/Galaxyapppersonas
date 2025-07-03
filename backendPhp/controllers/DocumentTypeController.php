<?php
require_once __DIR__ . '/../models/DocumentType.php';

class DocumentTypeController
{
    public function getByCountryAndType($countryId, $userType)
    {
        if (!is_numeric($countryId) || !in_array($userType, ['client', 'business'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid parameters']);
            return;
        }

        $model = new DocumentType();
        $result = $model->getByCountryAndType((int)$countryId, $userType);

        echo json_encode(['data' => $result]);
    }
}
