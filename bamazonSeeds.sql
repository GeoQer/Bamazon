DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NULL,
product_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);


INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("jewlery", "Ring, Diamond", 9999.99, 3);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("jewlery", "Ring, Gold", 99.99, 15);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("pets", "Collar, Blue", 9.99, 35);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("pets", "Collar, Black", 9.99, 1);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("pets", "Leash, Black", 15.99, 0);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("pets", "Treats, Training", 19.99, 100);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("office-supplies", "Paper Clips, 100 count", 2.29, 53);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("office-supplies", "Pen", 2.99, 6);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("sports", "Bicycle Innertube, 29x1.8-2.1", 4.49, 2);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("sports", "Basketball", 34.99, 10);

SELECT * FROM products;