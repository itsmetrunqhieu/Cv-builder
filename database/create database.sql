select * from CV_tmplts
 SET IDENTITY_INSERT CV_tmplts ON;
 drop table SequelizeMeta
 CREATE TABLE Users (
    uid varchar(50) NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(72) NOT NULL,
    role varchar(50) NOT NULL,
    location varchar(50),
    gender varchar(100),
);
CREATE TABLE CVs (
    uid varchar(50) NOT NULL PRIMARY KEY,
    html_dir nvarchar(255) NOT NULL,
    pdf_dir nvarchar(255) NOT NULL,
 
);
CREATE TABLE CV_tmplts (
    uid varchar(50) NOT NULL PRIMARY KEY,
	html_dir nvarchar(255) NOT NULL,
	preview_dir nvarchar(255),
);
ALTER TABLE CV_tmplts
rename column uid to id
