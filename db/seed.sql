create table products (
id serial primary key,
name varchar(25),
price int,
img text
);

insert into products (name, price, img)
values 
('cake', '10', 'https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg'),
('cookies', '5', 'https://images-gmi-pmc.edge-generalmills.com/e8198dd2-770b-4c7c-a748-ca7538cf48d0.jpg'),
('brownies', '7', 'https://www.handletheheat.com/wp-content/uploads/2019/09/Dark-Chocolate-Brownies-SQUARE.jpg')