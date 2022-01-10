SELECT *
FROM   car
WHERE  ( production_year BETWEEN 1999 AND 2005 )
       AND ( brand <> 'Volkswagen' )
       AND ( model LIKE 'P%'OR model LIKE 'F%' )
       AND price IS NOT NULL;