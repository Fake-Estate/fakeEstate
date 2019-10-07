INSERT INTO users
(first_name, last_name, email, password)
VALUES
(${first_name}, ${last_name}, ${email}, ${hash})
returning user_id, first_name, last_name