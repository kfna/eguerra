-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 01, 2019 at 08:18 AM
-- Server version: 5.7.23
-- PHP Version: 5.6.37

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
  `cliente` varchar(128) NOT NULL,
  `datos` text NOT NULL,
  `status` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `cliente`, `datos`, `status`) VALUES
(1, 'Sonia Alejandra Hernandez Martell', '', 1),
(2, 'Luis Cruz', '', 1),
(3, 'Juan Jose Sanchez Cortez', '', 1);

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
  `servicio` varchar(256) NOT NULL,
  `descripcion` varchar(256) NOT NULL,
  `precio` double NOT NULL,
  `status` smallint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicio`
--

INSERT INTO `servicio` (`id`, `servicio`, `descripcion`, `precio`, `status`) VALUES
(1, 'Servicio II', 'prueba', 100, 1),
(2, 'Servicio II3', 'prueba', 100, 1);

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
  MODIFY `id` smallint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` smallint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
