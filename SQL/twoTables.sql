SELECT *
FROM   movie
       JOIN director
         ON movie.director_id = director.id
WHERE  movie.production_year > 2000; 

SELECT * FROM movie
JOIN director 
ON movie.director_id = director.id
WHERE director.name LIKE '%Steven Spielberg%';

SELECT title,
       production_year,
       NAME,
       birth_year AS born_in
FROM   movie
       JOIN director
         ON movie.director_id = director.id
WHERE  ( movie.production_year - director.birth_year ) < 40; 

SELECT movie.id,
       title,
       production_year AS produced_in,
       NAME,
       birth_year      AS born_in
FROM   movie
       JOIN director
         ON movie.director_id = director.id
WHERE  ( title LIKE '%a%'
         AND production_year > 2000 )
        OR birth_year BETWEEN 1945 AND 1995;