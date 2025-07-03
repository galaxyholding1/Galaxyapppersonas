<?php
require_once __DIR__ . '/../config/database.php';

class PasswordController
{

    // 🔹 Paso 1: Solicitar recuperación
    public function forgotPassword()
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            if (!isset($data['email'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Email is required']);
                return;
            }

            $email = $data['email'];
            $db = (new Database())->connect();

            // Buscar user_id
            $stmt = $db->prepare("SELECT id FROM users WHERE email = :email");
            $stmt->execute(['email' => $email]);
            $user = $stmt->fetch();

            if (!$user) {
                http_response_code(404);
                echo json_encode(['error' => 'User not found']);
                return;
            }

            $userId = $user['id'];
            $token = bin2hex(random_bytes(16));

            // Insertar en password_reset
            $insert = $db->prepare("INSERT INTO password_reset (user_id, token) VALUES (:user_id, :token)");
            $insert->execute(['user_id' => $userId, 'token' => $token]);

            echo json_encode([
                'message' => 'Reset token generated',
                'token' => $token,
                'user_id' => $userId // solo para pruebas
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => 'Internal server error',
                'message' => $e->getMessage()
            ]);
        }
    }

    // 🔹 Paso 2: Cambiar la contraseña
    public function resetPassword()
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            if (!isset($data['userId'], $data['token'], $data['newPassword'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Missing fields']);
                return;
            }

            $db = (new Database())->connect();

            // Validar token
            $stmt = $db->prepare("
        SELECT * FROM password_reset
        WHERE user_id = :user_id AND token = :token
        AND created_at >= (NOW() - INTERVAL 1 HOUR)
      ");
            $stmt->execute([
                'user_id' => $data['userId'],
                'token' => $data['token']
            ]);

            if (!$stmt->fetch()) {
                http_response_code(400);
                echo json_encode(['error' => 'Invalid or expired token']);
                return;
            }

            // Actualizar contraseña
            $hashed = password_hash($data['newPassword'], PASSWORD_BCRYPT);
            $update = $db->prepare("UPDATE user_auth SET password = :p WHERE user_id = :id");
            $update->execute([
                'p' => $hashed,
                'id' => $data['userId']
            ]);

            // Eliminar token
            $delete = $db->prepare("DELETE FROM password_reset WHERE user_id = :id");
            $delete->execute(['id' => $data['userId']]);

            echo json_encode(['message' => 'Password reset successfully']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => 'Internal server error',
                'message' => $e->getMessage()
            ]);
        }
    }
}
