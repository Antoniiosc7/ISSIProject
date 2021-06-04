/*
	C.Arévalo
	users.js.  Validador de register.html
	Marzo/2021
*/
"use strict";
const valoracionesValidator = {
    validateValoration: function (formData) {
        let errors = []; // Inicializa array de errores
        // Captura de datos del formulario
        let number   = formData.get ("number");
        let bannedwords = ["pene", "puta", "gilipollas"];
        
        // Validaciones
        if (number === bannedwords[0]) {
            errors.push ("The first and last name should have more than 3 characters ");
        }
        return errors;
    }
};
export { valoracionesValidator };