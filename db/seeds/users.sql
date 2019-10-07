CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(50),
    password text,
    favorite_id integer,
    ignore_id integer
)