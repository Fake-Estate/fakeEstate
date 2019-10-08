INSERT INTO realtor
(first_name, last_name, email, password, license, is_admin)
VALUES
(${first_name}, ${last_name}, ${email}, ${hash}, ${license}, ${is_admin})
RETURNING realtor_id, first_name, last_name, email, license, is_admin