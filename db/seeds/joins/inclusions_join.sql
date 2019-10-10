CREATE TABLE inclusions_join (
    listing_id integer references listing(id),
    inclusions_id integer references inclusions(id)
)