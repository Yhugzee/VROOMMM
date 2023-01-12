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
VALUES (1, 'Hugo', 'Rodriguez', 'rodriguez.h@pm.me', 'bypass', '0605040302', 'Admin'),
       (2, 'Jules', 'Riquier', 'JulesRiquier@armyspy.com', 'bypass2', '0122110954', 'User');

CREATE TABLE car
(
    id             int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    brand          varchar(255)                NOT NULL,
    model          varchar(255)                NOT NULL,
    mileage        INT                         NOT NULL,
    year           INT                         NOT NULL,
    city           varchar(255)                NOT NULL,
    price          INT(10) NOT NULL,
    bail           INT(10) NOT NULL,
    available      BOOLEAN      DEFAULT TRUE   NOT NULL,
    category       varchar(255) DEFAULT 'test' NOT NULL,
    seats_quantity INT          DEFAULT '1'    NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO car (id, brand, model, mileage, year, city, price, bail)
VALUES (1, 'Renault', 'Clio 5', '4082', '2022', 'Reims', '250', '500'),
       (2, 'Opel', 'Corsa', '42499', '2020', 'Paris', '380', '450');

CREATE TABLE rent
(
    id             int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    location_start DATE,
    location_end   DATE,
    user_id        int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_user_car FOREIGN KEY (user_id) references user (id),
    car_id         int(11) UNSIGNED NOT NULL,
    CONSTRAINT fk_car_id FOREIGN KEY (car_id) references car (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;