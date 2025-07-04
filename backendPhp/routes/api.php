<?php

$requestMethod = $_SERVER['REQUEST_METHOD'];

// Obtener la URI sin query params
// Get the URI without query params
$requestUri = explode('?', $_SERVER['REQUEST_URI'])[0];

// Elimina el prefijo /galaxy-api-eng/public/index.php si se accede directamente con él
// Remove the /galaxy-api-eng/public/index.php prefix if accessed directly with it
$requestUri = str_replace('/galaxy-api-eng/backendPhp/public/index.php', '', $requestUri);

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
try {
    switch ($routeKey) {


        case 'GET /swagger.json':
            header("Content-Type: application/json");
            readfile(__DIR__ . '/../docs/swagger.json');
            break;



        case 'POST /login':
            require_once __DIR__ . '/../controllers/AuthController.php';
            (new AuthController())->login();
            break;

        case 'POST /register':
            require_once __DIR__ . '/../controllers/UserController.php';
            (new UserController())->register();
            break;

        case $requestMethod === 'GET' && preg_match('#^/user/(\d+)$#', $requestUri, $matches):
            require_once __DIR__ . '/../controllers/UserController.php';
            try {
                (new UserController())->getUserByDocument($matches[1]);
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode([
                    "error" => "Internal server error",
                    "message" => $e->getMessage()
                ]);
            }
            break;

        case 'GET /countries':
            require_once __DIR__ . '/../controllers/CountryController.php';
            (new CountryController())->getAll();
            break;

        case 'POST /validate/user':
            require_once __DIR__ . '/../controllers/UserController.php';
            (new UserController())->validateEmailAndPhone();
            break;

        case 'POST /validate/document':
            require_once __DIR__ . '/../controllers/UserController.php';
            (new UserController())->validateDocument();
            break;

        case 'POST /forgot-password':
            require_once __DIR__ . '/../controllers/PasswordController.php';
            (new PasswordController())->forgotPassword();
            break;

        case 'POST /reset-password':
            require_once __DIR__ . '/../controllers/PasswordController.php';
            (new PasswordController())->resetPassword();
            break;

        case 'GET /locations/provinces':
            require_once __DIR__ . '/../controllers/LocationController.php';
            (new LocationController())->getProvinces();
            break;

        case 'GET /locations/localities':
            require_once __DIR__ . '/../controllers/LocationController.php';
            (new LocationController())->getLocalities();
            break;

        case 'GET /employment-status':
            require_once __DIR__ . '/../controllers/EmploymentStatusController.php';
            (new EmploymentStatusController())->index();
            break;

        case 'POST /employment-status':
            require_once __DIR__ . '/../controllers/EmploymentStatusController.php';
            (new EmploymentStatusController())->store();
            break;

        case 'GET /job-sector':
            require_once __DIR__ . '/../controllers/JobSectorController.php';
            (new JobSectorController())->index();
            break;

        case 'POST /job-sector':
            require_once __DIR__ . '/../controllers/JobSectorController.php';
            (new JobSectorController())->store();
            break;

        case 'GET /fund-source':
            require_once __DIR__ . '/../controllers/FundSourceController.php';
            (new FundSourceController())->index();
            break;

        case 'POST /fund-source':
            require_once __DIR__ . '/../controllers/FundSourceController.php';
            (new FundSourceController())->store();
            break;

        case 'GET /tax-country':
            require_once __DIR__ . '/../controllers/TaxCountryController.php';
            (new TaxCountryController())->getAll();
            break;

        case 'POST /tax-country':
            require_once __DIR__ . '/../controllers/TaxCountryController.php';
            (new TaxCountryController())->store();
            break;



        default:

            http_response_code(404);
            echo json_encode(['error' => 'Route not found']);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    error_log("[ERROR] " . $e->getMessage());
    echo json_encode([
        "error" => "Internal server error",
        "message" => $e->getMessage()
    ]);
}
