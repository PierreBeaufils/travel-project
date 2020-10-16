-- Deploy globeTrotter:base-structure to pg

BEGIN;

CREATE TABLE "travel" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "title" TEXT ,
    "owner" INT FOREIGN KEY,
    "destination" TEXT,
    "departure_date" TIMESTAMP,
    "return_date" TIMESTAMP,
    "price"  NUMERIC DEFAULT 0
);

CREATE TABLE "task" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "name" TEXT ,
    "description" TEXT,
    "deadline" TIMESTAMPTZ
);

CREATE TABLE "traveler" (
    "id" GENERATED ALWAYS AS IDENTITY,
    "first_name" TEXT,
    "last_name" TEXT,
    "role" TEXT,
    "gender" TEXT,
    "dob" DATE,
    "adress" TEXT,
    "zipcode" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "email_check" BOOLEAN,
    "password" TEXT,
    "passport_number" TEXT,
    "expiration_date" DATE,
    -- Foreign key constraint references travel
);

CREATE TABLE "activity" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "name" TEXT,
    "topic" TEXT,
    "place" TEXT,
    "duration" INTERVAL,
    "description" TEXT,
    "date" TIMESTAMPTZ,
    "unit_price" NUMERIC,
    "quantity" INT
);

CREATE TABLE "transport" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "type" TEXT,
    "company" TEXT,
    "from" TEXT,
    "to" TEXT,
    "departure_date" TIMESTAMP,
    "arrival_date" TIMESTAMP,
    -- CONSTRAINT arrival > departure date
    "reservation_ref" TEXT,
    "unit_price" NUMERIC,
    "quantity" INT,
    "memo" TEXT

);

CREATE TABLE "accomodation" (
    "id" INT GENERATED ALWAYS AS IDENTITY,
    "adress" TEXT,
    "city" TEXT,
    "coordinate" POINT,
    "information" TEXT,
    "availability" INT NOT NULL,
    "arrival_date" TIMESTAMP,
    "departure_date" TIMESTAMP,
    "unit_price" NUMERIC,
    "quantity" INT
    -- Chager latitude et longitude en coordinate et datatype point ?
    -- Voir structure des données géo renvoyé par l'API en front !
);


COMMIT;
