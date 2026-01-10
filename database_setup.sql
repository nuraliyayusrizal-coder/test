-- Database Setup for Algorythm Beats
-- Created for Zulaikha's authentication and order management features

-- Create database
CREATE DATABASE IF NOT EXISTS algorythm_beats;
USE algorythm_beats;

-- Create user table for authentication
CREATE TABLE IF NOT EXISTS user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table for order management
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    phone_num VARCHAR(20) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

-- Insert sample user for testing (password: test123)
INSERT INTO user (username, email, password_hash) VALUES 
('testuser', 'test@example.com', 'cc03e747a6afbbcbf8be7668acfebee5');

SELECT 'Database setup completed successfully!' AS message;

ALTER TABLE orders
ADD  DECIMAL(10, 2) NOT NULL DEFAULT 0.00;