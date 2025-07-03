<?php
$input = '123456'; // la contraseña en texto plano que quieres verificar
$hash = '$2y$10$92qP4oY6J0oEQbAykwOPH.x3kViytESY9vhe0mpk9IQr5E7W3RqpC'; // el hash guardado en la base de datos

if (password_verify($input, $hash)) {
    echo "Coincide con la contraseña 123456";
} else {
    echo "No coincide" . " ";
    echo password_hash('123456', PASSWORD_BCRYPT);
}
