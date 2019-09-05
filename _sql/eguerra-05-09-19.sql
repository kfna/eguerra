-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 05, 2019 at 12:14 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eguerra`
--

-- --------------------------------------------------------

--
-- Table structure for table `banco`
--

CREATE TABLE `banco` (
  `id` smallint(6) NOT NULL,
  `banco` varchar(128) NOT NULL,
  `no_cuenta` smallint(12) NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id` smallint(3) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `datos` text NOT NULL,
  `status` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `datos`, `status`) VALUES
(1, 'Luis Alfonso Cruz Rodríguez', '{\"telefono\":\"8183000524\",\"movil\":\"8183623411\",\"correo\":\"luis@kafeina.com\",\"cp\":\"64610\",\"direccion\":\"Juan Davis 2804\",\"observaciones\":\"Prueba...\"}', 1),
(2, 'Sonia Alejandra Hernandez Martell', '{\"telefono\":\"8183000000\",\"movil\":\"8182529182\",\"correo\":\"sahmartell@hotmail.com\",\"cp\":\"64630\",\"direccion\":\"BALCONES 3 #1312, COL BALCONES DE COLINAS DE SAN JERONIMO\",\"observaciones\":\"Ninguna.\"}', 1),
(8, 'Ramiro Moreno', '{\"telefono\":\"\",\"movil\":\"\",\"correo\":\"\",\"cp\":\"\",\"direccion\":\"\",\"observaciones\":\"\"}', 1),
(7, 'abc', '{\"telefono\":\"12414124\",\"movil\":\"241241\",\"correo\":\"2412412\",\"cp\":\"4124\",\"direccion\":\"24124\",\"observaciones\":\"12421\"}', 1);

-- --------------------------------------------------------

--
-- Table structure for table `concepto`
--

CREATE TABLE `concepto` (
  `id` smallint(6) NOT NULL,
  `concepto` varchar(128) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_base` int(11) NOT NULL,
  `unidad` varchar(16) NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `concepto`
--

INSERT INTO `concepto` (`id`, `concepto`, `descripcion`, `precio_base`, `unidad`, `status`) VALUES
(1, 'RECUPERACIÓN DE VIGAS', 'Recuperación de vigas según especificaciones de proveedor. Incluye: herramienta, maquinaria, mano de obra, equipo y todo lo necesario para su correcta ejecución.', 330, 'Pza', 1),
(2, 'Bacteria Biodigestora Bacilli-Gra', 'Bacteria Biodigestora Bacilli-Gra', 499, 'kg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `documentos`
--

CREATE TABLE `documentos` (
  `id` bigint(20) NOT NULL,
  `id_cliente` bigint(20) NOT NULL,
  `archivo` varchar(128) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pago`
--

CREATE TABLE `pago` (
  `id` bigint(20) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `tipo` varchar(3) NOT NULL COMMENT 'Anticipo | Abono',
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `proveedor`
--

CREATE TABLE `proveedor` (
  `id` smallint(6) NOT NULL,
  `proveedor` varchar(128) NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `remision`
--

CREATE TABLE `remision` (
  `id` smallint(6) NOT NULL,
  `id_cliente` smallint(3) NOT NULL,
  `id_usuario` smallint(2) NOT NULL,
  `id_contacto` smallint(3) NOT NULL,
  `folio` varchar(6) NOT NULL,
  `osid` varchar(6) NOT NULL,
  `conceptos` text NOT NULL,
  `subtotal` float NOT NULL,
  `IVA` float NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `remision`
--

INSERT INTO `remision` (`id`, `id_cliente`, `id_usuario`, `id_contacto`, `folio`, `osid`, `conceptos`, `subtotal`, `IVA`, `status`) VALUES
(1, 1, 1, 1, '44', '2234', '', 19800, 16, 1);

-- --------------------------------------------------------

--
-- Table structure for table `servicio`
--

CREATE TABLE `servicio` (
  `id` bigint(20) NOT NULL,
  `tipo` smallint(1) NOT NULL,
  `servicio` varchar(256) NOT NULL,
  `costo` double NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicio`
--

INSERT INTO `servicio` (`id`, `tipo`, `servicio`, `costo`, `status`) VALUES
(1, 1, 'Servicio I', 100, 1),
(2, 1, 'Servicio II', 200, 1),
(3, 1, 'Servicio III', 300, 1),
(4, 1, 'Servicio IV', 400, 1),
(23, 2, 'Paquete #1', 300, 1);

-- --------------------------------------------------------

--
-- Table structure for table `servicio_atributos`
--

CREATE TABLE `servicio_atributos` (
  `id_servicio` smallint(3) NOT NULL,
  `paquete` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicio_atributos`
--

INSERT INTO `servicio_atributos` (`id_servicio`, `paquete`) VALUES
(10, ''),
(11, ''),
(12, ''),
(13, ''),
(14, ''),
(15, ''),
(16, ''),
(17, ''),
(18, ''),
(19, ''),
(20, ''),
(21, ''),
(22, ''),
(23, '');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` smallint(2) NOT NULL,
  `email` varchar(128) NOT NULL,
  `contrasena` varchar(16) NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `contrasena`, `status`) VALUES
(1, 'luis@kafeina.com', '123', 1),
(2, 'luis@nertek.mx', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `venta`
--

CREATE TABLE `venta` (
  `id` int(11) NOT NULL,
  `id_cliente` smallint(6) NOT NULL,
  `id_usuario` smallint(6) NOT NULL,
  `fecha_evt` date NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `concepto`
--
ALTER TABLE `concepto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `remision`
--
ALTER TABLE `remision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banco`
--
ALTER TABLE `banco`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` smallint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `concepto`
--
ALTER TABLE `concepto`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `remision`
--
ALTER TABLE `remision`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` smallint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
