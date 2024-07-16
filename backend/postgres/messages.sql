CREATE TABLE messages (
   id SERIAL PRIMARY KEY,
   nickname VARCHAR(255),
   message TEXT,
   dateAndTime VARCHAR(255)
 );