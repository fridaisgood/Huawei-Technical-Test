USE company_db;

-- 1. Insert Albert
INSERT INTO employees (
    name,
    position,
    join_date,
    years_experience,
    salary
) VALUES (
    'Albert',
    'Engineer',
    '2024-01-24',
    2.5,
    50
);

-- 2. Update semua engineer salary menjadi 85
UPDATE employees
SET salary = 85
WHERE position = 'Engineer';

-- 3. Total salary expenditure tahun 2021
SELECT SUM(salary) AS total_salary_2021
FROM employees
WHERE YEAR(join_date) <= 2021
AND (release_date IS NULL OR YEAR(release_date) >= 2021);

-- 4. Top 3 employee experience terbanyak
SELECT *
FROM employees
ORDER BY years_experience DESC
LIMIT 3;

-- 5. Subquery engineer <= 3 years
SELECT *
FROM employees
WHERE position = 'Engineer'
AND years_experience <= (
    SELECT 3
);