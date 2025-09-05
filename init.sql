USE RealEstateDB;

CREATE TABLE IF NOT EXISTS Properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price BIGINT NOT NULL,
    yield DECIMAL(5,2) NOT NULL,
    sold INT NOT NULL,
    ticket BIGINT NOT NULL,
    daysLeft INT NOT NULL,
    photo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    jwt_token TEXT NULL
);

-- Insert initial data
INSERT IGNORE INTO Properties (name, price, yield, sold, ticket, daysLeft, photo) VALUES
('The Marina Torch', 6500000, 9.25, 75, 60000, 150, '/cards/marina.png'),
('HHHR Tower', 6500000, 9.25, 75, 60000, 150, '/cards/tower.png'),
('Ocean peaks', 6500000, 9.25, 75, 60000, 150, '/cards/ocean.png'),
('Al Yaqoub Tower', 6500000, 9.25, 75, 60000, 150, '/cards/yaqoub.png');