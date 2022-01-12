SELECT * FROM employees
WHERE year = 2011 
ORDER BY Salary;

SELECT * FROM Employees 
ORDER BY last_name DESC;

SELECT *
FROM   employees
ORDER  BY department ASC,
          salary DESC; 

SELECT DISTINCT year
FROM   employees; 

SELECT DISTINCT department,
                position
FROM   employees; 

## counts all rows
SELECT COUNT(*) FROM employees;

## counts rows for position only
SELECT COUNT(position) AS non_null_no 
FROM employees;

SELECT Count(DISTINCT position) AS distinct_positions
FROM   employees; 

SELECT MAX(salary) from employees;

SELECT Avg(salary)
FROM   employees
WHERE  year = 2013; 

SELECT SUM(salary) FROM employees
WHERE department = 'Marketing' AND year = 2014;

SELECT Department, COUNT(*) AS employees_no FROM EMPLOYEES
WHERE YEAR = 2013
GROUP BY Department;

SELECT department, MAX(salary), MIN(salary) FROM employees
WHERE year = 2014
GROUP BY department;

SELECT department, AVG(salary) FROM employees
WHERE year = 2015
GROUP BY department;

SELECT last_name, first_name, AVG(salary) FROM Employees
GROUP BY first_name, last_name;

SELECT last_name, first_name, COUNT(DISTINCT year) AS years FROM employees
GROUP BY first_name, last_name
HAVING COUNT(DISTINCT year) > 2;

SELECT department, AVG(salary) FROM employees
WHERE year = 2012 
GROUP BY department
HAVING AVG(salary) > 3000;

SELECT last_name, first_name, SUM(salary) FROM employees
GROUP BY first_name, last_name
ORDER BY SUM(salary) DESC;

SELECT last_name,
       first_name,
       Avg(salary)          AS average_salary,
       Count(DISTINCT year) AS years_worked
FROM   employees
GROUP  BY first_name,
          last_name
HAVING Count(DISTINCT year) > 2
ORDER  BY Avg(salary) DESC; 