CREATE TABLE rooms_included_join (
    listing_id integer references listing(id),
    rooms_included_id integer references rooms_included(id)
)