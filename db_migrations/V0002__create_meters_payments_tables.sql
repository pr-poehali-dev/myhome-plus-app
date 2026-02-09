CREATE TABLE meter_readings (
    id SERIAL PRIMARY KEY,
    apartment_id INTEGER,
    meter_type VARCHAR(50) NOT NULL,
    value NUMERIC(10,2) NOT NULL,
    reading_date TIMESTAMP,
    created_at TIMESTAMP
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    apartment_id INTEGER,
    amount NUMERIC(10,2) NOT NULL,
    payment_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'paid',
    description TEXT,
    created_at TIMESTAMP
);