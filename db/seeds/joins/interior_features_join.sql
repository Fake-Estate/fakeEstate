CREATE TABLE interior_features_join (
    listing_id integer references listing(id),
    interior_features_id integer references interior_features(id)
)