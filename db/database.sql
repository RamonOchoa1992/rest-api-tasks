CREATE DATABASE IF NOT EXISTS projectdb;

USE projectdb;

CREATE TABLE task (
  id INT NOT NULL AUTO_INCREMENT,
  description varchar(500) DEFAULT NULL,
  PRIMARY KEY (id)
)