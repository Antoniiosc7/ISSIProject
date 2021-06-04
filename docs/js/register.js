"use strict";
import { messageRenderer } from "/js/renderers/messages.js"; 
import { userValidator } from "/js/validators/users.js"; 
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js"; 

document.addEventListener ("DOMContentLoaded", function() {
    let registerForm = document.getElementById ("register-form");
    registerForm.onsubmit = function handleSubmitRegister (event) {
		
		let formData = new FormData (registerForm);
		let errors = userValidator.validateRegister(formData); 
		
		if ( errors.length > 0) {
			messageRenderer.showErrorAsAlert(errors.join("<br>"));
			return false; 
		} else  {   sendRegister(formData);    
					return false; 
		}
	}		
}
); 

function sendRegister(formData) { 
    authAPI.register(formData)
        .then(loginData=>{    
                console.log(loginData); 
                let sessionToken=loginData.sessionToken;
                let loggedUser=loginData.user;
                sessionManager.login(sessionToken, loggedUser);
                alert ("¡Usuario registrado!");
                window.location.href = "index.html"; 
        })
        .catch(error=>{       
                messageRenderer.showErrorAsAlert(error);
                console.log(error);
        });
}
