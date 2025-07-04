<?php

require_once __DIR__ . '/../models/FundSource.php';

class FundSourceController
{

    private $model;

    public function __construct()
    {
        $this->model = new FundSource();
    }

    public function index()
    {
        try {
            $result = $this->model->getAll();
            echo json_encode($result);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al obtener las fuentes de fondos', 'details' => $e->getMessage()]);
        }
    }

    public function store()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['name']) || empty(trim($data['name']))) {
            http_response_code(400);
            echo json_encode(['error' => 'El campo "name" es obligatorio']);
            return;
        }

        $name = trim($data['name']);
        $description = isset($data['description']) ? trim($data['description']) : null;

        try {
            $saved = $this->model->create($name, $description);
            echo json_encode(['success' => $saved ? 'Fuente registrada' : 'No se pudo registrar']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al guardar fuente de fondos', 'details' => $e->getMessage()]);
        }
    }
}
