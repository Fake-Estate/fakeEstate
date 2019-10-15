update listing
set document = to_tsvector(city || ' ' || zip || ' ' || mls);

select *
from listing
where document @@ plainto_tsquery(${results})