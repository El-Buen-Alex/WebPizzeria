-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2021 a las 08:01:44
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
(1, 30.24, '2021-09-08 05:02:15', 'Flor de bastion bq6 mz64', '2021-09-25', '17:08:00', 'N', 1),
(2, 36, '2021-09-08 05:05:27', 'Flor de bestion bq4', '2021-09-07', '15:08:00', 'N', 1),
(3, 36, '2021-09-08 06:21:03', 'Flor de bestion bq4', '2021-09-07', '16:20:00', 'N', 1),
(4, 36, '2021-09-08 06:23:41', 'Flor de bestion bq4', '2021-09-07', '14:23:00', 'N', 1),
(5, 36, '2021-09-08 06:53:17', 'Flor de bestion bq4', '2021-09-07', '15:53:00', 'N', 1),
(6, 36, '2021-09-09 04:10:09', 'Flor de bestion bq4', '2021-09-08', '15:10:00', 'N', 1),
(7, 36, '2021-09-09 04:17:39', 'perimtetral via 11km', '2021-09-08', '17:17:00', 'A', 2),
(8, 36, '2021-09-09 04:18:40', 'Flor de bestion bq4', '2021-09-08', '11:18:00', 'N', 1),
(9, 36, '2021-09-09 06:41:53', 'Isla Trinitaria via Perimetral km11', '2021-09-25', '10:41:00', 'N', 1),
(10, 36, '2021-09-09 16:40:04', 'Flor de bestion bq4', '2021-09-24', '11:39:00', 'N', 1),
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
(23, 10, '2021-09-10 09:00:51', 'Isla Trinitaria via Perimetral km11', '2021-09-10', '16:00:00', 'N', 1),
(24, 43, '2021-09-10 19:11:18', 'Flor de bestion bq4', '2021-09-10', '12:42:00', 'N', 1),
(25, 24.64, '2021-09-14 23:55:33', 'Flor de bestion bq4', '2021-09-14', '12:55:00', 'N', 1),
(26, 19.04, '2021-09-17 05:08:41', 'Flor de bestion bq4', '2021-09-17', '17:08:00', 'N', 1),
(27, 60.48, '2021-09-17 05:59:09', 'Flor de bestion bq4', '2021-09-24', '14:59:00', 'N', 1),
(28, 24.64, '2021-09-17 06:01:06', 'Flor de bestion bq4', '2021-09-30', '16:00:00', 'N', 1),
(29, 32.48, '2021-09-17 06:15:59', 'Flor de bestion bq4', '2021-09-23', '10:15:00', 'N', 1),
(30, 16.8, '2021-09-17 06:36:14', 'Flor de bestion bq4', '2021-09-24', '16:36:00', 'N', 1),
(31, 7.84, '2021-09-17 06:47:13', 'Flor de bestion bq4', '2021-09-18', '16:46:00', 'A', 1),
(32, 16.8, '2021-09-17 07:24:54', 'Flor de bestion bq4', '2021-10-01', '11:24:00', 'A', 1),
(33, 16.8, '2021-09-17 07:32:13', 'Flor de bestion bq4', '2021-09-25', '17:32:00', 'A', 1),
(34, 7.84, '2021-09-17 07:41:39', 'Flor de bestion bq4', '2021-09-25', '16:41:00', 'A', 1),
(35, 16.8, '2021-09-17 07:43:51', 'Flor de bestion bq4', '2021-09-30', '16:43:00', 'A', 1),
(36, 16.8, '2021-09-17 07:49:07', 'Flor de bestion bq4', '2021-09-30', '10:49:00', 'A', 1),
(37, 7.84, '2021-09-17 07:49:24', 'Flor de bestion bq4', '2021-09-29', '09:49:00', 'A', 1),
(38, 16.8, '2021-09-17 07:52:24', 'Flor de bestion bq4', '2021-09-30', '09:52:00', 'A', 1),
(39, 33.6, '2021-09-17 07:53:07', 'Flor de bestion bq4', '2021-09-17', '09:53:00', 'A', 1);

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
  `id_producto` int(11) NOT NULL,
  `id_pedido_cabecera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedido_detalle`
--

INSERT INTO `pedido_detalle` (`idpedido_detalle`, `producto`, `precio_unitario`, `cantidad`, `estado`, `id_producto`, `id_pedido_cabecera`) VALUES
(76, 'Pizza con Tocino', 7, 1, 'N', 6, 27),
(77, 'Pizza Camaron', 15, 1, 'N', 17, 27),
(78, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(79, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(86, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(87, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(88, 'Pizza Camaron', 15, 1, 'N', 17, 29),
(89, 'Pizza con Tocino', 7, 1, 'N', 6, 29),
(90, 'Pizza Camaron', 15, 1, 'N', 17, 29),
(91, 'Pizza con Tocino', 7, 1, 'N', 6, 29),
(92, 'Pizza Camaron', 15, 1, 'N', 17, 29),
(93, 'Pizza con Tocino', 7, 2, 'N', 6, 29),
(94, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(95, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(96, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(97, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(98, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(99, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(100, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(101, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(102, 'Pizza Camaron', 15, 1, 'N', 17, 28),
(103, 'Pizza con Tocino', 7, 1, 'N', 6, 28),
(113, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(114, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(115, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(116, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(117, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(118, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(119, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(120, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(121, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(122, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(123, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(124, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(125, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(126, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(127, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(128, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(129, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(130, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(131, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(132, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(133, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(134, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(135, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(136, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(137, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(138, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(139, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(140, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(141, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(142, 'Pizza Camaron', 15, 21, 'N', 17, 31),
(143, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(144, 'Pizza Camaron', 15, 21, 'N', 17, 31),
(145, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(146, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(147, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(148, 'Pizza Camaron', 15, 1, 'N', 17, 30),
(149, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(150, 'Pollo BBQ', 7, 1, 'N', 7, 31),
(151, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(152, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(153, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(154, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(155, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(156, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(157, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(158, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(159, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(160, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(161, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(162, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(163, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(164, 'Pizza con Tocino', 7, 51, 'N', 6, 31),
(165, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(166, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(167, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(168, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(169, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(170, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(171, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(172, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(173, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(174, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(175, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(176, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(177, 'Pizza con Tocino', 7, 1, 'N', 6, 31),
(178, 'Pizza Camaron', 15, 1, 'N', 17, 31),
(190, 'Pizza Camaron', 15, 1, 'N', 17, 39),
(191, 'Pizza Camaron', 15, 2, 'A', 17, 39);

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
(14, 'Pizza prueba', 'assets/resources/menu/numeros-contarhasta3-3-g.jpg', 2, 'pizza', 'N'),
(15, 'Rebanada ', 'assets/resources/menu/pizza_rebanada.png', 5, 'pizza', 'N'),
(16, 'Sandwich vegetariano de mariposa', 'assets/resources/menu/mariposas volando.jpg', 9, 'pollo', 'N'),
(17, 'Pizza Camaron', 'assets/resources/menu/pizzaCamaron.jpg', 15, 'pizza', 'A'),
(18, 'pizzz', 'assets/resources/menu/4b64eda4418b744da352d0844a37cc1c.jpg', 25, 'pizza', 'N'),
(19, 'prueba', 'assets/resources/menu/2.jpg', 36.5, 'sdw', 'N'),
(20, 'papi pollo', 'assets/resources/menu/papiPolloChuzo.jpg', 5, 'pollo', 'A');

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
  ADD KEY `fk_pedido_detalle_pedido_cabecera1` (`id_pedido_cabecera`),
  ADD KEY `fk_producto_id` (`id_producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

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
-- AUTO_INCREMENT de la tabla `pedido_cabecera`
--
ALTER TABLE `pedido_cabecera`
  MODIFY `idpedido_cabecera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `pedido_detalle`
--
ALTER TABLE `pedido_detalle`
  MODIFY `idpedido_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
  ADD CONSTRAINT `fk_pedido_detalle_pedido_cabecera1` FOREIGN KEY (`id_pedido_cabecera`) REFERENCES `pedido_cabecera` (`idpedido_cabecera`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_producto_id` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_Usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
