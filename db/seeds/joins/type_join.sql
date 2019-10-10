CREATE TABLE type_join (
    listing_id integer references listing(id),
    type_id integer references type(id)
)