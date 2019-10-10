CREATE TABLE zoning_join (
    listing_id integer references listing(id),
    zoning_id integer references zoning(id)
)