CREATE TABLE style_join (
    listing_id integer references listing(id),
    style_id integer references style(id)
)