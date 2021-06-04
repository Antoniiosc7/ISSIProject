'use strict';

import { authAPI } from './api/auth.js';
import { sessionManager } from './utils/session.js';
import { messageRenderer } from './renderers/messages.js';


const loginForm = document.getElementById("login-form");

document.addEventListener("DOMContentLoaded", function () { 
    loginForm.addEventListener("submit", function (event) { 
        event.preventDefault(); 
		document.getElementById("errors").innerHTML = ""; 
		sendLogin(new FormData(loginForm)); 
    });
});

function sendLogin(formData) {
    authAPI.login(formData)
        .then(loginData => {
            let sessionToken = loginData.sessionToken;
            let loggedUser = loginData.user;
            sessionManager.login(sessionToken, loggedUser);
            window.location.href = "index.html"; 
        })
        .catch(error => messageRenderer.showErrorAsAlert(error));
}
