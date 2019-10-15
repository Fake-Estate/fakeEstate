UPDATE listing
set
    mls = ${mls},
    address = ${address},
    city = ${city},
    state = ${state},
    zip = ${zip},
    latitude = ${latitude},
    longitude = ${longitude},
    acreage = ${acreage},
    square_footage = ${square_footage},
    bedrooms = ${bedrooms},
    bathrooms = ${bathrooms},
    price = ${price},
    description = ${description},
    style_description = ${style_description}, 
    type_description = ${type_description}, 
    int_description = ${int_description}, 
    ext_description = ${ext_description}, 
    other_description = ${other_description}, 
    inclusions_description = ${inclusions_description}, 
    hoa_description = ${hoa_description}, 
    rooms_description = ${rooms_description}
WHERE id = ${id}
RETURNING *