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
(2, 'Pizza Extra G', 'assets/resources/menu/Extra.png', 12, 'Pizza', 'A'),
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
(17, 'Pizza Camaron', 'assets/resources/menu/pizzaCamaron.jpg', 15, 'pizza', 'A'),
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
(1, 'Alexis', 'alexis', 'alexisfree5@gmail.com', '12345', '0952901908', 'Isla Trinitaria', 'A', 2),
(2, 'Bryan', 'adminpizza', 'dani05@gmail.com', '12345', '0995128885', 'Flor de bestion bq4', 'A', 1);

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
-- AUTO_INCREMENT de la tabla `establecimiento`
--
ALTER TABLE `establecimiento`
  MODIFY `idestablecimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


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
