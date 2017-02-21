-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2017 a las 19:59:43
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `takeaway`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `foto` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `direccion` varchar(300) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `cp` varchar(5) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fecha de alta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `email`, `telefono`, `direccion`, `cp`, `fecha de alta`) VALUES
(1, 'Cliente Express', 'cliente@express.com', '963123456', 'C/Sant Pau 3 2º3ª', '08800', '2017-02-08 17:32:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactform`
--

CREATE TABLE IF NOT EXISTS `contactform` (
  `id` int(11) NOT NULL,
  `nombreApellidos` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `email` int(100) NOT NULL,
  `mensaje` text CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `contactform`
--

INSERT INTO `contactform` (`id`, `nombreApellidos`, `email`, `mensaje`, `fecha_registro`) VALUES
(1, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:06:14'),
(2, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:32:47'),
(3, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:33:35'),
(4, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:42:08'),
(5, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:47:47'),
(6, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:55:15'),
(7, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:57:47'),
(8, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:57:52'),
(9, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 15:58:35'),
(10, 'Tina', 0, 'Me gusta tu pagina.', '2017-02-21 16:00:24'),
(11, 'ANA RUIZ', 0, 'LLLLLLLLLLLLLLLLLLL', '2017-02-21 16:03:02'),
(12, 'ANA SOÃ‘A', 0, 'Ã±ÃÃÃ±Ã±Ã±Ã±Ã‘Ã‘Ã‘Ã‘Ã‘Ã‘Ã‘', '2017-02-21 16:05:53'),
(13, 'GyÃ¶ngyi MolnÃ¡r', 0, 'Ã±Ã±Ã±Ã¡Ã¡Ã¡', '2017-02-21 17:04:11'),
(14, 'GyÃ¶ngyi MolnÃ¡r', 0, 'Ã±Ã±Ã±Ã¡Ã¡Ã¡', '2017-02-21 17:04:43'),
(15, 'Gyöngyi Molnár', 0, 'ñññááá', '2017-02-21 17:07:33'),
(16, '', 0, '', '2017-02-21 18:08:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newsletter`
--

CREATE TABLE IF NOT EXISTS `newsletter` (
  `id` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fecharegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `newsletter`
--

INSERT INTO `newsletter` (`id`, `email`, `fecharegistro`) VALUES
(1, '', '2017-02-21 18:31:47'),
(2, 'kljsfp@lkhd.com', '2017-02-21 18:32:08'),
(3, 'kasdfhas@jhfoga.com', '2017-02-21 18:45:13'),
(4, 'has@foga.com', '2017-02-21 18:52:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_plato` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE IF NOT EXISTS `platos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `precio` decimal(4,2) NOT NULL,
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(300) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `activado` tinyint(1) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `contactform`
--
ALTER TABLE `contactform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
