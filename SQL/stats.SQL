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

SELECT e.id,
       e.NAME,
       r.room_number,
       r.beds
FROM   equipment AS e
       INNER JOIN room AS r
               ON r.id = e.room_id; 


SELECT *
FROM   student AS s1
       JOIN student AS s2
         ON s1.room_id = s2.room_id
WHERE  s1.NAME = 'Jack Pearson'
       AND s1.id <> s2.id; 


SELECT
  st1.name,
  st2.name,
  room_number
FROM student st1
JOIN student st2
  ON st1.room_id = st2.room_id
JOIN room
  ON st1.room_id = room.id
WHERE st1.name < st2.name
  AND beds = 2;

SELECT * FROM CITY
WHERE AREA = 
(
SELECT AREA FROM CITY
  WHERE name = 'Paris'
);

SELECT name FROM City
WHERE Population <
(
SELECT Population FROM city
  WHERE name = 'Madrid'
);

SELECT * FROM TRIP
WHERE PRICE > (
SELECT AVG(PRICE) FROM TRIP
);

SELECT * FROM Hiking_Trip
WHERE DIFFICULTY IN (1,2,3);

//Find all information about all trips in cities whose area is greater than 100.
SELECT * FROM TRIP
WHERE city_id IN(
SELECT id FROM city
  WHERE area > 100
);

SELECT * FROM City
WHERE Population < ALL (
SELECT Population FROM Country
);

SELECT * FROM TRIP
WHERE price = ANY( 
  SELECT PRICE 
  FROM Hiking_TRIP
  );

  SELECT * FROM country c
WHERE population <= 
(
SELECT MIN(population) FROM city ct
  WHERE c.id = ct.country_id 
);

SELECT * From city c
WHERE rating > (
  SELECT AVG(rating) 
  FROM city new_c
  WHERE c.country_id = new_c.country_id
  );

SELECT * FROM Trip
WHERE city_id IN (
  SELECT id from city
  WHERE rating < 4
  );

SELECT * FROM Country c
WHERE EXISTS (
  SELECT * FROM Mountain m 
  WHERE c.id = m.country_id
  );

  SELECT * FROM Mountain m 
WHERE NOT EXISTS (
  SELECT * FROM hiking_trip h
  WHERE m.id = h.mountain_id
  );
  
  SELECT *
FROM hiking_trip h
WHERE length >= ALL (
  SELECT length
  FROM hiking_trip s_h
  WHERE h.mountain_id = s_h.mountain_id);

  SELECT * FROM trip t
WHERE days  < ANY
(
  SELECT days FROM hiking_trip s_h
  WHERE t.price = s_h.price
  );

  SELECT * FROM mountain m,
(SELECT * FROM country 
 WHERE population > 50000
 ) AS b_c
 WHERE m.country_id = b_c.id;

SELECT length, height FROM hiking_trip h,
(
SELECT * FROM Mountain
WHERE height > 3000
) as big_m
WHERE big_m.id = h.mountain_id;

SELECT name, 
(
SELECT count(*) FROM hiking_trip h
  WHERE h.mountain_id = m.id
) as count
FROM mountain m;