<?php

require_once __DIR__ . '/../models/Country.php';

class CountryController
{
    public function getAll()
    {
        $model = new Country();
        $data = $model->getAll();

        http_response_code(200);
        echo json_encode(['data' => $data]);
    }
}
