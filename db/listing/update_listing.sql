UPDATE listing
set
    mls = ${mls},
    address = ${address},
    city = ${city},
    state = ${state},
    acreage = ${acreage},
    square_footage = ${square_footage},
    bedrooms = ${bedrooms},
    bathrooms = ${bathrooms},
    price = ${price},
    description = ${description}
WHERE id = ${id}
RETURNING *