SELECT
    *
FROM
    `orders`
INSERT INTO
    `orders` (
        `id`,
        `client_name`,
        `rut`,
        `address`,
        `phone_number`,
        `product_name`,
        `price`,
        `product_description`,
        `created_date`,
        `updated_date`
    )
VALUES
    (
        NULL,
        'Belén Vargas',
        '20250498-1',
        'Av. Siempre viva 159, Springfield, EEUU',
        '987564534',
        'Carrito completero',
        '8000000',
        'Carrito en el que se pueden preparar completitos',
        current_timestamp(),
        current_timestamp()
    );

INSERT INTO
    `orders` (
        `id`,
        `client_name`,
        `rut`,
        `address`,
        `phone_number`,
        `product_name`,
        `price`,
        `product_description`,
        `created_date`,
        `updated_date`
    )
VALUES
    (
        NULL,
        'Poopy Maria',
        '23456778-1',
        'Av. Siempre viva 159, Springfield, EEUU',
        '987564534',
        'Carrito completero',
        '8000000',
        'Carrito en el que se pueden preparar completitos',
        current_timestamp(),
        current_timestamp()
    );

ALTER TABLE orders ADD status VARCHAR(60);

CREATE TABLE
    orders (
        id int NOT NULL AUTO_INCREMENT,
        client_name varchar(255),
        rut varchar(255),
        address varchar(255),
        phone_number VARCHAR(50),
        product_name VARCHAR(255),
        price INT,
        product_description VARCHAR(255),
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
        status VARCHAR(50),
        CONSTRAINT PK_id PRIMARY KEY (id)
    );

    Select * FROM orders where (updated_date BETWEEN '2024-10-02 00:00:00' AND  '2024-10-02 23:59:59');

    ALTER TABLE orders CHANGE adress address VARCHAR(255);

    javascript: (() => {document.getElementById("inputName").value  = "derp"; document.getElementById("inputRut").value  = "12.234.567-k"; document.getElementById("inputAddress").value  = "derp street"; document.getElementById("inputPhoneNumber").value  = "1235679869"; document.getElementById("inputProductName").value  = "derpins"; document.getElementById("inputValue").value  = "9898989"; document.getElementById("inputProductDescription").value  = "derp";})();
