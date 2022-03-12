CREATE DATABASE  IF NOT EXISTS `groupomania` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `groupomania`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `commenter_id` int NOT NULL,
  `post_id` int NOT NULL,
  `comment` text,
  `datecreate` datetime NOT NULL,
  `date_update` datetime DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,7,5,'Mon beau commentaire','2022-03-04 11:51:21','2022-03-04 11:51:21'),(2,7,2,'Mon commentaire Test','2022-03-04 12:20:22','2022-03-04 12:20:22');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `follower_id` int NOT NULL,
  `following_id` int NOT NULL,
  PRIMARY KEY (`follower_id`,`following_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,3),(3,4);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `liker_id` int NOT NULL,
  `post_liked_id` int NOT NULL,
  PRIMARY KEY (`liker_id`,`post_liked_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `post_body` text,
  `datecreate` datetime NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (4,7,'Mon post pas beau','2022-03-03 12:16:23'),(5,7,'Mon nouveau post genial','2022-03-03 12:17:22'),(9,7,'Lorem ipsum dolor sit amet. Non laboriosam autem et voluptatem perspiciatis et galisum necessitatibus et voluptatem corporis. Qui odio commodi sit quidem minus et quidem atque. Ut quam repellat et iure laborum ut dignissimos tempore corrupti consequatur ea eaque iste et neque ducimus sed omnis tenetur.\n\nAd consequatur laboriosam sed harum obcaecati non quos enim sit nisi sunt qui quaerat esse non consectetur sunt. Quo rerum accusantium sit dolorem quam in sunt optio ab culpa recusandae eum laudantium consectetur ut temporibus iste. Qui blanditiis temporibus et quis excepturi ut fugiat eos quod ducimus eos optio vero et esse dolorem. Et incidunt nulla ut optio doloribus vel voluptas internos eos eaque officia.\n\nIn dolorum eius 33 optio expedita aut ullam incidunt At libero obcaecati ut dolorum ipsum cum officiis quidem et velit iusto. Vel ipsa magni eum laboriosam quia et voluptatem fugiat est laudantium maiores id pariatur quia in labore natus aut quod laudantium. Eos reprehenderit dicta et quia excepturi aut fuga autem eos unde quae.','2022-03-04 17:02:09'),(10,10,'Genial je suis admin !','2022-03-04 18:35:35'),(11,10,'J\'ecris des posts comme sur twitter !','2022-03-04 18:36:29'),(12,11,'Lorem ipsum dolor sit amet. Non laboriosam autem et voluptatem perspiciatis et galisum necessitatibus et voluptatem corporis. Qui odio commodi sit quidem minus et quidem atque. Ut quam repellat et iure laborum ut dignissimos tempore corrupti consequatur ea eaque iste et neque ducimus sed omnis tenetur. Ad consequatur laboriosam sed harum obcaecati non quos enim sit nisi sunt qui quaerat esse non consectetur sunt. Quo rerum accusantium sit dolorem quam in sunt optio ab culpa recusandae eum laudantium consectetur ut temporibus iste. Qui blanditiis temporibus et quis excepturi ut fugiat eos quod ducimus eos optio vero et esse dolorem. Et incidunt nulla ut optio doloribus vel voluptas internos eos eaque officia. In dolorum eius 33 optio expedita aut ullam incidunt At libero obcaecati ut dolorum ipsum cum officiis quidem et velit iusto. Vel ipsa magni eum laboriosam quia et voluptatem fugiat est laudantium maiores id pariatur quia in labore natus aut quod laudantium. Eos reprehenderit dicta et quia excepturi aut fuga autem eos unde quae. Tout ça est bien jolie !','2022-03-04 18:48:00');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_bio` varchar(255) DEFAULT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_firstname` varchar(100) NOT NULL,
  `user_admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,'test@mail.com','$2b$10$itlQUO12/YwvzNnhXhWMkOBHctobFE/Uz6fu9iDeUOcSBz2TC2OeK','Ma super biographie est magnifique !!!','Paul','Jean',0),(10,'test3@mail.com','$2b$10$gpB35m7fCGd.qTTZmN4PoOHrt.Rwxl9XyCFoYGwiIrT2zREhm8bYe',NULL,'Kitten','Paulo',1),(11,'test1.0@mail.com','$2b$10$BCgmNlI34bNHiz9/Pk87YeYYmzzkauN7SnUjr70zwpwIw/3Hblo/m','J\'ai une belle bio !','Loïc','Lens',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-04 19:06:44
