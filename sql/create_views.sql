CREATE OR REPLACE VIEW userswithphotos AS
SELECT U.userId, U.username, U.avatarUrl, P.title, P.url, P.visibility, P.description, P.date, P.photoId
    FROM users U NATURAL JOIN photos P;

CREATE OR REPLACE VIEW photoPrivacitys AS
    SELECT U.userId, U.username, U.avatarUrl, P.title, P.url, P.visibility, P.description, P.date, P.photoId
    FROM users U NATURAL JOIN photos P
	 WHERE P.visibility = 'Public';

CREATE OR REPLACE VIEW commentaryView AS
    SELECT C.*, U.username
    FROM commentarys C NATURAL JOIN users U;

CREATE OR REPLACE VIEW ownIndex AS
    SELECT f.*, p.*
    FROM followers f NATURAL JOIN photos p
    WHERE F.siguiendoId = p.userId;

CREATE OR REPLACE VIEW averagevalorations AS                  
    SELECT AVG(NUMBER) media, P.PhotoId, P.title
    FROM photos P JOIN VALORATIONs V
	 ON (P.photoId = V.photoId)
	 GROUP BY P.photoId
	 ORDER BY REVERSE(AVG(NUMBER));

CREATE OR REPLACE VIEW mostFollows AS
SELECT Distinct(F.siguiendoId), (SELECT COUNT(*) FROM followers WHERE F.siguiendoId = siguiendoId) NumSeguidores, S.username
    FROM followers F NATURAL JOIN users S
	 WHERE S.userId = F.siguiendoId
		ORDER BY NumSeguidores DESC LIMIT 5;

CREATE OR REPLACE VIEW mostValorations AS
SELECT (AVG(NUMBER)) media, P.PhotoId, P.title
    FROM photos P JOIN VALORATIONs V
	 ON (P.photoId = V.photoId)
	 GROUP BY P.photoId
	 ORDER BY media DESC LIMIT 5;

CREATE OR REPLACE VIEW mostValorationsFecha AS
SELECT (AVG(NUMBER)) media, P.PhotoId, P.title
    FROM photos P JOIN VALORATIONs V
	 ON (P.photoId = V.photoId)
	 WHERE P.date <= NOW() AND P.date >= date_add(NOW(), INTERVAL -7 DAY) AND visibility="Public"
	 GROUP BY P.photoId
	 ORDER BY media DESC LIMIT 5;

CREATE OR REPLACE VIEW mostcommentarysfecha AS                  
    SELECT Distinct(P.photoId), (SELECT COUNT(*) FROM commentarys WHERE P.photoId = photoId) Total,  P.title
    FROM photos P JOIN commentarys C
	 ON (P.photoId = C.photoId)
	 WHERE P.date <= NOW() AND P.date >= date_add(NOW(), INTERVAL -7 DAY)
	 ORDER BY Total DESC LIMIT 5;

CREATE OR REPLACE VIEW viewPhotoCategory AS
    SELECT C.categoryId, C.photoId, CA.name, P.title, P.description, P.url, P.visibility, P.userId, U.username
    FROM categoryphoto C, categorys CA, photos P, users U
	 WHERE P.visibility = 'Public' AND C.categoryId = CA.categoryId AND C.photoId = P.photoId AND U.userId = P.userId;

CREATE OR REPLACE VIEW mostcategory AS
SELECT Distinct(C.categoryId), (SELECT COUNT(*) FROM categoryphoto WHERE CA.categoryId = categoryId) NumFotos, CA.name
    FROM categoryphoto C NATURAL JOIN categorys CA
	 WHERE C.categoryId = Ca.categoryId
		ORDER BY NumFotos DESC LIMIT 5;
