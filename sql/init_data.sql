CREATE DATABASE IF NOT EXISTS company_db;
USE company_db;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    join_date DATE,
    release_date DATE NULL,
    years_experience DECIMAL(4,1),
    salary DECIMAL(10,2)
);

INSERT INTO employees (
    name,
    position,
    join_date,
    release_date,
    years_experience,
    salary
) VALUES
('Peter', 'Engineer', '2020-01-10', NULL, 5.0, 70),
('John', 'Engineer', '2021-03-15', NULL, 3.0, 65),
('Sarah', 'Manager', '2019-06-20', NULL, 6.5, 90),
('Michael', 'Engineer', '2022-02-01', NULL, 2.0, 60),
('Linda', 'HR', '2021-07-10', NULL, 4.0, 55);