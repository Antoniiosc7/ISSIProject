
"use strict ";
import { sessionManager } from "/js/utils/session.js";

document.addEventListener ("DOMContentLoaded", function () { 
    showUser(); 
    addLogoutHandler(); 
    hideHeaderOptions(); 
    showUser2();
});

function showUser() { // Mostrar usuario conectado o anónimo
    let title = document.getElementById("showUserName");
    let text; ; 
    if ( sessionManager.isLogged() ) { 
            let username = sessionManager.getLoggedUser().username;
            let iduser = sessionManager.getLoggedId();
            let userid = sessionManager.getLoggedUser().userid;      
            text = `<a href="user.html?userid=${iduser}"><small><i class="fa fa-users"></i> ${username} </small></a>`;     
            //text = `<a href="user.html?ownIndex=${iduser}"><small><i class="fa fa-users"></i> Siguiendo </small></a>`;
            //text = `<small><i class="fa fa-users"></i> ${username} </small>`;
    } else {
            text = `<small><i class="fa fa-hand-stop-o"></i>Invitado</small>`; // Muestra usuario anónimo
    }
    title.innerHTML = text; // Muestra usuario anónimo
}
function showUser2() { 
    let title = document.getElementById("showUserName2");
    let text; ;
    if ( sessionManager.isLogged() ) { 
            let username = sessionManager.getLoggedUser().username;
            let iduser = sessionManager.getLoggedId();
            let userid = sessionManager.getLoggedUser().userid;        
            text = `<a href="ownIndex.html?userid=${iduser}"><small><i class="fa fa-user fa-fw"></i> Siguiendo </small></a>`;
            //text = `<small><i class="fa fa-users"></i> ${username} </small>`;
    } else {
            text = `<small><i class="fa fa-hand-stop-o"></i>Invitado</small>`; 
    }
    title.innerHTML = text; 
}
function addLogoutHandler () { 
    let logoutButton = document.getElementById ("navbar-logout");
    logoutButton.addEventListener ("click", function () { 
    sessionManager.logout (); 
    window.location.href = "index.html"; 
    });
}

function hideHeaderOptions () { // Conmutar opciones disponibles en función de usuario conectado
    let headerRegister = document.getElementById ("navbar-register");
    let headerLogin = document.getElementById ("navbar-login");
    let user2 = document.getElementById ("navbar-brand");
    let headerLogout = document.getElementById ("navbar-logout");
    let headerRecent = document.getElementById ("navbar-recent");
    let headerCreate = document.getElementById ("navbar-upload");
    let headerTrending = document.getElementById ("navbar-trending");
    if ( sessionManager.isLogged() ) {
            headerRegister.style.display = "none";
            headerLogin.style.display = "none";
    } else {
        user2.style.display = "none";
    }
}

