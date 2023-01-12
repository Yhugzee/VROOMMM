CREATE TABLE user
(
    id           int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname    varchar(255) NOT NULL,
    lastname     varchar(255) NOT NULL,
    email        varchar(255) NOT NULL,
    hashedPassword     varchar(255) NOT NULL,
    phone_number varchar(10)          NOT NULL,
    role         VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (id, firstname, lastname, email, hashedPassword, phone_number, role)
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

INSERT INTO car (id, brand, model, mileage, year, city, price, bail, available, category, seats_quantity)
VALUES (1, 'Renault', 'Clio 5', '4082', '2022', 'Reims', '250', '500', true, "citadine", 4),
       (2, 'Opel', 'Corsa', '42499', '2020', 'Paris', '380', '450', true, "citadine", 4),
       (3, 'Peugeot', '308', '30000', '2015', 'Paris', '500', '900', true, "berline", 5),
       (4, 'Citroën', 'C4', '15000', '2020', 'Reims', '450', '800', true, "berline", 5 ),
       (5, 'Mercedes', 'GLC', '90000', '2018', 'Reims', '800', '1500', true, "SUV", 5),
       (6, 'Dacia', 'Duster', '50000', '2019', 'Paris', '900', '1500', true, 'SUV', 5),
       (7, 'Citroën', 'Berlingo', '15000', '2020', 'Reims', '450', '800', true, "monospace", 7),
       (8, 'Toyota', 'Highlander', '15000', '2020', 'Reims', '450', '800', true, "monospace", 9),
       (9, 'Renault', 'Express Van', '15000', '2020', 'Reims', '450', '800', true, "utilitaire", 3),
       (10, 'Ford', 'Transit Custom', '15000', '2020', 'Reims', '450', '800', true, "utilitaire", 3);

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