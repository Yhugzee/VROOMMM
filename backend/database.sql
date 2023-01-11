CREATE TABLE user
(
    id           int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname    varchar(255) NOT NULL,
    lastname     varchar(255) NOT NULL,
    email        varchar(255) NOT NULL,
    password     TEXT         NOT NULL,
    phone_number INT          NOT NULL,
    role         VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (id, firstname, lastname, email, password, phone_number, role)
VALUES (1, 'Hugo', 'Rodriguez', 'rodriguez.h@pm.me', 'bypass', '0605040302', 'Admin');