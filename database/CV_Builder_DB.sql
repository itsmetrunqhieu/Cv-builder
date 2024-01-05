-- create CV_builder database
CREATE DATABASE CV_builder;

-- User table
CREATE TABLE Users (
    uid varchar(50) NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(72) NOT NULL,
    role varchar(50) NOT NULL,
    location varchar(50),
    gender varchar(100),
);
-- CV table
CREATE TABLE CVs (
    uid varchar(50) NOT NULL PRIMARY KEY,
    html_dir nvarchar(255) NOT NULL,
    pdf_dir nvarchar(255) NOT NULL,
 
);
-- CV_tmplts table
CREATE TABLE CV_tmplts (
    uid varchar(50) NOT NULL PRIMARY KEY,
	html_dir nvarchar(255) NOT NULL,
	preview_dir nvarchar(255),
);
select * from CV_builder.dbo.Users
select * from CVs
select * from CV_builder.dbo.CV_tmplts

DROP TABLE CV_builder.dbo.CVs
DROP TABLE CV_builder.dbo.Users
DROP TABLE CV_builder.dbo.CV_tmplts

ALTER TABLE CVs
DROP COLUMN CVTmpltId;