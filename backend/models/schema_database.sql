DROP DATABASE IF EXISTS dwec2ev;
CREATE DATABASE IF NOT EXISTS dwec2ev;
USE dwec2ev;



-- Crea la tabla de libros

CREATE TABLE `book`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `title`         VARCHAR(255) NOT NULL ,
  `img`           VARCHAR(255) NULL ,
  `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`title`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

-- Inserta algunos libros de prueba

INSERT INTO book(id,title,img) VALUES 
(1,'Libro 1',"https://loremflickr.com/320/240"),
(2,'Libro 2',"https://loremflickr.com/320/240"),
(3,'JavaScript',"http://localhost:3000/images/Javascript_Logo.png"),
(4,'Php',"http://localhost:3000/images/Javascript_Logo.png"),
(5,'Los gatitos',"https://loremflickr.com/320/240"),
(6,'Los perritos',"https://loremflickr.com/320/240"),
(7,'Los asquerosos',"http://localhost:3000/images/los_asquerosos.jpg"),
(8,'Poesía básica',"http://localhost:3000/images/poesia_basica.jpeg");


DELIMITER $$
CREATE PROCEDURE `sp_search_language_by_id`(in langid int)
BEGIN
    SELECT name, githut_rank, pypl_rank, tiobe_rank, created_at
    FROM language
    where id = langid;
END $$

DELIMITER $$
CREATE PROCEDURE `sp_search_book_by_id`(in bookid int)
BEGIN
    SELECT id, title, img, created_at
    FROM book
    where id = bookid;
END $$