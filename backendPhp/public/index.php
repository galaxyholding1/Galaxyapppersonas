<?php

// Habilita CORS para desarrollo (ajustar en producción)
// Habilita CORS para desarrollo (ajustar en producción)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Cargar rutas
// Load routes
require_once __DIR__ . '/../routes/api.php';
