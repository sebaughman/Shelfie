DROP TABLE IF EXISTS bins, shelves;



CREATE TABLE shelves (
id varchar(1) PRIMARY KEY
);


INSERT INTO shelves (id)
VALUES ('A'), ('B'), ('C'), ('D');


CREATE TABLE bins (
id SERIAL,
bin_id int,
name varchar,
price varchar,
shelf_id varchar, 
FOREIGN KEY (shelf_id) REFERENCES shelves(id)
);

