-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2025 a las 00:29:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `galaxybdeng`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_methods`
--

CREATE TABLE `auth_methods` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `method_type` enum('password','face','fingerprint','2FA') NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `extra_data` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth_methods`
--

INSERT INTO `auth_methods` (`id`, `user_id`, `method_type`, `is_active`, `created_at`, `extra_data`) VALUES
(1, 1, 'password', 1, '2025-06-29 17:32:01', NULL),
(2, 1, '2FA', 1, '2025-06-29 17:32:01', '{\"provider\": \"email\"}'),
(3, 2, 'face', 1, '2025-06-29 17:32:01', '{\"device_id\": \"A1B2C3\", \"hash\": \"face_hash_example\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `iso_code` char(2) NOT NULL,
  `flag_url` text DEFAULT NULL,
  `dialing_code` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `country`
--

INSERT INTO `country` (`id`, `name`, `iso_code`, `flag_url`, `dialing_code`) VALUES
(1, 'Colombia', 'CO', 'https://flagcdn.com/co.svg', '+57'),
(2, 'Estados Unidos', 'US', 'https://flagcdn.com/us.svg', '+1'),
(3, 'Argentina', 'AR', 'https://flagcdn.com/ar.svg', '+54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document_type`
--

CREATE TABLE `document_type` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `acronym` text DEFAULT NULL,
  `user_type` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `document_type`
--

INSERT INTO `document_type` (`id`, `name`, `acronym`, `user_type`) VALUES
(1, 'Cédula de Ciudadanía', 'CC', 'client'),
(2, 'Cédula de Extranjería', 'CE', 'client'),
(3, 'NIT', 'NIT', 'business'),
(4, 'Pasaporte', 'PA', 'client');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document_type_by_country`
--

CREATE TABLE `document_type_by_country` (
  `country_id` int(11) NOT NULL,
  `document_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `document_type_by_country`
--

INSERT INTO `document_type_by_country` (`country_id`, `document_type_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `state` varchar(20) DEFAULT 'pending',
  `accept_terms` tinyint(1) DEFAULT 0,
  `accept_polits` tinyint(1) DEFAULT 0,
  `created_at` timestamp(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` timestamp(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `user_type`, `state`, `accept_terms`, `accept_polits`, `created_at`, `updated_at`) VALUES
(1, 'juan@example.com', 'client', 'active', 1, 1, '2025-06-29 17:31:35.449', '2025-06-29 17:31:35.449'),
(2, 'empresa@corp.com', 'business', 'active', 1, 1, '2025-06-29 17:31:35.449', '2025-06-29 17:31:35.449'),
(3, 'pedroemail@example.com', 'people', 'active', 1, 1, '2025-06-29 19:59:45.234', '2025-06-29 19:59:45.234'),
(4, 'daniel@example.com', 'people', 'active', 1, 1, '2025-07-01 03:35:35.950', '2025-07-01 03:35:35.950'),
(9, 'email@example.com', 'people', 'active', 1, 1, '2025-07-02 23:26:47.038', '2025-07-02 23:26:47.038'),
(10, '2email@example.com', 'people', 'active', 1, 1, '2025-07-02 23:27:22.590', '2025-07-02 23:27:22.590');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_auth`
--

CREATE TABLE `user_auth` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` timestamp(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_auth`
--

INSERT INTO `user_auth` (`id`, `user_id`, `password`, `created_at`, `updated_at`) VALUES
(1, 1, '$2y$10$IW0EeNLANW538yxhrnnDQ.X1BER43M3gpBxbTMWJm7AXVy459u8ci', '2025-06-29 17:31:50.584', '2025-06-29 17:31:50.584'),
(2, 2, '$2y$10$xyz9876543210987654321ZyXwVuTsRqPoNmLkJiHgFeDcBa', '2025-06-29 17:31:50.584', '2025-06-29 17:31:50.584'),
(3, 3, '$2y$10$jNz8Vf5xdJTD54JAC7GjK.T8bAHKgdDIzLn1TH.MpNRNkHVeDbx5e', '2025-06-29 19:59:45.336', '2025-06-29 19:59:45.336'),
(4, 4, '$2y$10$5pQLKcuO2COJarGPzx633ehkaCnCtruM.KgsinZhSY57hIZhl85l.', '2025-07-01 03:35:36.162', '2025-07-01 03:35:36.162'),
(5, 9, '$2y$10$IhRwDBmXxCX98JmBoE1.1eJKMhMQvHQ6OTbpXwFSkLbAbx1iA1Vaq', '2025-07-02 23:26:47.122', '2025-07-02 23:26:47.122'),
(6, 10, '$2y$10$5LaxsaD0qmMdgmpOAjOcHu7Uus9xLWDYQOIcd6l0ZgN0YmeQaZeJC', '2025-07-02 23:27:22.655', '2025-07-02 23:27:22.655');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `family_name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `address_secondary` varchar(45) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `document_number` varchar(30) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `document_type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_data`
--

INSERT INTO `user_data` (`id`, `user_id`, `name`, `family_name`, `phone`, `address`, `address_secondary`, `postal_code`, `country_id`, `document_number`, `birthdate`, `document_type_id`) VALUES
(1, 1, 'Juan', 'Pérez', '3216549870', 'Cra 1 #45-89', NULL, '110111', 1, NULL, NULL, NULL),
(2, 2, 'Empresa S.A.', NULL, '3111234567', 'Calle 100 #20-50', 'Oficina 302', '110221', 1, NULL, NULL, NULL),
(3, 3, 'John', 'Doe', '+573001112233', '123 Main St', 'Apt 301', '110111', 1, NULL, NULL, NULL),
(4, 4, 'Daniel', 'Doe', '+573001112233', '123 Main St', 'Apt 301', '110111', 1, NULL, NULL, NULL),
(5, 9, 'John', 'Doe', '3001112233', '123 Main St', 'Apt 301', '110111', 1, '1234567890', '1990-01-15', 1),
(6, 10, 'John', 'Doe', '3801112233', '123 Main St', 'Apt 301', '110111', 1, '1534567890', '1990-01-15', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_methods`
--
ALTER TABLE `auth_methods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `document_type`
--
ALTER TABLE `document_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `document_type_by_country`
--
ALTER TABLE `document_type_by_country`
  ADD PRIMARY KEY (`country_id`,`document_type_id`),
  ADD KEY `document_type_id` (`document_type_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `user_auth`
--
ALTER TABLE `user_auth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `document_number` (`document_number`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `country_id` (`country_id`),
  ADD KEY `fk_document_type` (`document_type_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_methods`
--
ALTER TABLE `auth_methods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `document_type`
--
ALTER TABLE `document_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `user_auth`
--
ALTER TABLE `user_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_methods`
--
ALTER TABLE `auth_methods`
  ADD CONSTRAINT `auth_methods_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `document_type_by_country`
--
ALTER TABLE `document_type_by_country`
  ADD CONSTRAINT `document_type_by_country_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `document_type_by_country_ibfk_2` FOREIGN KEY (`document_type_id`) REFERENCES `document_type` (`id`);

--
-- Filtros para la tabla `user_auth`
--
ALTER TABLE `user_auth`
  ADD CONSTRAINT `user_auth_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `user_data`
--
ALTER TABLE `user_data`
  ADD CONSTRAINT `fk_document_type` FOREIGN KEY (`document_type_id`) REFERENCES `document_type` (`id`),
  ADD CONSTRAINT `user_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_data_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
