"use strict ";
import { galleryRenderer } from '/js/renderers/gallery.js';
import { photoRenderer } from "/js/renderers/photos.js";
import { messageRenderer } from '/js/renderers/messages.js';
import { usersAPI } from "/js/api/users.js";
import { photosAPI } from "/js/api/photos.js"; 
import { sessionManager } from "/js/utils/session.js";
import { userswithphotosAPI } from "/js/api/userswithphotos.js";
import { photoPrivacitysAPI } from "/js/api/photoprivacitys.js";
import { followersAPI } from "/js/api/followers.js";


let urlParams = new URLSearchParams ( window.location.search ); 
let userId = urlParams.get ("userid"); //

console.log ("The user ID to load is: " + userId);
function main () {
    fotoperfil();

    nombreperfil();
    fotosdelperfil();
    let follow = document.getElementById ("follow-buttom");
    let unfollow = document.getElementById ("unfollow-buttom");
    if(sessionManager.getLoggedId() != userId) {
    let seguir = document.getElementById ("form-follower");
    seguir.onsubmit = seguirUsuario;
    let dejarDeSeguir2 = document.getElementById ("form-unfollower");
    dejarDeSeguir2.onsubmit = dejarDeSeguir;

    }else{
        follow.style.display = "none";
        unfollow.style.display = "none";

    }
}


function seguirUsuario ( event ) {
    event.preventDefault(); 
    let form = event.target;
    let formData = new FormData (form);

  //if (currentPhoto === null) { // Cargar una foto nueva
        let iduser = sessionManager.getLoggedId();
        formData.append ("seguidoId", iduser); 
		formData.append ("siguiendoId", userId );  
        followersAPI.create ( formData )
            .then( data => {window.location.href = ""; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });
            alert ("Usuario seguido!");
}
function dejarDeSeguir ( event ) {
    event.preventDefault(); 
    let iduser = sessionManager.getLoggedId();
        followersAPI.delete ( iduser, userId )
            .then( data => {window.location.href = ""; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });
            alert ("Ya no le sigues!");
}
function fotoperfil(){
    let photoContainer = document.querySelector ("#perfil");
    usersAPI.getById (userId)
        .then ( photos => { let photoDetails = photoRenderer.asProfile(photos[0]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {messageRenderer.showErrorAsAlert( error );
        });
}

function nombreperfil(){
    let photoContainer = document.querySelector ("#nombredeperfil");
    usersAPI.getById (userId)
        .then ( photos => { let photoDetails = photoRenderer.asUserName(photos[0]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {messageRenderer.showErrorAsAlert( error );
        });
}

function fotosdelperfil(){
    let urlParams = new URLSearchParams ( window.location.search ); 
    let user2 = urlParams.get ("userid");
    let galleryContainer = document.querySelector ("#blogperfil");
    console.log ("Estoy cargando el user: " + user2);
    if ( sessionManager.getLoggedId() == user2 ) { 
        
        userswithphotosAPI.getAll(user2)			
            .then ( photos => {		
                    let gallery = galleryRenderer.asCardGallery(photos);
                    galleryContainer.appendChild (gallery);
            })
            .catch ( error => {		
                    ;
            });

} else {
photoPrivacitysAPI.getBy
	Id(user2)			
		.then ( photos => {	
				let gallery = galleryRenderer.asCardGallery(photos);
				galleryContainer.appendChild (gallery);
		})
		.catch ( error => {		
			;
		});
}




}

document.addEventListener ("DOMContentLoaded", main ); // Manejador de eventos. Cuando se carga totalmente