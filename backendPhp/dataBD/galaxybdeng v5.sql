-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2025 a las 21:59:24
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
(3, 'Argentina', 'AR', 'https://flagcdn.com/ar.svg', '+54'),
(4, 'España', 'ES', 'https://flagcdn.com/es.svg', '+34'),
(5, 'Perú', 'PE', 'https://flagcdn.com/pe.svg', '+51'),
(6, 'Ecuador', 'EC', 'https://flagcdn.com/ec.svg', '+593'),
(7, 'México', 'MX', 'https://flagcdn.com/mx.svg', '+52'),
(8, 'Chile', 'CL', 'https://flagcdn.com/cl.svg', '+56'),
(9, 'Brasil', 'BR', 'https://flagcdn.com/br.svg', '+55'),
(10, 'Uruguay', 'UY', 'https://flagcdn.com/uy.svg', '+598'),
(11, 'Paraguay', 'PY', 'https://flagcdn.com/py.svg', '+595'),
(12, 'Bolivia', 'BO', 'https://flagcdn.com/bo.svg', '+591'),
(13, 'Canadá', 'CA', 'https://flagcdn.com/ca.svg', '+1'),
(14, 'Portugal', 'PT', 'https://flagcdn.com/pt.svg', '+351'),
(15, 'Italia', 'IT', 'https://flagcdn.com/it.svg', '+39'),
(16, 'Francia', 'FR', 'https://flagcdn.com/fr.svg', '+33'),
(17, 'Andorra', 'AD', 'https://flagcdn.com/ad.svg', '+376'),
(18, 'Estonia', 'EE', 'https://flagcdn.com/ee.svg', '+372'),
(19, 'Inglaterra', 'GB', 'https://flagcdn.com/gb.svg', '+44'),
(20, 'Irlanda', 'IE', 'https://flagcdn.com/ie.svg', '+353'),
(21, 'Trinidad y Tobago', 'TT', 'https://flagcdn.com/tt.svg', '+1-868'),
(22, 'Venezuela', 'VE', 'https://flagcdn.com/ve.svg', '+58'),
(23, 'República Dominicana', 'DO', 'https://flagcdn.com/do.svg', '+1-809');

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
-- Estructura de tabla para la tabla `employment_status`
--

CREATE TABLE `employment_status` (
  `id_employment_status` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employment_status`
--

INSERT INTO `employment_status` (`id_employment_status`, `name`, `description`) VALUES
(1, 'Empleado', 'Persona que trabaja bajo relación de dependencia'),
(2, 'Desempleado', 'Actualmente sin trabajo'),
(3, 'Independiente', 'Trabajador por cuenta propia'),
(4, 'Estudiante', 'Persona en formación académica'),
(5, 'Jubilado', 'Persona retirada del trabajo por edad o tiempo de servicio'),
(6, 'Freelancer', 'Trabaja por proyectos sin relación laboral directa'),
(7, 'Empresario', 'Propietario o socio de una empresa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fund_source`
--

CREATE TABLE `fund_source` (
  `id_fund_source` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_data_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Origen previsto de fondos - Expected source of funds for the user';

--
-- Volcado de datos para la tabla `fund_source`
--

INSERT INTO `fund_source` (`id_fund_source`, `name`, `user_data_id`) VALUES
(1, 'Nómina', 1),
(2, 'Ahorros', 1),
(3, 'Herencia', 1),
(4, 'Otros', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locality`
--

CREATE TABLE `locality` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `province_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Ciudad, municipio o localidad';

--
-- Volcado de datos para la tabla `locality`
--

INSERT INTO `locality` (`id`, `name`, `province_id`) VALUES
(1, 'Medellín', 1),
(2, 'Envigado', 1),
(3, 'Bello', 1),
(4, 'Bogotá', 2),
(5, 'Soacha', 2),
(6, 'Cali', 3),
(7, 'Palmira', 3),
(8, 'Los Angeles', 4),
(9, 'San Francisco', 4),
(10, 'Houston', 5),
(11, 'Dallas', 5),
(12, 'Miami', 6),
(13, 'Orlando', 6),
(14, 'La Plata', 7),
(15, 'Mar del Plata', 7),
(16, 'Córdoba Capital', 8),
(17, 'Villa Carlos Paz', 8),
(18, 'Mendoza Capital', 9),
(19, 'San Rafael', 9),
(20, 'Madrid', 10),
(21, 'Getafe', 10),
(22, 'Alcalá de Henares', 10),
(23, 'Barcelona', 11),
(24, 'Girona', 11),
(25, 'Lleida', 11),
(26, 'Sevilla', 12),
(27, 'Málaga', 12),
(28, 'Granada', 12),
(29, 'Valencia', 13),
(30, 'Alicante', 13),
(31, 'Castellón', 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset`
--

CREATE TABLE `password_reset` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `province`
--

CREATE TABLE `province` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Provincia, departamento o región del país';

--
-- Volcado de datos para la tabla `province`
--

INSERT INTO `province` (`id`, `name`, `country_id`) VALUES
(1, 'Antioquia', 1),
(2, 'Cundinamarca', 1),
(3, 'Valle del Cauca', 1),
(4, 'California', 2),
(5, 'Texas', 2),
(6, 'Florida', 2),
(7, 'Buenos Aires', 3),
(8, 'Córdoba', 3),
(9, 'Mendoza', 3),
(10, 'Madrid', 4),
(11, 'Cataluña', 4),
(12, 'Andalucía', 4),
(13, 'Comunidad Valenciana', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tax_country`
--

CREATE TABLE `tax_country` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(10, '2email@example.com', 'people', 'active', 1, 1, '2025-07-02 23:27:22.590', '2025-07-02 23:27:22.590'),
(11, 'email3@example.com', 'people', 'active', 1, 1, '2025-07-03 16:49:47.868', '2025-07-03 16:49:47.868'),
(12, 'email23@example.com', 'people', 'pending', 1, 1, '2025-07-04 12:55:32.154', '2025-07-04 12:55:32.154'),
(13, 'email233@example.com', 'people', 'pending', 1, 1, '2025-07-04 12:57:31.747', '2025-07-04 12:57:31.747'),
(14, 'e3mail@example.com', 'people', 'pending', 1, 1, '2025-07-04 13:00:27.221', '2025-07-04 13:00:27.221'),
(15, 'em5ail@example.com', 'people', 'pending', 1, 1, '2025-07-04 13:04:46.173', '2025-07-04 13:04:46.173'),
(16, 'jjuan@example.com', 'people', 'pending', 1, 1, '2025-07-04 18:49:52.589', '2025-07-04 18:49:52.589'),
(17, 'jjjuan@example.com', 'people', 'pending', 1, 1, '2025-07-04 18:53:08.855', '2025-07-04 18:53:08.855'),
(18, 'alex@example.com', 'people', 'pending', 1, 1, '2025-07-04 21:37:43.451', '2025-07-04 21:37:43.451');

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
(1, 1, '$2y$10$5cZkexQqHFfb4Krs3WJDReRNaaDZVVx3oHBf2eIx1uxlTBHiftPVq', '2025-06-29 17:31:50.584', '2025-06-29 17:31:50.584'),
(2, 2, '$2y$10$xyz9876543210987654321ZyXwVuTsRqPoNmLkJiHgFeDcBa', '2025-06-29 17:31:50.584', '2025-06-29 17:31:50.584'),
(3, 3, '$2y$10$jNz8Vf5xdJTD54JAC7GjK.T8bAHKgdDIzLn1TH.MpNRNkHVeDbx5e', '2025-06-29 19:59:45.336', '2025-06-29 19:59:45.336'),
(4, 4, '$2y$10$5pQLKcuO2COJarGPzx633ehkaCnCtruM.KgsinZhSY57hIZhl85l.', '2025-07-01 03:35:36.162', '2025-07-01 03:35:36.162'),
(5, 9, '$2y$10$IhRwDBmXxCX98JmBoE1.1eJKMhMQvHQ6OTbpXwFSkLbAbx1iA1Vaq', '2025-07-02 23:26:47.122', '2025-07-02 23:26:47.122'),
(6, 10, '$2y$10$5LaxsaD0qmMdgmpOAjOcHu7Uus9xLWDYQOIcd6l0ZgN0YmeQaZeJC', '2025-07-02 23:27:22.655', '2025-07-02 23:27:22.655'),
(7, 11, '$2y$10$6qzQp8ZVE20rrAOBzHfR8eYPzThl.6UtdKnb4XInVQybWmVn.BEU.', '2025-07-03 16:49:47.980', '2025-07-03 16:49:47.980'),
(8, 13, '$2y$10$OB2JIT7VMW69h9h4wf8nOeQseNlHV0Z9rIuQoymhLZmqU79XCnRma', '2025-07-04 12:57:31.860', '2025-07-04 12:57:31.860'),
(9, 14, '$2y$10$1ySix1n3MZw5VZ2KAlax0.E8tS18WcEtkuy.BKogL4BXOZNhCgtSK', '2025-07-04 13:00:27.368', '2025-07-04 13:00:27.368'),
(10, 15, '$2y$10$Sfpvldm4xcbNAbt/fEn.QOYA/hsOZ7fRA96hh2xwY9AyD6OhtYkBC', '2025-07-04 13:04:46.300', '2025-07-04 13:04:46.300'),
(11, 17, '$2y$10$v3kOUWIxD30btUExMKVC3OSF46kCq4dnoEDfhtZQg/zjz23VrB38.', '2025-07-04 18:53:08.990', '2025-07-04 18:53:08.990'),
(12, 18, '$2y$10$VdM59BkH0elg2IvtTwOS/.h54ZtX94Zu7y9m7g5x4frdWjB.LfPQK', '2025-07-04 21:37:43.594', '2025-07-04 21:37:43.594');

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
  `document_type_id` int(11) DEFAULT NULL,
  `province` text NOT NULL,
  `locality` text DEFAULT NULL,
  `id_employment_status` int(11) DEFAULT NULL,
  `id_fund_source` int(11) DEFAULT NULL,
  `id_job_sector` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_data`
--

INSERT INTO `user_data` (`id`, `user_id`, `name`, `family_name`, `phone`, `address`, `address_secondary`, `postal_code`, `country_id`, `document_number`, `birthdate`, `document_type_id`, `province`, `locality`, `id_employment_status`, `id_fund_source`, `id_job_sector`) VALUES
(1, 1, 'Juan', 'Pérez', '3216549870', 'Cra 1 #45-89', NULL, '110111', 1, NULL, NULL, NULL, '', '1', NULL, NULL, NULL),
(2, 2, 'Empresa S.A.', NULL, '3111234567', 'Calle 100 #20-50', 'Oficina 302', '110221', 1, NULL, NULL, NULL, '', '7', NULL, NULL, NULL),
(3, 3, 'John', 'Doe', '+573001112233', '123 Main St', 'Apt 301', '110111', 1, NULL, NULL, NULL, '', '13', NULL, NULL, NULL),
(4, 4, 'Daniel', 'Doe', '+573001112233', '123 Main St', 'Apt 301', '110111', 1, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL),
(5, 9, 'John', 'Doe', '3001112233', '123 Main St', 'Apt 301', '110111', 1, '1234567890', '1990-01-15', 1, '', NULL, NULL, NULL, NULL),
(6, 10, 'John', 'Doe', '3801112233', '123 Main St', 'Apt 301', '110111', 1, '1534567890', '1990-01-15', 1, '', NULL, NULL, NULL, NULL),
(7, 11, 'John', 'Doe', '99730017612233', '123 Main St', 'Apt 301', '110111', 1, '12634567890', '1990-01-15', 1, '', NULL, NULL, NULL, NULL),
(10, 14, 'John', 'Doe', '+573001112233', '123 Main St', 'Apt 301', '110111', 1, '13234567890', '1990-01-15', 1, '', '2', 1, 2, 3),
(11, 15, 'John', 'Doe', '83001112233', '123 Main St', 'Apt 301', '110111', 1, '123r4567890', '1990-01-15', 1, '', '2', 1, 2, 3),
(12, 17, 'Juan', 'Pérez', '3801234567', 'Calle 123', 'Apto 4B', '110111', 1, '123234567890', '1990-01-15', 1, 'Antioquia', 'Medellín', 2, 3, 4),
(13, 18, 'Juan', 'Pérez', '3001234567', 'Calle 123', 'Apto 4B', '110111', 1, '8484845', '1990-01-15', 1, 'Antioquia', 'Medellín', 2, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_preferences`
--

CREATE TABLE `user_preferences` (
  `id` int(11) NOT NULL,
  `user_data_id` int(11) NOT NULL,
  `is_us_citizen` tinyint(1) DEFAULT 0,
  `is_us_tax_resident` tinyint(1) DEFAULT 0,
  `fiscal_id` varchar(50) NOT NULL,
  `accept_terms_conditions` tinyint(1) DEFAULT 0,
  `accept_security_policy` tinyint(1) DEFAULT 0,
  `allow_visibility` tinyint(1) DEFAULT 0,
  `allow_updates` tinyint(1) DEFAULT 0,
  `allow_partnerships` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_preferences`
--

INSERT INTO `user_preferences` (`id`, `user_data_id`, `is_us_citizen`, `is_us_tax_resident`, `fiscal_id`, `accept_terms_conditions`, `accept_security_policy`, `allow_visibility`, `allow_updates`, `allow_partnerships`) VALUES
(1, 12, 0, 0, 'NIF123456', 1, 1, 1, 0, 1),
(2, 13, 0, 0, 'NIF123456', 1, 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_tax_country`
--

CREATE TABLE `user_tax_country` (
  `id` int(11) NOT NULL,
  `user_data_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_tax_preferences`
--

CREATE TABLE `user_tax_preferences` (
  `id` int(11) NOT NULL,
  `user_data_id` int(11) NOT NULL,
  `is_us_tax_resident` tinyint(1) DEFAULT 0 COMMENT '¿Está sujeto/a a impuestos en EE.UU.? (0 = no, 1 = sí)',
  `tax_id_number` varchar(50) DEFAULT NULL COMMENT 'Número fiscal (NIF/DNI/NIE)',
  `allow_contacts_visibility` tinyint(1) DEFAULT 0 COMMENT 'Permite visibilidad para contactos',
  `allow_updates` tinyint(1) DEFAULT 0 COMMENT 'Permite recibir actualizaciones',
  `allow_partnerships` tinyint(1) DEFAULT 0 COMMENT 'Permite recibir info de partners'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Preferencias fiscales y de privacidad del usuario';

--
-- Volcado de datos para la tabla `user_tax_preferences`
--

INSERT INTO `user_tax_preferences` (`id`, `user_data_id`, `is_us_tax_resident`, `tax_id_number`, `allow_contacts_visibility`, `allow_updates`, `allow_partnerships`) VALUES
(1, 1, 0, '12345678X', 1, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_tax_residency_country`
--

CREATE TABLE `user_tax_residency_country` (
  `id` int(11) NOT NULL,
  `user_data_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='País(es) donde el usuario está sujeto a impuestos (CRS)';

--
-- Volcado de datos para la tabla `user_tax_residency_country`
--

INSERT INTO `user_tax_residency_country` (`id`, `user_data_id`, `country_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 12, 1),
(4, 12, 3),
(5, 13, 1),
(6, 13, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `work_sector`
--

CREATE TABLE `work_sector` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `user_data_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='¿En qué sector trabajas? - Work sector where the user is involved';

--
-- Volcado de datos para la tabla `work_sector`
--

INSERT INTO `work_sector` (`id`, `name`, `user_data_id`) VALUES
(1, 'Agencias de Viajes e inmobiliarias', 1),
(2, 'Agricultura, ganadería y pesca', 1),
(3, 'Arte, joyería, casas de empeño y producción/venta de armas', 1),
(4, 'Banca y seguros', 1),
(5, 'Comercio de vehículos y servicios', 1),
(6, 'Construcción', 1),
(7, 'Deporte, juegos de azar, entretenimiento y gastronomía', 1),
(8, 'Freelancer', 1),
(9, 'Otros', 1);

--
-- Índices para tablas volcadas
--

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
-- Indices de la tabla `employment_status`
--
ALTER TABLE `employment_status`
  ADD PRIMARY KEY (`id_employment_status`);

--
-- Indices de la tabla `fund_source`
--
ALTER TABLE `fund_source`
  ADD PRIMARY KEY (`id_fund_source`) USING BTREE,
  ADD KEY `user_data_id` (`user_data_id`);

--
-- Indices de la tabla `locality`
--
ALTER TABLE `locality`
  ADD PRIMARY KEY (`id`),
  ADD KEY `province_id` (`province_id`);

--
-- Indices de la tabla `password_reset`
--
ALTER TABLE `password_reset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indices de la tabla `tax_country`
--
ALTER TABLE `tax_country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

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
  ADD KEY `fk_document_type` (`document_type_id`),
  ADD KEY `locality_id` (`locality`(768)),
  ADD KEY `fk_user_employment_status` (`id_employment_status`),
  ADD KEY `fk_user_fund_source` (`id_fund_source`),
  ADD KEY `fk_user_job_sector` (`id_job_sector`);

--
-- Indices de la tabla `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_pref_user_data` (`user_data_id`);

--
-- Indices de la tabla `user_tax_country`
--
ALTER TABLE `user_tax_country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_data_id` (`user_data_id`,`country_id`),
  ADD KEY `fk_utc_country` (`country_id`);

--
-- Indices de la tabla `user_tax_preferences`
--
ALTER TABLE `user_tax_preferences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_data_id` (`user_data_id`);

--
-- Indices de la tabla `user_tax_residency_country`
--
ALTER TABLE `user_tax_residency_country`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_data_id` (`user_data_id`,`country_id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indices de la tabla `work_sector`
--
ALTER TABLE `work_sector`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_data_id` (`user_data_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `document_type`
--
ALTER TABLE `document_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `employment_status`
--
ALTER TABLE `employment_status`
  MODIFY `id_employment_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `fund_source`
--
ALTER TABLE `fund_source`
  MODIFY `id_fund_source` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `locality`
--
ALTER TABLE `locality`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `password_reset`
--
ALTER TABLE `password_reset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `province`
--
ALTER TABLE `province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `tax_country`
--
ALTER TABLE `tax_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `user_auth`
--
ALTER TABLE `user_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `user_preferences`
--
ALTER TABLE `user_preferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user_tax_country`
--
ALTER TABLE `user_tax_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_tax_preferences`
--
ALTER TABLE `user_tax_preferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `user_tax_residency_country`
--
ALTER TABLE `user_tax_residency_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `work_sector`
--
ALTER TABLE `work_sector`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `document_type_by_country`
--
ALTER TABLE `document_type_by_country`
  ADD CONSTRAINT `document_type_by_country_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `document_type_by_country_ibfk_2` FOREIGN KEY (`document_type_id`) REFERENCES `document_type` (`id`);

--
-- Filtros para la tabla `fund_source`
--
ALTER TABLE `fund_source`
  ADD CONSTRAINT `fund_source_ibfk_1` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `locality`
--
ALTER TABLE `locality`
  ADD CONSTRAINT `locality_ibfk_1` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `password_reset`
--
ALTER TABLE `password_reset`
  ADD CONSTRAINT `password_reset_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `province`
--
ALTER TABLE `province`
  ADD CONSTRAINT `province_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE;

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
  ADD CONSTRAINT `fk_user_employment_status` FOREIGN KEY (`id_employment_status`) REFERENCES `employment_status` (`id_employment_status`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_fund_source` FOREIGN KEY (`id_fund_source`) REFERENCES `fund_source` (`id_fund_source`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_job_sector` FOREIGN KEY (`id_job_sector`) REFERENCES `work_sector` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_data_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);

--
-- Filtros para la tabla `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD CONSTRAINT `fk_user_pref_user_data` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_tax_country`
--
ALTER TABLE `user_tax_country`
  ADD CONSTRAINT `fk_utc_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_utc_user_data` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_tax_preferences`
--
ALTER TABLE `user_tax_preferences`
  ADD CONSTRAINT `user_tax_preferences_ibfk_1` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `user_tax_residency_country`
--
ALTER TABLE `user_tax_residency_country`
  ADD CONSTRAINT `user_tax_residency_country_ibfk_1` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_tax_residency_country_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `work_sector`
--
ALTER TABLE `work_sector`
  ADD CONSTRAINT `work_sector_ibfk_1` FOREIGN KEY (`user_data_id`) REFERENCES `user_data` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
