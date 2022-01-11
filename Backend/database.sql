CREATE DATABASE products;

CREATE TABLE product(
product_id SERIAL PRIMARY KEY,
name  VARCHAR(100),
description VARCHAR(200),
image_link  VARCHAR(230),
image_name VARCHAR(230)
);