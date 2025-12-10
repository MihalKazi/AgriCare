-- 1. Create the Sensor Data Table (For IoT Dashboard)
CREATE TABLE IF NOT EXISTS sensor_data (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    temperature FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    soil_moisture INT NOT NULL,
    reading_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create the Crop Budgets Table (For Calculator)
CREATE TABLE IF NOT EXISTS crop_budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    budget_name VARCHAR(100),
    acreage FLOAT,
    seed_cost FLOAT,
    fertilizer_cost FLOAT,
    pesticide_cost FLOAT,
    labor_cost FLOAT,
    other_cost FLOAT,
    expected_yield FLOAT,
    price_per_bushel FLOAT,
    total_cost FLOAT,
    total_revenue FLOAT,
    total_profit FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create the Market Listings Table (For Marketplace)
CREATE TABLE IF NOT EXISTS market_listings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_name VARCHAR(100),
    crop_name VARCHAR(100),
    quantity VARCHAR(50),
    price VARCHAR(50),
    contact VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Insert some Dummy Data for Market (Optional, so it's not empty)
INSERT INTO market_listings (farmer_name, crop_name, quantity, price, contact) VALUES
('Rahim Uddin', 'Rice (Basmati)', '500 kg', '1200', '01711223344'),
('Karim Mia', 'Potato', '1 Ton', '180', '01999887766'),
('Anita Roy', 'Wheat', '200 kg', '320', '01888776655');