-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-08-2022 a las 00:33:08
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
(2, 'hola 1', 'hola 1', 'hola 1');

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
(6, 'Al parecer, el incidente se produjo en uno de los «separadores» (de gas y petróleo). Un equipo de grandes dimensiones explotó y la onda expansiva terminó afectando al menos a cuatro operarios que estaban cerca del lugar.', 'Trascendió de fuentes oficiales que se trata de una planta que pertenece a la firma President que opera en ese sector. Al parecer, el incidente se produjo en uno de los “separadores” (de gas y petróleo), un equipo de grandes dimensiones que explotó. Desde el Sindicato del Petróleo y Gas Privado de Río Negro, Neuquén y La Pampa señalaron que la onda expansiva terminó afectando al menos a cuatro operarios que estaban cerca del lugar y que uno de ellos fue hospitalizado. Sin embargo la compañía President aseguró que no se registraron heridos.', 'Por su parte el secretario General del Sindicato del Petróleo y Gas Privado de Río Negro, Neuquén y La Pampa, Marcelo Rucci, manifestó que “de milagro la explosión no generó algún muerto”.\r\n“Es más de lo mismo que venimos diciendo desde hace rato”, dijo el dirigente quien aclaró que en una oportunidad llegaron al Ministerio de Trabajo de la Nación para lograr la conformación de un Comité de Emergencia.', 'Hubo un despliegue de fuerzas de seguridad, bomberos y personal privado a partir de una explosión registrada antes de las 11 de ayer, en la planta de una empresa petrolera ubicada a 35 kilómetros al Norte de General Roca, por la Ruta Provincial N° 6.\r\n\r\nSegún información trascendida, cuatro personas tuvieron que ser asistidas, al parecer por personal médico, pero nadie sufrió heridas de gravedad.\r\n\r\nAsimismo, se supo que al menos tres dotaciones de los Bomberos roquenses fueron hasta el lugar ya que como consecuencia de la explosión se produjo un incendio que afectó a gran parte de la planta. También trabajó en el hecho una ambulancia del Siarme.\r\n\r\n', 'Direccion: Suiza Nº 2753', 'Cp: 8332 General Roca Rio Negro Argentina', 'Tel: 0298-154201937');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
