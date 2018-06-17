DROP TABLE IF EXISTS `order-details`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `product-category-name`;

CREATE TABLE `product_category_name` (
  `pcid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`pcid`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product_category_name` VALUES 
(1, 'Elektronika'),
(2, 'Edukacja'),
(3, 'Zabawa'),
(4, 'Moda'),
(5, 'Motoryzacja');

CREATE TABLE `user_details` (
  `udid` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `name`     varchar (30) NULL,
  `surname` varchar (50) NULL,
  `address`    varchar (200) NULL,
  `phone`  varchar (20) NULL,
  `email`    varchar (30) NULL,
  `isDeleted` Boolean NULL DEFAULT FALSE,
  PRIMARY KEY (`udid`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_details` VALUES
(1,'Janusz', 'Piechut', 'Poznań', '123456789', 'jankomuzykant@tlen.pl',0),
(2, 'Michal', 'Drej', 'Kraków', '678568372', 'michal5drej@a.pl',0),
(3, 'Hannibal', 'Lecter', 'Washington DC', NULL, 'itwasntme@ilied.com',0),
(4,'Dominik', 'Awokado', 'Wrocław', '812392098', 'kocham@trzmiele.pl',0),
(5, 'Wladyslaw', 'Unnamed', 'Warszawa', '567876589', 'wladyslaw@maria.pl',0);

CREATE TABLE `user` (
  `uid` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar (20) NOT NULL,
  `password` varbinary(100) NOT NULL,
  `id_ud` int(10) unsigned NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `id_udx` (`id_ud`),
  CONSTRAINT `fk_user_details`  FOREIGN KEY (`id_ud`) REFERENCES `user_details`  (`udid`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES
(1, 'ala', 'makota',1),
(2, 'Michal91', '68656c6c6f' ,2),
(3, 'RedDragon', '68656c6c6f',3),
(4, 'Trzmiel', '68656c6c6f',4),
(5, 'Franciszkanin986','68656c6c6f',5);


CREATE TABLE `product` (
  `pid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_pc` int(10) unsigned NOT NULL,
  `id_u` int(10) unsigned NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` int(10),
  `description` varchar(200),
  `isDeleted` Boolean NULL DEFAULT FALSE,
  `isBought` Boolean NULL DEFAULT FALSE,
  PRIMARY KEY (`pid`),
  KEY `id_pcx` (`id_pc`),
  KEY `id_ux` (`id_u`),
  CONSTRAINT `fk_product_product-category`  FOREIGN KEY (`id_pc`) REFERENCES `product_category_name`  (`pcid`) ON UPDATE CASCADE,
  CONSTRAINT `fk_product_user` FOREIGN KEY (`id_u`) REFERENCES `user` (`uid`) ON UPDATE CASCADE
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` VALUES
(1, 1, 1, 'Samsung Galaxy Note 9+', 3500, 'smartphone',0,0),
(2, 4, 1, 'DELL INSPIRON 5739', 4000, 'laptop',0,0),
(3, 3, 3, 'Carnival Mask', 150, 'useful carnival, halloween mask for everyone',0,0),
(4, 5, 1, 'iPhone X', 5500, 'apple newest smartphone, best smartphone ever',0,0),
(5, 2, 1, 'Tesla S', 200000, 'Teslas electric car',0,0);

CREATE TABLE `order` (
    `odid` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `id_ub` INT(10) unsigned NOT NULL,
    `id_p` INT(10) unsigned NOT NULL,
    `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`odid`),
    KEY `id_ubx` (`id_ub`),
    KEY `id_px` (`id_p`),
    CONSTRAINT `fk_order_user` FOREIGN KEY (`id_ub`) REFERENCES `user` (`uid`) ON UPDATE CASCADE,
    CONSTRAINT `fk_order_product` FOREIGN KEY (`id_p`) REFERENCES `product` (`pid`) ON UPDATE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `order` VALUES
(1,2,1,'2018-05-01'),
(2,1,2,'2018-05-01');
