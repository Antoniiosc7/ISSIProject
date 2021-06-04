/*
	C.Arévalo
	users.js.  Validador de register.html
	Marzo/2021
*/
"use strict";
const userValidator = {
    validateRegister: function (formData) {
        let errors = []; // Inicializa array de errores
        // Captura de datos del formulario
        let firstName   = formData.get ("firstName");
        let lastName    = formData.get ("lastName");
        let password    = formData.get ("password");
        let password2   = formData.get ("password2");
        let bannedwords = ["pene", "puta", "gilipollas"];
    

        // Validaciones
        if ( firstName.length<3 || lastName.length<3) {
            errors.push ("The first and last name should have more than 3 characters ");
        }
        // Las siguientes condiciones no están en el enunciado de la práctica
        if ( password !== password2 ) {
            errors.push ("The passwords must match ");
        }
        return errors;
    }
};
export { userValidator };