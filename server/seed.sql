CREATE TABLE customers(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    street_address VARCHAR,
    city VARCHAR,
    state VARCHAR(2),
    zip INT
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR, 
    image_url TEXT
);

CREATE TABLE order_products(
    order_product_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id)
);


INSERT INTO customers
(first_name, last_name, street_address, city, state, zip)
VALUES
('Howard', 'Lowes', '123 S Main St', 'Lehi', 'UT', 84043),
('Home', 'Depot', '555 Center', 'Orem', 'UT', 84057),
('Kyle', 'Baugh', '987 South 15 West', 'Spanish Fork', 'UT', 84660);


INSERT INTO products
(name, description, image_url)
VALUES
('Breccia Paradiso', 'A color combination of broken rock that makes you feel lik you are in paradise', 'https://sentrelproducts.com/wp-content/uploads/2021/03/colors_breccia-paradiso_2019.jpg'),
('Calabria', 'A beautiful, beige-esque conglomerate of stone', 'https://sentrelproducts.com/wp-content/uploads/2021/03/colors_calabria.jpg')
('Calcatta White', 'Description goes here', 'https://sentrelproducts.com/wp-content/uploads/2021/03/colors_calacatta-white.jpg');


INSERT INTO orders
(customer_id)
VALUES
(2),
(3),
(3);

INSERT INTO order_products
(order_id, product_id)
VALUES
(2, 3),
(2, 1),
(2, 1);


SELECT * FROM order_products
JOIN products ON order_products.order_product_id = products.product_id
WHERE order_id = 2;

SELECT * FROM order_products
JOIN products 
ON products.product_id = order_products.product_id
WHERE order_id = 8;