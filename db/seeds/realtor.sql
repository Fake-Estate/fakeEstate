CREATE TABLE realtor (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(50),
    password text,
    license text,
    is_admin boolean default false
)