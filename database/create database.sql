select * from dbo.Users

create table Users
(
    id nvarchar(50) primary key not null,
    Name nvarchar(50) not null,
    Email nvarchar(50) not null,
    Password nvarchar(50) not null,
    role nvarchar(50) not null
)