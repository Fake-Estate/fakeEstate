INSERT INTO photos
(listing_id, photo)
VALUES
(${id}, ${photo})
RETURNING photo