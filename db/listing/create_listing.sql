INSERT INTO listing 
(mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, realtor_id, description)
VALUES (${mls}, ${address}, ${city}, ${state}, ${acreage}, ${square_footage}, ${bedrooms}, ${bathrooms}, ${price}, ${id}, ${description})
RETURNING id, mls, address, city, state, acreage, square_footage, bedrooms, bathrooms, price, realtor_id, description