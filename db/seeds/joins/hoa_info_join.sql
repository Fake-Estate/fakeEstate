CREATE TABLE hoa_info_join (
    listing_id integer references listing(id),
    hoa_info_id integer references hoa_info(id)
)