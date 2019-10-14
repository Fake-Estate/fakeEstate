SELECT *
FROM listing
WHERE city = $1 OR zipcode = $1 OR mls = $1