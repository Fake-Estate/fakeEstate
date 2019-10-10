CREATE TABLE listing (
    id SERIAL PRIMARY KEY,
    mls INTEGER,
    address VARCHAR(250),
    city VARCHAR(250),
    state VARCHAR(2),
    acreage DECIMAL,
    square_footage INTEGER,
    bedrooms INTEGER,
    bathrooms INTEGER,
    price INTEGER,
    realtor_id INTEGER REFERENCES realtor(id),
    description TEXT
)