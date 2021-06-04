DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS commentarys;
DROP TABLE IF EXISTS valorations;
DROP TABLE IF EXISTS categorys;
DROP TABLE IF EXISTS followers;


CREATE TABLE Users (
	userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(128) NOT NULL,
	lastName VARCHAR(128) NOT NULL,
	telephone VARCHAR(32) NOT NULL,
	email VARCHAR(128) NOT NULL,
	username VARCHAR(64) UNIQUE NOT NULL,
	password VARCHAR(256) NOT NULL,
	avatarUrl VARCHAR(512),
	UNIQUE(email)
);

CREATE TABLE Photos (
	photoId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) NOT NULL,
	description VARCHAR(512) NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
	url VARCHAR(512) NOT NULL,
	visibility VARCHAR(16) NOT NULL,
	userId INT NOT NULL,
	
	FOREIGN KEY (userId) REFERENCES Users (userId),
	CONSTRAINT ValidVisibility CHECK (visibility in ('Public', 'Private'))
);

CREATE TABLE commentarys (
	commentaryId INT(11) NOT NULL AUTO_INCREMENT,
	text VARCHAR(128) NOT NULL COLLATE latin1_swedish_ci,
	userId INT(11) NOT NULL,
	photoId INT(11) NOT NULL,
	date DATETIME NULL DEFAULT current_timestamp(),
	PRIMARY KEY (commentaryId) USING BTREE,
	INDEX userId (userId) USING BTREE,
	INDEX photoId (photoId) USING BTREE,
	CONSTRAINT constaint FOREIGN KEY (userId) REFERENCES gallery.users (userId) ON UPDATE RESTRICT ON DELETE RESTRICT,
	CONSTRAINT constaint2 FOREIGN KEY (photoId) REFERENCES gallery.photos (photoId) ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE valorations (
	valorationId INT(11) NOT NULL AUTO_INCREMENT,
	number INT(1) NOT NULL,
	userId INT(11) NOT NULL,
	photoId INT(11) NOT NULL,
	date DATETIME NULL DEFAULT current_timestamp(),
	PRIMARY KEY (valorationId) USING BTREE,
	INDEX userId (userId) USING BTREE,
	INDEX photoId (photoId) USING BTREE,
	UNIQUE (photoId, userId),
	CONSTRAINT valoration CHECK (number IN (1,2,3,4,5)),
	CONSTRAINT constaint1 FOREIGN KEY (userId) REFERENCES gallery.users (userId) ON UPDATE RESTRICT ON DELETE RESTRICT,
	CONSTRAINT constaint21 FOREIGN KEY (photoId) REFERENCES gallery.photos (photoId) ON UPDATE RESTRICT ON DELETE RESTRICT
);

CREATE TABLE categorys (
	categoryId INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL,
	UNIQUE (name),
	PRIMARY KEY (categoryId) USING BTREE
);

CREATE TABLE followers (
	followerId INT(11) NOT NULL AUTO_INCREMENT,
	seguidoId INT(1) NOT NULL,
	siguiendoId INT(11) NOT NULL,
	UNIQUE(seguidoId, siguiendoId),
	PRIMARY KEY (followerId) USING BTREE		
);

CREATE TABLE banwords (
	banWordId INT(11) NOT NULL AUTO_INCREMENT,
	word VARCHAR(60) NOT NULL,
	PRIMARY KEY (banWordId) USING BTREE
);

CREATE or Replace TABLE categoryPhoto (
	categoryPhotoId INT(11) NOT NULL AUTO_INCREMENT,
	photoId INT(11) NOT NULL,
	categoryId INT(11) NOT NULL,
	UNIQUE(photoId, categoryId),
	PRIMARY KEY (categoryPhotoId) USING BTREE,
	CONSTRAINT constaint22 FOREIGN KEY (photoId) REFERENCES gallery.photos (photoId) ON UPDATE RESTRICT ON DELETE RESTRICT,
	CONSTRAINT constaint232 FOREIGN KEY (categoryId) REFERENCES gallery.categorys (categoryId) ON UPDATE RESTRICT ON DELETE RESTRICT
);