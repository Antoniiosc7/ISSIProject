
"use strict";					
import { galleryRenderer } from '/js/renderers/gallery.js';
import { messageRenderer } from '/js/renderers/messages.js';
import { photoPrivacitysAPI } from "/js/api/photoPrivacitys.js"; 
import { sessionManager } from "/js/utils/session.js";
import { averageValorationsAPI } from "/js/api/averagevalorations.js";
import { photoRenderer } from '/js/renderers/photos.js';
import { mostValorationsAPI } from "/js/api/mostvalorations.js";
import { mostFollowsAPI } from "/js/api/mostfollows.js";

function main () {
	photos();
	valoracionMedia();

}

function valoracionMedia(){

    let galleryContainer = document.querySelector ("#bigRate");

    mostValorationsAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostValorationsGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}

function photos(){
		let galleryContainer = document.querySelector ("#divGallery");
		photoPrivacitysAPI.getAll ()			
			.then ( photos => {		
					let gallery = galleryRenderer.asCardGallery(photos);
					galleryContainer.appendChild (gallery);
			})
			.catch ( error => {		
					messageRenderer.showErrorAsAlert(error);
			});




}
document.addEventListener ("DOMContentLoaded", main );
