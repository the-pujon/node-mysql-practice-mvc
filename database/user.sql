CREATE DATABASE IF NOT EXISTS node_mysql;

USE node_mysql;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
);

ALTER TABLE users AUTO_INCREMENT = 1;

-- Insert some initial data into the users table
INSERT INTO users (name, email) VALUES ('pujon', 'pujonddd1d@gmails.com');

-- Check the contents of the users table
SELECT * FROM users;
