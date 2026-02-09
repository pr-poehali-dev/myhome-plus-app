CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    number VARCHAR(10) NOT NULL,
    entrance INTEGER NOT NULL,
    floor INTEGER NOT NULL,
    area NUMERIC(6,2) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255),
    owner_phone VARCHAR(20)
);