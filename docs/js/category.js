/*
	C.Arévalo
	index.js.  Control de index.html
	Marzo/2021
*/
"use strict";						// Nivel elevado de control de errores
import { galleryRenderer } from '/js/renderers/gallery.js';// Renderizador de la galería
import { messageRenderer } from '/js/renderers/messages.js';// 5.3 JSON con datos de las fotos 
import { viewPhotoCategoryAPI } from "/js/api/viewphotocategory.js"; // API REST para fotos
import { sessionManager } from "/js/utils/session.js";
import { averageValorationsAPI } from "/js/api/averagevalorations.js";
import { photoRenderer } from '/js/renderers/photos.js';
import { mostValorationsAPI } from "/js/api/mostvalorations.js";
import { mostFollowsAPI } from "/js/api/mostfollows.js";

let urlParams = new URLSearchParams ( window.location.search ); // Query a la URL
let categoryId = urlParams.get ("categoryId"); // Extrae el parámetro

console.log ("The category ID to load is: " + categoryId);
function main () {
	photos();
	valoracionMedia();
	nombreCategoria()
}

function valoracionMedia(){

    let galleryContainer = document.querySelector ("#bigRate");

    mostValorationsAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostValorationsGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}
function nombreCategoria(){
    let photoContainer = document.querySelector ("#nombredecategoria");
    viewPhotoCategoryAPI.getById (categoryId)
        .then ( photos => { let photoDetails = photoRenderer.asCategoryName(photos[0]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {messageRenderer.showErrorAsAlert( error );
        });
}
function photos(){
		let galleryContainer = document.querySelector ("#divGallery");
		viewPhotoCategoryAPI.getById (categoryId)			
			.then ( photos => {		
					let gallery = galleryRenderer.asCardGallery(photos);
					galleryContainer.appendChild (gallery);
			})
			.catch ( error => {		
					messageRenderer.showErrorAsAlert(error);
			});



}
document.addEventListener ("DOMContentLoaded", main );
