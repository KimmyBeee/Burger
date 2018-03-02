#Erase any previous databases with the same name
DROP DATABASE IF EXISTS burgers_db;

#Create a new db named burger_db and use that db moving forward
CREATE DATABASE burgers_db;
USE burgers_db;

#Create a table in the burgers db called burgers
CREATE TABLE burgers
(
	#Give the table the following columns: an automatically assigned id, burger name, whether the
	##burger has been eaten (all burgers start uneaten), and an automatically assigned date/time
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)	
);
