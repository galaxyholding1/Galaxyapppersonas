# GalaxyPay API

API RESTful construida en PHP 8+ sin frameworks, siguiendo arquitectura MVC, con autenticación JWT y documentación Swagger UI. Desarrollada para gestionar usuarios, autenticación, dispositivos y más.

---

## Estructura del Proyecto

galaxy-api-eng/
├── public/
│ ├── index.php # Punto de entrada de la API
│ └── docs/ # Documentación Swagger UI
│ ├── swagger.json # Especificación OpenAPI (formato JSON)
│ ├── index.html # Swagger UI cargando la doc
│ └── swagger-ui/ # Archivos estáticos Swagger UI
├── config/
│ ├── database.php # Conexión PDO a MySQL
│ └── jwt_config.php # Clave secreta para JWT
├── controllers/
│ └── AuthController.php # Controlador para login
├── models/
│ ├── Auth.php # Modelo de autenticación
├── routes/
│ └── api.php # Rutas de la API
├── utils/
│ └── JWT.php # Utilidades para codificar/decodificar JWT

yaml
Copiar
Editar

---

## Requisitos

- PHP 8.0 o superior
- MySQL o MariaDB
- Apache (XAMPP, WAMP o similar)
- Extensiones habilitadas: `pdo`, `openssl`, `mbstring`

---

## Instalación

1. Clona este repositorio en tu servidor local:

   ```bash
   git clone ruta pendiente



   ```

   Colócalo en tu carpeta htdocs (XAMPP) o www (WAMP):
   C:/xampp/htdocs/galaxy-api-eng/

Autenticación con JWT
Login con email y contraseña en POST /login

Si es válido, se retorna un JWT firmado con HS256

El token debe enviarse en el header:
Authorization: Bearer <token>

Documentación con Swagger
La documentación de la API está definida en:

swift
Copiar
Editar
public/docs/swagger.json
Para visualizarla:

Abrir en navegador:

ruby
Copiar
Editar
http://localhost/galaxy-api-eng/backendPhp/public/docs/index.html

---

1: Descargar Swagger UI
Ve a: https://github.com/swagger-api/swagger-ui

Haz clic en Code > Download ZIP

Extrae la carpeta y copia solo el contenido de la carpeta dist/ a tu proyecto:

Renómbrala como swagger-ui/

Ubícala en public/docs/swagger-ui/

---

Guarda este contenido como:
docs/swagger.json

git swger para phphttps://github.com/swagger-api/swagger-ui  
Abre Swagger UI online : https://editor.swagger.io/

Pega el contenido o carga tu archivo

O monta Swagger UI local
