/*
DELIMITER //
CREATE OR REPLACE TRIGGER maxPhotosUP
    BEFORE UPDATE ON photos
    FOR EACH ROW
BEGIN
 DECLARE n INT;
 SET n = (SELECT COUNT(*) FROM photos WHERE NEW.userId = userId);
 IF (n>=2) THEN
     SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un usuario no puede tener mas de 50 fotos';
 END IF;
END //
DELIMITER ;
*/
DELIMITER //
CREATE OR REPLACE TRIGGER maxPhotosIN
    BEFORE INSERT ON photos
    FOR EACH ROW
    BEGIN
        DECLARE n INT;
        SET n = (SELECT COUNT(*) FROM photos
            WHERE new.userId = userId);
        IF (n >= 50) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
                'Un alumno no puede subir más de 50 fotos';
        END IF;
END //
DELIMITER ;
/*
DELIMITER //
CREATE OR REPLACE TRIGGER maxPhotos
	BEFORE UPDATE ON photos
	FOR EACH ROW
BEGIN
 DECLARE n INT;
 SET n = (SELECT COUNT(*) FROM photos WHERE userId = NEW.userId);
 IF (n>=2) THEN
 	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un usuario no puede tener mas de 50 fotos';
 END IF;
END
DELIMITER ;
*/
DELIMITER //
CREATE OR REPLACE TRIGGER EliminarConCommentarios
    BEFORE DELETE ON photos
    FOR EACH ROW
    BEGIN 
        DECLARE asd INT;
        SET asd = (SELECT COUNT(*) FROM commentarys WHERE
        commentarys.photoId = old.photoId);
        IF(asd >= 1) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
            'No se puede eliminar una foto si ya tiene comentarios';
        END IF;
    END//
DELIMITER ;

DELIMITER // 
CREATE OR REPLACE TRIGGER CambiarPrivacidad
    BEFORE UPDATE ON photos
    FOR EACH ROW
    BEGIN
        DECLARE updcoment INT;
        SET updcoment = (SELECT COUNT(*) FROM commentarys WHERE
        commentarys.photoId = old.photoId); 
        IF(updcoment >= 1 AND new.visibility='private') THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
            'No se puede marcar una foto como privada si ya tiene comentarios';
        END IF;
    END//
DELIMITER ;

DELIMITER // 
CREATE OR REPLACE TRIGGER noWord
	BEFORE INSERT ON photos
	FOR EACH ROW
	BEGIN
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE banword ROW TYPE of banwords;
	DECLARE curbanword CURSOR FOR SELECT * FROM banwords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN curbanword;
	readloop:LOOP
		FETCH curbanword INTO banword;
		IF done then
			leave readloop;
		END IF;
		IF (NEW.description LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en la descripcion';
		END IF;
		IF (NEW.title LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en el titulo';
		END IF;
	END loop;
CLOSE curbanword;
END//
DELIMITER ;


DELIMITER // 
CREATE OR REPLACE TRIGGER noWordUp
	BEFORE UPDATE ON photos
	FOR EACH ROW
	BEGIN
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE banword ROW TYPE of banwords;
	DECLARE curbanword CURSOR FOR SELECT * FROM banwords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN curbanword;
	readloop:LOOP
		FETCH curbanword INTO banword;
		IF done then
			leave readloop;
		END IF;
		IF (NEW.description LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en la descripcion';
		END IF;
		IF (NEW.title LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en el titulo';
		END IF;
	END loop;
CLOSE curbanword;
END//
DELIMITER ;

DELIMITER // 
CREATE OR REPLACE TRIGGER noWordComment
	BEFORE INSERT ON commentarys
	FOR EACH ROW
	BEGIN
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE banword ROW TYPE of banwords;
	DECLARE curbanword CURSOR FOR SELECT * FROM banwords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN curbanword;
	readloop:LOOP
		FETCH curbanword INTO banword;
		IF done then
			leave readloop;
		END IF;
		IF (NEW.text LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en el comentario';
		END IF;
	END loop;
CLOSE curbanword;
END//
DELIMITER ;


DELIMITER // 
CREATE OR REPLACE TRIGGER noWordComment2
	BEFORE UPDATE ON commentarys
	FOR EACH ROW
	BEGIN
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE banword ROW TYPE of banwords;
	DECLARE curbanword CURSOR FOR SELECT * FROM banwords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN curbanword;
	readloop:LOOP
		FETCH curbanword INTO banword;
		IF done then
			leave readloop;
		END IF;
		IF (NEW.text LIKE CONCAT('%',banword.word,'%')) then
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'No se puede incluir palabra inapropiada en el comentario';
		END IF;
	END loop;
CLOSE curbanword;
END//
DELIMITER ;