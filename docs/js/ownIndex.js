/*
	C.Arévalo
	index.js.  Control de index.html
	Marzo/2021
*/
"use strict";						// Nivel elevado de control de errores
import { galleryRenderer } from '/js/renderers/gallery.js';// Renderizador de la galería
import { messageRenderer } from '/js/renderers/messages.js';// 5.3 JSON con datos de las fotos 
import { ownIndexAPI } from "/js/api/ownIndex.js"; // API REST para fotos
import { sessionManager } from "/js/utils/session.js";
import { usersAPI } from "/js/api/users.js";
import { photoRenderer } from '/js/renderers/photos.js';

const urlParams = new URLSearchParams(window.location.search); 
const userid = urlParams.get('userid');
console.log ("The photo ID to load is: " + userid);

function main () {
	photos();


}


function photos(){
		let galleryContainer = document.querySelector ("#divGallery");
		ownIndexAPI.getById (userid)			
			.then ( photos => {		
					let gallery = galleryRenderer.asCardGallery(photos);
					galleryContainer.appendChild (gallery);
			})
			.catch ( error => {		
					messageRenderer.showErrorAsAlert(error);
			});




}
document.addEventListener ("DOMContentLoaded", main );
