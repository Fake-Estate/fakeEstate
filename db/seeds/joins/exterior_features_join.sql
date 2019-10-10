CREATE TABLE exterior_features_join (
    listing_id integer references listing(id),
    exterior_features_id integer references exterior_features(id)
)