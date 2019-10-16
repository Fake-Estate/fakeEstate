INSERT INTO listing 
(mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, img, realtor_id)

VALUES (${mls}, ${address}, ${city}, ${state}, ${zip}, ${latitude}, ${longitude}, ${acreage}, ${square_footage}, ${bedrooms}, ${bathrooms}, ${price}, ${description},  ${style_description}, ${type_description}, ${int_description}, ${ext_description}, ${other_description}, ${inclusions_description}, ${hoa_description}, ${rooms_description}, ${img}, ${realtor_id})
RETURNING *
