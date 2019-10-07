CREATE TABLE realtor (
    realtor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(50),
    hash text,
    license text,
    listing_id integer
)