CREATE TABLE other_features_join (
    listing_id integer references listing(id),
    other_features_id integer references other_features(id)
)