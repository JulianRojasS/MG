-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: md
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `precio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(2,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(3,'Closed de pino.','Closets','https://www.modugrifer.com/Img/closet1.png',4000000),(4,'Lavamanos con estanteria.','Baños y lavaderos','https://www.modugrifer.com/Img/ba%C3%B1o2.png',1500000),(5,'Cama estrellada','Mobiliario interior','https://www.modugrifer.com/Img/MB1.png',800000),(6,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(7,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(8,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(9,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(10,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(11,'Mesa de centro','Centros de entretenimiento','https://mueblesjuventud.com/wp-content/uploads/2022/04/mesa-babilon-scaled.webp',500000),(12,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(13,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(14,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(15,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(16,'Cocina en marmol.','Cocinas','https://www.modugrifer.com/Img/cocina1.png',3000000),(17,'Closed de pino.','Closets','https://www.modugrifer.com/Img/closet1.png',4000000),(18,'Closed de pino.','Closets','https://www.modugrifer.com/Img/closet1.png',4000000),(19,'Lavamanos con estanteria.','Baños y lavaderos','https://www.modugrifer.com/Img/ba%C3%B1o2.png',1500000),(20,'Lavamanos con estanteria.','Baños y lavaderos','https://www.modugrifer.com/Img/ba%C3%B1o2.png',1500000),(21,'Cama estrellada','Mobiliario interior','https://www.modugrifer.com/Img/MB1.png',800000),(22,'Cama estrellada','Mobiliario interior','https://www.modugrifer.com/Img/MB1.png',800000);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-03 21:23:18
