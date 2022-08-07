-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-08-2022 a las 06:35:09
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `MAJ_servicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades_1`
--

CREATE TABLE `novedades_1` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `novedades_1`
--

INSERT INTO `novedades_1` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'prueba1', 'prueba1', 'prueba1'),
(2, 'hola1', 'hola1', 'hola1'),
(3, 'adfadfadsadaf', 'gafgafgafgafg', 'afgafdgafgafg'),
(4, 'hola 2', 'hola 2', 'hola 2'),
(5, 'adfadfadsad', 'hola 3', 'hola 3'),
(6, 'wwwwww', 'wwwwww', 'wwwwwww'),
(7, 'hola 200', 'hola 200', 'hola 200'),
(8, 'hola 300', 'hola 300', 'hola 300'),
(9, 'que onda', 'que onda', 'que onda'),
(10, 'hola 200', '22', '22'),
(11, 'adfadfadsad', 'sdfasdfasdf', 'dfasdfasdfasdfas'),
(12, 'adsasdf', 'asdfasdfasdf', 'asdfasdfasdf'),
(13, 'hola400', 'hola400', 'hola400'),
(14, 'adfadf', 'asdfasdfadf', 'asdfa'),
(15, 'hola 500', 'hola 500', 'hola 500');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos_realizados`
--

CREATE TABLE `trabajos_realizados` (
  `id` int(11) NOT NULL,
  `instrumentacion_electricidad` text NOT NULL,
  `automatizacion_control` text NOT NULL,
  `prototipos_sistemas_enbebidos` text NOT NULL,
  `programacion_it` text NOT NULL,
  `direccion` text NOT NULL,
  `cp` text NOT NULL,
  `telefono` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajos_realizados`
--

INSERT INTO `trabajos_realizados` (`id`, `instrumentacion_electricidad`, `automatizacion_control`, `prototipos_sistemas_enbebidos`, `programacion_it`, `direccion`, `cp`, `telefono`) VALUES
(6, 'Vuelta de la Manzana: Ligato lidera tras el primer día, pero Cancio está muy cerca ¿Cómo es el cronograma del domingo?', 'Tras las tres pruebas especiales del día rulo inicial, el representante del Tango Rally, supera a otro de los grandes candidatos a quedarse con la fecha, Alejandro Cancio (Skoda Fabia Rally2) por apenas 5s4, mientras que Baldoni quedó en el tercer lugar, nueve décimas más atrás que el neuquino.', 'El sorteo de personas que podrán acceder a la compra de las primeras 62 de las 258 Viviendas del Programa “Reconstruir” que lleva adelante el Ministerio de Desarrollo Territorial y Hábitat de la Nación en Roca, se realizará el próximo miércoles 10 de Agosto a partir de las 19.\r\n\r\nSe realizará ante Escribano Público y se transmitirá en vivo a través del sitio web y redes sociales del Municipio de Roca.\r\n\r\nA partir del lunes 15,  además de publicar el resultado del sorteo, el Municipio contactará a los y las beneficiarias a fin de iniciar la adjudicación administrativa de la vivienda y la formalización de toda la documentación. Los casos de bajas de beneficiarios se cubrirán con los suplentes sorteados.', 'Una consiga clara marcó la marcha del viernes por la tarde en Cipolletti: Pedir justicia por Agustina Fernández a un mes de su asesinato. Ya han pasado 35 días desde aquel 2 de julio en que un desconocido la golpeó salvajemente, ataque que le causó la muerte tres días después en el hospital.\r\nAyer, a un mes de ese desenlace fatal, cientos de personas se sumaron a la marcha convocada por Silvana Capello, la mamá de Agustina, para reclamar el esclarecimiento del hecho. \"Sin justicia no hay paz\", fue el slogan y con esa consigna marcharon a partir de las 18 por las calles de Cipolletti, partiendo desde la plaza de la Justicia (San Martín).', 'Suiza 2753', 'CP: 8332 General Roca Rio Negro Argentina.', ' 0298-154201937.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Marco', '25f9e794323b453885f5181f1b624d0b'),
(2, 'Andres', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades_1`
--
ALTER TABLE `novedades_1`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajos_realizados`
--
ALTER TABLE `trabajos_realizados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades_1`
--
ALTER TABLE `novedades_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `trabajos_realizados`
--
ALTER TABLE `trabajos_realizados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
