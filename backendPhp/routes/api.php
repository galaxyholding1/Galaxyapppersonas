<?php

$requestMethod = $_SERVER['REQUEST_METHOD'];

// Obtener la URI sin query params
// Get the URI without query params
$requestUri = explode('?', $_SERVER['REQUEST_URI'])[0];

// Elimina el prefijo /galaxy-api-eng/public/index.php si se accede directamente con él
// Remove the /galaxy-api-eng/public/index.php prefix if accessed directly with it
$requestUri = str_replace('/galaxy-api-eng/public/index.php', '', $requestUri);

// También soporta si acceden directamente como /index.php/login (por seguridad extra)
// Also supports if you access directly as /index.php/login (for extra security)
$requestUri = str_replace('/index.php', '', $requestUri);

// Normaliza: elimina dobles barras
// Normalize: remove double slashes
$requestUri = preg_replace('#/+#', '/', $requestUri);

// Quita slash final si existe (excepto si es solo "/")
// Removes trailing slash if present (except if it's just "/")
if ($requestUri !== '/' && str_ends_with($requestUri, '/')) {
    $requestUri = rtrim($requestUri, '/');
}

$routeKey = "$requestMethod $requestUri";

// Manejo de rutas con parámetros dinámicos
if ($requestMethod === 'GET' && preg_match('#^/data/personal-documents/(\d+)/(client|business)$#', $requestUri, $matches)) {
    require_once __DIR__ . '/../controllers/DocumentTypeController.php';
    (new DocumentTypeController())->getByCountryAndType($matches[1], $matches[2]);
    return;
}

//  Ruta detectada (puedes dejarlo para debug temporal)
// Path detected (you can leave it for temporary debugging)
# echo "Ruta procesada: [$routeKey]";

switch ($routeKey) {
    case 'POST /login':
        require_once __DIR__ . '/../controllers/AuthController.php';
        (new AuthController())->login();
        break;

    case 'GET /swagger.json':
        header("Content-Type: application/json");
        readfile(__DIR__ . '/../docs/swagger.json');
        break;

    case 'POST /register':
        require_once __DIR__ . '/../controllers/UserController.php';
        (new UserController())->register();
        break;

    case 'GET /countries':
        require_once __DIR__ . '/../controllers/CountryController.php';
        (new CountryController())->getAll();
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Route not found']);
        break;
}
