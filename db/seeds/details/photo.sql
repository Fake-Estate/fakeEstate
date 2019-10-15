CREATE TABLE photos (
id SERIAL PRIMARY KEY,
listing_id integer REFERENCES listing(id),
photo varchar
)