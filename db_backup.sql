-- MySQL dump 10.13  Distrib 5.7.23, for osx10.9 (x86_64)
--
-- Host: localhost    Database: eguerra
-- ------------------------------------------------------
-- Server version	5.7.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banco` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `banco` varchar(128) NOT NULL,
  `no_cuenta` smallint(12) NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` smallint(3) NOT NULL AUTO_INCREMENT,
  `folio` int(11) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `datos` text NOT NULL,
  `medio` varchar(16) NOT NULL,
  `status` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `folio` (`folio`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,13065,'Rogelio Ramiro Gonzalez Ramirez','{\"telefono\":\"\",\"movil\":\"\",\"email\":\"\"}','',1),(2,12959,'Emilia Fernanda Muñiz','{\"telefono\":\"8123850902\",\"movil\":\"8110782087\",\"email\":\"\"}','',1),(3,12410,'Yesenia Cadena Campos','{\"telefono\":\"8127321055\",\"movil\":\"8127330220\",\"email\":\"\"}','',1),(4,12838,'Ana Delia Torres y Ricardo Rodriguez','{\"telefono\":\"8186049269\",\"movil\":\"8117119659\",\"email\":\"\"}','',1),(5,12762,'Abelita de la Cruz Quintanilla','{\"telefono\":\"8117982814\",\"movil\":\"\",\"email\":\"\"}','',1),(6,13035,'Patricia Martinez Vazquez','{\"telefono\":\"8124056531\",\"movil\":\"8128640738\",\"email\":\"\"}','',1),(7,13034,'Andrea Judith Vidales de Leon','{\"telefono\":\"\",\"movil\":\"8118412406\",\"email\":\"\"}','',1),(8,13008,'Jorge Contreras','{\"telefono\":\"8112629057\",\"movil\":\"8117787428\",\"email\":\"\"}','',1),(9,13033,'Sonia Aldape Jara','{\"telefono\":\"\",\"movil\":\"8182520456\",\"email\":\"\"}','',1),(10,12628,'Marlene Lira y Cesar Guerrero','{\"telefono\":\"8124661177\",\"movil\":\"8127252795\",\"email\":\"\"}','',1),(11,13012,'Aquiles Leon del Castillo Cerda ','{\"telefono\":\"8122050547\",\"movil\":\"8110755800\",\"email\":\"\"}','',1),(12,12739,'Lucila Rangel Reyes','{\"telefono\":\"25298535\",\"movil\":\"8112553995\",\"email\":\"\"}','',1),(13,12888,'Juana Josefina Amaro de la Fuente ','{\"telefono\":\"8111797756\",\"movil\":\"8116162611\",\"email\":\"\"}','',1),(14,12970,'Laura Mendoza Martinez','{\"telefono\":\"83396888\",\"movil\":\"8180104725\",\"email\":\"\"}','',1),(15,13040,'Elizabeth Manrriquez','{\"telefono\":\"8113019228\",\"movil\":\"\",\"email\":\"\"}','',1),(16,12891,'Claudia Morales Reyna','{\"telefono\":\"\",\"movil\":\"8111812033\",\"email\":\"\"}','',1),(17,12318,'Lourdes Alejandra Davila de Leon','{\"telefono\":\"12979437\",\"movil\":\"8128983442\",\"email\":\"\"}','',1),(18,12939,'Sanjuana Mayela Laureano','{\"telefono\":\"\",\"movil\":\"8116318690\",\"email\":\"\"}','',1),(19,12459,'Silvia Alvarado','{\"telefono\":\"83791947\",\"movil\":\"8110645077\",\"email\":\"\"}','',1),(20,13039,'Brenda Castillo Salazar','{\"telefono\":\"\",\"movil\":\"8110695445\",\"email\":\"\"}','',1),(21,13038,'Mariel Galvan Gamez','{\"telefono\":\"8112360468\",\"movil\":\"8116713182\",\"email\":\"\"}','',1),(22,13037,'Carmen Cisneros','{\"telefono\":\"8182546511\",\"movil\":\"8110816754\",\"email\":\"\"}','',1),(23,12167,'Ruben Dario Hernandez Lara ','{\"telefono\":\"\",\"movil\":\"8117989333\",\"email\":\"\"}','',1),(24,13001,'Teresa de Jesus Rojas','{\"telefono\":\"\",\"movil\":\"8112883920\",\"email\":\"\"}','',1),(25,12910,'Karina Carrillo Vazquez','{\"telefono\":\"\",\"movil\":\"8120032682\",\"email\":\"\"}','',1),(26,12958,'Adriana Torres Bernal','{\"telefono\":\"\",\"movil\":\"8116101177\",\"email\":\"\"}','',1),(27,12775,'Arcelia Juarez Arevalo','{\"telefono\":\"11681557\",\"movil\":\"8118692574\",\"email\":\"\"}','',1),(28,12055,'Lucia Vivas Carranza','{\"telefono\":\"83813819\",\"movil\":\"8110697931\",\"email\":\"\"}','',1),(29,13036,'Blanca Helena Hernandez Perez','{\"telefono\":\"9991390289\",\"movil\":\"9991333023\",\"email\":\"\"}','',1),(30,12885,'Carmina Ruiz','{\"telefono\":\"8119930266\",\"movil\":\"8116359202\",\"email\":\"\"}','',1),(31,12341,'Blanca Zapata Hernandez','{\"telefono\":\"8117552791\",\"movil\":\"8115000570\",\"email\":\"\"}','',1),(32,12627,'Mayra Judith Betancurt Cruz','{\"telefono\":\"\",\"movil\":\"8186839651\",\"email\":\"\"}','',1),(33,11461,'Alberto Ochoa Perez','{\"telefono\":\"8116900919\",\"movil\":\"8119727030\",\"email\":\"\"}','',1),(34,12497,'Brenda Liliana Rodriguez Padilla ','{\"telefono\":\"\",\"movil\":\"8182591801\",\"email\":\"\"}','',1),(35,12033,'Leticia Rendon Bernal','{\"telefono\":\"83003658\",\"movil\":\"8119750278\",\"email\":\"\"}','',1),(36,12844,'Daniela Malenhi Martinez Herrera ','{\"telefono\":\"\",\"movil\":\"8111279716\",\"email\":\"\"}','',1),(37,12707,'Sayuri Maldonado','{\"telefono\":\"8115006876\",\"movil\":\"8110407937\",\"email\":\"\"}','',1),(38,12856,'Dalia Ramos Hernandez','{\"telefono\":\"\",\"movil\":\"8112392088\",\"email\":\"\"}','',1),(39,12417,'Mayra Judith Lopez Martinez','{\"telefono\":\"21673951\",\"movil\":\"8125670532\",\"email\":\"\"}','',1),(40,12433,'Lucia Guadalupe Alvarado Hernandez','{\"telefono\":\"8121526118\",\"movil\":\"\",\"email\":\"\"}','',1),(41,12595,'Valeria Lizeth Fortuna Sanchez','{\"telefono\":\"8341563950\",\"movil\":\"8341486364\",\"email\":\"\"}','',1),(42,11892,'Ruth de la Rosa Gallegos ','{\"telefono\":\"83104729\",\"movil\":\"8120081526\",\"email\":\"\"}','',1),(43,12211,'Erika Aide Martinez Castro','{\"telefono\":\"8116005652\",\"movil\":\"8110048018\",\"email\":\"\"}','',1),(44,12926,'Edson Rojas Cantu','{\"telefono\":\"21708777\",\"movil\":\"8124666034\",\"email\":\"\"}','',1),(45,12882,'Juan Miguel Ramirez Ordaz','{\"telefono\":\"21835367\",\"movil\":\"8118981623\",\"email\":\"\"}','',1),(46,1,'Perla Janeth Suarez Gomez','{\"telefono\":\"\",\"movil\":\"8115841796\",\"email\":\"\"}','',1),(47,1,'Sonia Alejandra Hernandez Martell','{\"telefono\":\"8183000000\",\"movil\":\"8180000000\",\"correo\":null,\"direccion\":\"Ave, Blvd. Puerta del Sol 526 Sur, Colinas de San Jerónimo\"}','fb',1),(48,1,'','{\"telefono\":\"\",\"movil\":\"\",\"correo\":null,\"direccion\":\"\"}','fb',1);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concepto`
--

DROP TABLE IF EXISTS `concepto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `concepto` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `concepto` varchar(128) NOT NULL,
  `descripcion` text NOT NULL,
  `precio_base` int(11) NOT NULL,
  `unidad` varchar(16) NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepto`
--

LOCK TABLES `concepto` WRITE;
/*!40000 ALTER TABLE `concepto` DISABLE KEYS */;
INSERT INTO `concepto` VALUES (1,'RECUPERACIÓN DE VIGAS','Recuperación de vigas según especificaciones de proveedor. Incluye: herramienta, maquinaria, mano de obra, equipo y todo lo necesario para su correcta ejecución.',330,'Pza',1),(2,'Bacteria Biodigestora Bacilli-Gra','Bacteria Biodigestora Bacilli-Gra',499,'kg',1);
/*!40000 ALTER TABLE `concepto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentos` (
  `id` bigint(20) NOT NULL,
  `id_cliente` bigint(20) NOT NULL,
  `archivo` varchar(128) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago`
--

DROP TABLE IF EXISTS `pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pago` (
  `id` bigint(20) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `tipo` varchar(3) NOT NULL COMMENT 'Anticipo | Abono',
  `fecha` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago`
--

LOCK TABLES `pago` WRITE;
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedor` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `proveedor` varchar(128) NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remision`
--

DROP TABLE IF EXISTS `remision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `remision` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `id_cliente` smallint(3) NOT NULL,
  `id_usuario` smallint(2) NOT NULL,
  `id_contacto` smallint(3) NOT NULL,
  `folio` varchar(6) NOT NULL,
  `osid` varchar(6) NOT NULL,
  `conceptos` text NOT NULL,
  `subtotal` float NOT NULL,
  `IVA` float NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remision`
--

LOCK TABLES `remision` WRITE;
/*!40000 ALTER TABLE `remision` DISABLE KEYS */;
INSERT INTO `remision` VALUES (1,1,1,1,'44','2234','',19800,16,1);
/*!40000 ALTER TABLE `remision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tipo` smallint(1) NOT NULL,
  `servicio` varchar(256) NOT NULL,
  `costo` double NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (1,1,'Servicio I',100,1),(2,1,'Servicio II',200,1),(3,1,'Servicio III',300,1),(4,1,'Servicio IV',400,1),(25,1,'Instalación ',10000,1),(24,1,'A',1000,1),(23,2,'Paquete #1',300,1);
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio_atributos`
--

DROP TABLE IF EXISTS `servicio_atributos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio_atributos` (
  `id_servicio` smallint(3) NOT NULL,
  `paquete` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio_atributos`
--

LOCK TABLES `servicio_atributos` WRITE;
/*!40000 ALTER TABLE `servicio_atributos` DISABLE KEYS */;
INSERT INTO `servicio_atributos` VALUES (10,''),(11,''),(12,''),(13,''),(14,''),(15,''),(16,''),(17,''),(18,''),(19,''),(20,''),(21,''),(22,''),(23,'');
/*!40000 ALTER TABLE `servicio_atributos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` smallint(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `contrasena` varchar(16) NOT NULL,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'captura','luis@kafeina.com','123',1),(2,'','luis@nertek.mx','123',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `folio` int(11) DEFAULT NULL,
  `id_cliente` smallint(6) NOT NULL,
  `id_usuario` smallint(6) NOT NULL,
  `total` double DEFAULT NULL,
  `fecha_evt` date DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` text,
  `status` smallint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,24022,1,1,20800,'2019-11-29','2019-11-02 18:26:26',NULL,1),(2,23974,6,1,22800,'2019-12-10','2019-10-28 15:43:07',NULL,1),(3,23973,7,1,12900,'2019-11-27','2019-10-28 14:44:26',NULL,1),(4,23971,9,1,3000,'2019-11-17','2019-10-28 14:07:06',NULL,1),(5,23996,15,1,850,'2020-02-19','2019-10-30 13:44:58',NULL,1),(6,23991,20,1,21800,'2020-03-20','2019-10-29 18:00:06',NULL,1),(7,23990,21,1,21800,'2020-08-19','2019-10-29 16:49:08',NULL,1),(8,23989,22,1,20800,'2019-12-26','2019-10-29 16:12:24',NULL,1),(9,23981,29,1,2500,'2019-12-20','2019-10-29 10:43:26',NULL,1),(10,24022,1,1,20800,'2020-01-16','2019-11-02 18:26:26',NULL,1),(11,23974,6,1,22800,'2020-03-27','2019-10-28 15:43:07',NULL,1),(12,23973,7,1,12900,'2020-03-24','2019-10-28 14:44:26',NULL,1),(13,23971,9,1,3000,'2020-07-18','2019-10-28 14:07:06',NULL,1),(14,23996,15,1,850,'2020-06-11','2019-10-30 13:44:58',NULL,1),(15,23991,20,1,21800,'2020-06-26','2019-10-29 18:00:06',NULL,1),(16,23990,21,1,21800,'2020-07-24','2019-10-29 16:49:08',NULL,1),(17,23989,22,1,20800,'2020-03-28','2020-06-19 16:12:24',NULL,1),(18,23981,29,1,2500,'2020-06-25','2019-10-29 10:43:26',NULL,1);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_abono`
--

DROP TABLE IF EXISTS `venta_abono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta_abono` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `id_venta` bigint(20) NOT NULL,
  `id_usuario` smallint(3) NOT NULL,
  `monto` double NOT NULL,
  `tipo` varchar(16) NOT NULL,
  `medio` varchar(16) NOT NULL,
  `fecha` datetime NOT NULL,
  `status` smallint(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_abono`
--

LOCK TABLES `venta_abono` WRITE;
/*!40000 ALTER TABLE `venta_abono` DISABLE KEYS */;
INSERT INTO `venta_abono` VALUES (1,2,1,500,'Abono','td','2019-11-15 14:25:57',1),(2,4,1,3000,'Abono','ef','2019-11-15 14:59:16',1),(3,3,1,200,'Abono','tc','2019-11-15 15:06:42',1),(4,3,1,800,'Abono','tc','2019-11-15 15:06:56',1);
/*!40000 ALTER TABLE `venta_abono` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-17 12:28:05
