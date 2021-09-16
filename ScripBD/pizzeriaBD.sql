-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-09-2021 a las 06:59:45
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pizzeria`
--
CREATE DATABASE IF NOT EXISTS `pizzeria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pizzeria`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `establecimiento`
--

CREATE TABLE `establecimiento` (
  `idestablecimiento` int(11) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `estado` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `establecimiento`
--

INSERT INTO `establecimiento` (`idestablecimiento`, `direccion`, `estado`) VALUES
(1, 'Flor de bestion bq4', 'A'),
(2, 'Isla Trinitaria via Perimetral km11 ', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_cabecera`
--

CREATE TABLE `pedido_cabecera` (
  `idpedido_cabecera` int(11) NOT NULL,
  `total` double NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `direccion_entrega` varchar(45) NOT NULL,
  `fecha_entrega` date NOT NULL,
  `hora_entrega` time NOT NULL,
  `estado` char(1) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedido_cabecera`
--

INSERT INTO `pedido_cabecera` (`idpedido_cabecera`, `total`, `fecha_registro`, `direccion_entrega`, `fecha_entrega`, `hora_entrega`, `estado`, `idUsuario`) VALUES
(1, 30.24, '2021-09-08 05:02:15', 'Flor de bastion bq6 mz64', '2021-09-25', '17:08:00', 'A', 1),
(2, 36, '2021-09-08 05:05:27', 'Flor de bestion bq4', '2021-09-07', '15:08:00', 'N', 1),
(3, 36, '2021-09-08 06:21:03', 'Flor de bestion bq4', '2021-09-07', '16:20:00', 'N', 1),
(4, 36, '2021-09-08 06:23:41', 'Flor de bestion bq4', '2021-09-07', '14:23:00', 'N', 1),
(5, 36, '2021-09-08 06:53:17', 'Flor de bestion bq4', '2021-09-07', '15:53:00', 'N', 1),
(6, 36, '2021-09-09 04:10:09', 'Flor de bestion bq4', '2021-09-08', '15:10:00', 'N', 1),
(7, 36, '2021-09-09 04:17:39', 'perimtetral via 11km', '2021-09-08', '17:17:00', 'A', 2),
(8, 36, '2021-09-09 04:18:40', 'Flor de bestion bq4', '2021-09-08', '11:18:00', 'N', 1),
(9, 36, '2021-09-09 06:41:53', 'Isla Trinitaria via Perimetral km11', '2021-09-25', '10:41:00', 'A', 1),
(10, 36, '2021-09-09 16:40:04', 'Flor de bestion bq4', '2021-09-24', '11:39:00', 'A', 1),
(11, 36, '2021-09-09 16:47:07', 'Isla Trinitaria via Perimetral km11', '2021-09-09', '13:47:00', 'N', 1),
(12, 15, '2021-09-09 17:30:20', 'Flor de bestion bq4', '2021-09-09', '12:30:00', 'N', 1),
(13, 15, '2021-09-09 19:22:15', 'Flor de bestion bq4', '2021-09-09', '14:22:00', 'N', 1),
(14, 12, '2021-09-09 20:27:31', 'Flor de bestion bq4', '2021-09-09', '17:27:00', 'N', 1),
(15, 12, '2021-09-09 20:28:12', 'Flor de bestion bq4', '2021-09-09', '14:28:00', 'N', 1),
(16, 15, '2021-09-09 22:26:32', 'Flor de bestion bq4', '2021-09-09', '16:26:00', 'N', 1),
(17, 12, '2021-09-10 05:26:12', 'Flor de bestion bq4', '2021-09-09', '17:26:00', 'N', 1),
(18, 10, '2021-09-10 05:34:31', 'Flor de bestion bq4', '2021-09-17', '13:34:00', 'N', 1),
(19, 5, '2021-09-10 05:50:48', 'Flor de bestion bq4', '2021-09-23', '13:50:00', 'N', 1),
(20, 5, '2021-09-10 05:51:14', 'Flor de bestion bq4', '2021-09-17', '13:51:00', 'N', 1),
(21, 12, '2021-09-10 06:18:04', 'Flor de bestion bq4', '2021-09-15', '17:17:00', 'N', 1),
(22, 0, '2021-09-10 07:01:12', 'Flor de bestion bq4', '2021-09-11', '14:01:00', 'N', 1),
(23, 10, '2021-09-10 09:00:51', 'Isla Trinitaria via Perimetral km11', '2021-09-10', '16:00:00', 'A', 1),
(24, 43, '2021-09-10 19:11:18', 'Flor de bestion bq4', '2021-09-10', '12:42:00', 'A', 1),
(25, 16.8, '2021-09-14 23:55:33', 'Flor de bestion bq4', '2021-09-14', '12:55:00', 'A', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_detalle`
--

CREATE TABLE `pedido_detalle` (
  `idpedido_detalle` int(11) NOT NULL,
  `producto` varchar(45) NOT NULL,
  `precio_unitario` double NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `id_pedido_cabecera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedido_detalle`
--

INSERT INTO `pedido_detalle` (`idpedido_detalle`, `producto`, `precio_unitario`, `cantidad`, `estado`, `id_pedido_cabecera`) VALUES
(1, 'Pizza Deluxe', 5, 0, 'N', 1),
(2, 'Pizza Extra', 7, 0, 'N', 1),
(3, 'Pizza Deluxe', 5, 3, 'N', 2),
(4, 'Pizza Extra', 7, 2, 'N', 2),
(5, 'Pizza Tipica', 7, 1, 'N', 2),
(6, 'Pizza Deluxe', 5, 3, 'N', 3),
(7, 'Pizza Extra', 7, 2, 'N', 3),
(8, 'Pizza Tipica', 7, 1, 'N', 3),
(9, 'Pizza Deluxe', 5, 3, 'N', 4),
(10, 'Pizza Extra', 7, 2, 'N', 4),
(11, 'Pizza Tipica', 7, 1, 'N', 4),
(12, 'Pizza Deluxe', 5, 3, 'N', 5),
(13, 'Pizza Extra', 7, 2, 'N', 5),
(14, 'Pizza Tipica', 7, 1, 'N', 5),
(15, 'Pizza Deluxe', 5, 3, 'N', 6),
(16, 'Pizza Extra', 7, 2, 'N', 6),
(17, 'Pizza Tipica', 7, 1, 'N', 6),
(18, 'Pizza Deluxe', 5, 3, 'A', 7),
(19, 'Pizza Extra', 7, 2, 'A', 7),
(20, 'Pizza Tipica', 7, 1, 'A', 7),
(21, 'Pizza Deluxe', 5, 3, 'N', 8),
(22, 'Pizza Extra', 7, 2, 'N', 8),
(23, 'Pizza Tipica', 7, 1, 'N', 8),
(24, 'Pizza Deluxe', 5, 3, 'A', 9),
(25, 'Pizza Extra', 7, 2, 'A', 9),
(26, 'Pizza Tipica', 7, 1, 'A', 9),
(27, 'Pizza Deluxe', 5, 3, 'A', 10),
(28, 'Pizza Extra', 7, 2, 'A', 10),
(29, 'Pizza Tipica', 7, 1, 'A', 10),
(30, 'Pizza Deluxe', 5, 3, 'N', 11),
(31, 'Pizza Extra', 7, 2, 'N', 11),
(32, 'Pizza Tipica', 7, 1, 'N', 11),
(33, 'Pizza Deluxe', 5, 3, 'N', 12),
(34, 'Pizza Deluxe', 5, 3, 'N', 13),
(35, 'Pizza Deluxe', 5, 1, 'N', 14),
(36, 'Pizza Hawaiana', 7, 1, 'N', 14),
(37, 'Pizza Deluxe', 5, 1, 'N', 15),
(38, 'Pizza Hawaiana', 7, 1, 'N', 15),
(39, 'Pizza Deluxe', 5, 3, 'N', 16),
(40, 'Pizza Deluxe', 5, 1, 'N', 17),
(41, 'Pizza Extra', 7, 1, 'N', 17),
(42, 'Pizza Deluxe', 5, 2, 'N', 18),
(43, 'Pizza Deluxe', 5, 1, 'N', 19),
(44, 'Pizza Deluxe', 5, 1, 'N', 20),
(45, 'Pizza Deluxe', 5, 1, 'N', 21),
(46, 'Pizza Extra', 7, 1, 'N', 21),
(47, 'Pizza Deluxe', 5, 3, 'N', 1),
(48, 'Pizza Extra', 7, 2, 'N', 1),
(49, 'Pizza Deluxe', 5, 3, 'N', 1),
(50, 'Pizza Extra', 7, 3, 'N', 1),
(51, 'Pizza Deluxe', 5, 4, 'N', 1),
(52, 'Pizza Extra', 7, 3, 'N', 1),
(53, 'Pizza Deluxe', 5, 4, 'N', 1),
(54, 'Pizza Extra', 7, 3, 'N', 1),
(55, 'Pizza Deluxe', 5, 4, 'N', 1),
(56, 'Pizza Deluxe', 5, 4, 'N', 1),
(57, 'Pizza Deluxe', 5, 4, 'N', 1),
(58, 'Pizza Deluxe', 5, 1, 'N', 23),
(59, 'Pizza Deluxe', 5, 2, 'A', 23),
(60, 'Pizza Deluxe', 5, 3, 'A', 24),
(61, 'Pizza Extra', 7, 2, 'A', 24),
(62, 'Pizza Hawaiana', 7, 1, 'A', 24),
(63, 'Pizza con Peperoni', 7, 1, 'A', 24),
(64, 'Pizza Deluxe', 5, 3, 'N', 1),
(65, 'Pizza Deluxe', 5, 4, 'N', 1),
(66, 'Pizza Deluxe', 5, 4, 'A', 1),
(67, 'Pizza Extra', 7, 1, 'A', 1),
(68, 'Pizza pedazo jt', 5, 2, 'A', 25),
(69, 'Rebanada ', 5, 1, 'A', 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `urlImage` text NOT NULL,
  `price` double NOT NULL,
  `type` varchar(25) NOT NULL,
  `estado` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `name`, `urlImage`, `price`, `type`, `estado`) VALUES
(1, 'Pizza Deluxe', 'assets/resources/menu/Deluxe.png', 5, 'pizza', 'N'),
(2, 'Pizza Extra G', 'assets/resources/menu/Extra.png', 12, 'Pizza', 'A'),
(3, 'Pizza Hawaiana', 'assets/resources/menu/hawaiana.png', 7, 'pizza', 'N'),
(4, 'Pizza con Peperoni', 'assets/resources/menu/Peperoni.png', 7, 'pizza', 'A'),
(5, 'Pizza Tipica', 'assets/resources/menu/tipica.png', 7, 'pizza', 'A'),
(6, 'Pizza con Tocino', 'assets/resources/menu/tocino.png', 7, 'pizza', 'A'),
(7, 'Pollo BBQ', 'assets/resources/menu/polloBBQ.jpg', 7, 'pollo', 'A'),
(8, 'Pollo Picante', 'assets/resources/menu/polloPicante.jpg', 7, 'pollo', 'A'),
(9, 'Pollo Tipico', 'assets/resources/menu/polloTipico.jpg', 7, 'pollo', 'A'),
(10, 'Sandwich Italiano', 'assets/resources/menu/sdwItaliano.png', 7, 'sdw', 'A'),
(11, 'Sandwich de Queso', 'assets/resources/menu/sdwQueso.png', 7, 'sdw', 'A'),
(12, 'Sandwich de Tocino', 'assets/resources/menu/sdwTocino.png', 7, 'sdw', 'A'),
(13, 'Rebanada de Pizza ', 'assets/resources/menu/pizza_rebanada.png', 1.5, 'Pizza', 'A'),
(14, 'Pizza prueba', 'assets/resources/menu/numeros-contarhasta3-3-g.jpg', 2, 'pizza', 'A'),
(15, 'Rebanada ', 'assets/resources/menu/pizza_rebanada.png', 5, 'pizza', 'A'),
(16, 'Sandwich vegetariano', 'assets/resources/menu/mariposas volando.jpg', 9, 'sdw', 'A'),
(17, 'Pizza pedazo jt', 'assets/resources/menu/pizza_rebanada.png', 5, 'pizza', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `idreserva` int(11) NOT NULL,
  `hora_reserva` time NOT NULL,
  `fecha_reserva` date NOT NULL,
  `fecha_registro` date NOT NULL,
  `num_personas` varchar(45) NOT NULL,
  `estado` char(1) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_establecimiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idrol` int(11) NOT NULL,
  `rol` varchar(15) NOT NULL,
  `estado` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idrol`, `rol`, `estado`) VALUES
(1, 'admin', 'A'),
(2, 'cliente', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `username` varchar(15) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `password` varchar(15) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `estado` char(1) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `username`, `Correo`, `password`, `telefono`, `direccion`, `estado`, `id_rol`) VALUES
(1, 'Daniel', 'dani', 'dani05@gmail.com', '12345', '0995128885', 'Flor de bestion bq4', 'A', 2),
(2, 'Juan', 'juanito', 'juantio225@gmail.com', '12345', '0995128887', 'perimtetral via 11km', 'A', 2),
(3, 'beta', 'beta', 'dani05@gmail.com', '12345', '0995128885', 'Flor de bestion bq4', 'A', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `establecimiento`
--
ALTER TABLE `establecimiento`
  ADD PRIMARY KEY (`idestablecimiento`);

--
-- Indices de la tabla `pedido_cabecera`
--
ALTER TABLE `pedido_cabecera`
  ADD PRIMARY KEY (`idpedido_cabecera`),
  ADD KEY `fk_pedido_cabecera_Usuario1` (`idUsuario`);

--
-- Indices de la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  ADD PRIMARY KEY (`idpedido_detalle`),
  ADD KEY `fk_pedido_detalle_pedido_cabecera1` (`id_pedido_cabecera`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idreserva`),
  ADD KEY `fk_reserva_Usuario1` (`id_usuario`),
  ADD KEY `fk_reserva_establecimiento1` (`id_establecimiento`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idrol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `fk_Usuario_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `establecimiento`
--
ALTER TABLE `establecimiento`
  MODIFY `idestablecimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedido_cabecera`
--
ALTER TABLE `pedido_cabecera`
  MODIFY `idpedido_cabecera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  MODIFY `idpedido_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idreserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido_cabecera`
--
ALTER TABLE `pedido_cabecera`
  ADD CONSTRAINT `fk_pedido_cabecera_Usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  ADD CONSTRAINT `fk_pedido_detalle_pedido_cabecera1` FOREIGN KEY (`id_pedido_cabecera`) REFERENCES `pedido_cabecera` (`idpedido_cabecera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `fk_reserva_Usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reserva_establecimiento1` FOREIGN KEY (`id_establecimiento`) REFERENCES `establecimiento` (`idestablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_Usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
