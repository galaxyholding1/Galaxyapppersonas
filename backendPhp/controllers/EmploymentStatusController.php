<?php

require_once __DIR__ . '/../models/EmploymentStatus.php';

class EmploymentStatusController
{

    private $model;

    public function __construct()
    {
        $this->model = new EmploymentStatus();
    }

    // Método GET: Lista todas las situaciones laborales
    public function index()
    {
        try {
            $statuses = $this->model->getAll();
            echo json_encode($statuses);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al obtener los datos', 'details' => $e->getMessage()]);
        }
    }

    // Método POST: Crea una nueva situación laboral
    public function store()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        // Validación mínima
        if (!isset($data['name']) || empty(trim($data['name']))) {
            http_response_code(400);
            echo json_encode(['error' => 'El campo "name" es obligatorio']);
            return;
        }

        $name = trim($data['name']);
        $description = isset($data['description']) ? trim($data['description']) : null;

        try {
            $result = $this->model->create($name, $description);
            if ($result) {
                echo json_encode(['success' => 'Situación laboral registrada correctamente']);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'No se pudo guardar la situación laboral']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al guardar', 'details' => $e->getMessage()]);
        }
    }
}
