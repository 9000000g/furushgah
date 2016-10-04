-- MySQL dump 10.13  Distrib 5.7.15, for Linux (x86_64)
--
-- Host: localhost    Database: furushgah
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `sale` int(11) NOT NULL,
  `body` text CHARACTER SET utf8,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,7,'محصول عنی میباشد.','2016-08-13 12:48:16'),(2,2,7,'خیلی محصول جالبی هستش :)','2016-08-13 12:46:27'),(3,5,7,'erfertert','2016-08-13 16:28:00'),(4,3,10,'اصلا ردیف نیست داداچ','2016-08-13 16:28:00'),(5,1,27,'خیلی ردیفه خدایی. بیاین بخریدش','2016-08-25 12:48:52'),(6,1,25,'این که واسه من بود!','2016-08-25 12:49:52'),(7,1,27,'چرا؟','2016-08-27 12:40:30'),(8,1,27,'سلام','2016-08-28 08:19:42'),(9,1,27,'داداچیا؟','2016-08-28 08:19:51'),(10,1,27,'چرا؟','2016-08-28 08:23:26'),(11,1,3,'خیلی ردیفه عزیزم :)','2016-08-28 08:43:43'),(12,1,26,'dasasd','2016-08-28 08:52:20'),(13,1,26,'عاااااااالی آقا عالییییی','2016-08-28 17:17:28'),(14,1,17,'سلام','2016-08-29 08:07:16'),(15,1,21,'salam','2016-09-13 16:46:19'),(16,1,14,'salam khubi?','2016-09-24 14:10:14'),(17,12,8,'چقد شرت خوبیه. تخفیفم داره؟','2016-09-25 19:48:01'),(18,5,26,'سلام','2016-10-03 08:23:20'),(19,5,26,'خوبی','2016-10-03 08:26:59'),(20,5,26,'آنتایم','2016-10-03 08:27:39'),(21,5,26,'چقد خوبه این','2016-10-03 08:28:09'),(22,1,27,'سلام','2016-10-03 14:53:08');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `sale` int(11) NOT NULL,
  PRIMARY KEY (`id`,`user`,`sale`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (8,1,22),(11,1,1),(15,1,18),(22,1,13),(23,1,10),(26,1,14),(27,1,23),(29,1,25),(30,1,17),(31,1,8),(32,1,26),(36,1,27),(37,1,7),(38,1,2),(39,1,21);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `followers` (
  `follower` int(11) NOT NULL,
  `following` int(11) NOT NULL,
  `trust` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`follower`,`following`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (1,2,1),(1,3,2),(1,4,2),(1,5,1),(1,6,3),(1,8,2),(1,10,2),(1,12,2),(2,1,0),(2,10,5),(3,1,0),(3,7,0),(4,1,0),(4,2,0),(4,3,3),(4,7,1),(4,10,5),(5,6,0),(5,10,5),(10,11,5),(11,1,3),(12,1,5),(12,4,5),(13,1,4);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `type` enum('sale','rent') DEFAULT NULL,
  `period` enum('year','month','week','day','hour') DEFAULT NULL COMMENT 'only if type is "rent"',
  `totalPrice` int(11) DEFAULT NULL,
  `periodPrice` int(11) DEFAULT NULL,
  `mortgagePrice` varchar(45) DEFAULT NULL,
  `body` text CHARACTER SET utf8,
  `user` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'پراید سال ۸۳',1,'2016-08-07 05:45:01','sale',NULL,3000000,NULL,NULL,'پراید مشتی خوبیه. خودم تازه خریدم. کلا ۱۰ کیلومتر کار کرده. خانومم یه بار کوبونده تو دیوار، ولی بدون رنگ دادم داییم درش آورد. خلاصه اگه بخری رفته تو پاچت.',1),(2,'خونه نقلی',2,'2016-08-08 07:35:20','rent','month',NULL,700000,'15000000','یه خونه نقلی داریم. آدرسش سر نواب، کوچه 42، پلاک 22',3),(3,'لپی مپی',3,'2016-08-08 14:25:30','sale','month',750000,NULL,NULL,'لپتاپ باسه خودم بوده :( اما بابا جونم میگه باید بلفوشمش :(',10),(4,'Dell 8900',3,'2016-08-09 06:28:24','sale','month',800000,NULL,NULL,'اینو عمم خریده داده به من. منم خوشم نیومد میخوام بفروشم.',8),(7,'کرایه کامپیوتر مشتی',3,'2016-08-09 12:58:12','rent','day',NULL,30000,'1000000','این کامپیوتر خیلی خفنه جاجی. بیا گرو بیگیر جون بچت ضرر نمیکنی',3),(8,'شرت خونی',3,'2016-08-09 13:33:57','rent','day',NULL,50000,'500000','توضیح موضیح یوخدی',7),(9,'دستگاه قند آرکری',4,'2016-08-13 11:05:48','sale','month',150000,NULL,NULL,'خیلی مشتیه به جون بچم. خدایی بیا بخر دیگه ناموسا. می‌خری؟',2),(10,'کامپیوتر خفن',3,'2016-08-13 11:34:06','sale','month',750000,NULL,NULL,'این کامپیوتر خیلی خوفه. همه چیش عالیه.',4),(11,'لپتاپ',3,'2016-08-13 16:27:37','rent','week',NULL,15000,'30000','این لپتاپ خوبیه',1),(13,'خربزه درشت مشدی',5,'2016-08-23 11:40:42','sale','month',1500,NULL,NULL,'خربزه درشت مشدی بدم فقط هزااااار',4),(14,'گومبا گومبا',2,'2016-08-23 11:55:06','sale','month',0,NULL,NULL,'این نسخه قدیمی تره',1),(15,'sad',1,'2016-08-23 11:56:29','sale','month',9,NULL,NULL,'asdasdasd',1),(17,'zxc',1,'2016-08-23 12:05:50','sale','month',12,NULL,NULL,'dsfsdfsd',1),(18,'تست جدید',2,'2016-08-24 10:04:57','sale','month',3,NULL,NULL,'asdasdasd',1),(21,'34',1,'2016-08-24 10:08:36','sale','month',34,NULL,NULL,'234324',3),(22,'34',1,'2016-08-24 10:09:29','sale','month',34,NULL,NULL,'234324',5),(23,'sad',1,'2016-08-24 12:25:01','sale','month',123,NULL,NULL,'asdasd',6),(25,'sad',1,'2016-08-24 12:28:25','sale','month',123,NULL,NULL,'asdasd',6),(26,'عکس سنگین',1,'2016-08-24 12:29:43','sale','month',99,NULL,NULL,'سسسسشیشیسشسیشیس',5),(27,'از موبایل',4,'2016-08-29 20:56:39','sale','month',80000,NULL,NULL,'لیوان کافه نال',1),(28,'test',2,'2016-09-24 14:25:40','sale',NULL,900000000,NULL,NULL,'test 1',11),(29,'هویج',4,'2016-09-25 19:51:22','sale',NULL,4000,NULL,NULL,'این هویج خیلی عالیه. بمالی زیر بغلت یه هفته نکشیده پرپشت میشه.',12),(30,'کافه نال',5,'2016-10-03 10:40:07','sale',NULL,300000,NULL,NULL,'این طرح تستی رو واسه کافه نال کشیدم.',13),(34,'کافه نال',4,'2016-10-03 10:44:24','sale',NULL,11000,NULL,NULL,'این طرح تستی دوم کافه نال',13);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mobile` varchar(20) CHARACTER SET utf8 NOT NULL,
  `alias` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'qazwsx','09365586015','امیر مومنیان'),(2,'qazwsx','09125529011','حسن جوهرچی'),(3,'qazwsx','09398882340','نگار جواهریان'),(4,'qazwsx','09114540023','سید بختک فول‌آرشیو منش'),(5,'qazwsx','09128905858','علیرضا رضایی'),(6,'qazwsx','09117904783','لوک خوش‌شانس'),(7,'qazwsx','09337890059','رامی مالک'),(8,'qazwsx','09366621020','عباس بنفشی'),(9,'qazwsx','09334612035','مریم امینی'),(10,'qazwsx','09365586017','عباس جدیدی'),(11,'123456','09122999136','جناب مختارپور'),(12,'qazwsx','09333612030','مریم ۲'),(13,'qazwsx','09815556677','علی مدیری');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-04 12:10:55
