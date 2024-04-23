USE node_mysql;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
);

/*DROP TABLE users*/

-- Create a trigger to adjust the auto-increment value
DELIMITER //
CREATE TRIGGER adjust_auto_increment
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    DECLARE max_id INT;

    IF NEW.id IS NULL THEN
        -- Get the maximum id value from the table
        SELECT MAX(id) INTO max_id FROM users;

        -- Increment the auto-increment value only if the insertion is successful
        IF max_id IS NULL THEN
            SET NEW.id = 1;
        ELSE
            SET NEW.id = max_id + 1;
        END IF;
    END IF;
END;
//
DELIMITER ;
