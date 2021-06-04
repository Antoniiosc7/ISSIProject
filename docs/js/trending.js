"use strict ";
import { galleryRenderer } from '/js/renderers/gallery.js';
import { photoRenderer } from "/js/renderers/photos.js";
import { messageRenderer } from '/js/renderers/messages.js';
import { usersAPI } from "/js/api/users.js";
import { photosAPI } from "/js/api/photos.js"; 
import { sessionManager } from "/js/utils/session.js";
import { userswithphotosAPI } from "/js/api/userswithphotos.js";
import { averageValorationsAPI } from "/js/api/averagevalorations.js";
import { followersAPI } from "/js/api/followers.js";
import { mostFollowsAPI } from "/js/api/mostfollows.js";
import { mostValorationsAPI } from "/js/api/mostvalorations.js";
import { mostValorationsFechaAPI } from "/js/api/mostvalorationsfecha.js";
import { mostCommentarysFechaAPI } from "/js/api/mostcommentarysfecha.js";
import { mostCategoryAPI } from "/js/api/mostcategory.js";


let urlParams = new URLSearchParams ( window.location.search ); 
let userId = urlParams.get ("userid"); // 

console.log ("The user ID to load is: " + userId);
function main () {
   
    valoracionMediaFecha()
    valoracionMedia();
    masSeguidores();
    masComentarios();
    masCategorias();
}

function masCategorias(){
    let galleryContainer = document.querySelector ("#masCategorias");

    mostCategoryAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostCategorysGallery(comments);
            galleryContainer.appendChild (gallery);
    })
}
function masComentarios(){

    let galleryContainer = document.querySelector ("#masComentarios");

    mostCommentarysFechaAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostCommentarysGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}
/*
function valoracionMedia(){
    let photoContainer = document.querySelector ("#bigRate");
    averageValorationsAPI.getAll ()
        .then ( photos => { let photoDetails = photoRenderer.asAvgValoration(photos[2   ]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {let photoDetails = photoRenderer.try(error[0]);
            photoContainer.appendChild (photoDetails);
        });
}
*/
function masSeguidores(){

    let galleryContainer = document.querySelector ("#masSeguidores");

    mostFollowsAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostFollowsGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}

function valoracionMedia(){

    let galleryContainer = document.querySelector ("#bigRate");

    mostValorationsAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostValorationsGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}

function valoracionMediaFecha(){

    let galleryContainer = document.querySelector ("#bigRateFecha");

    mostValorationsFechaAPI.getAll()			
    .then ( comments => {		
            let gallery = galleryRenderer.asMostValorationsFechaGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}




document.addEventListener ("DOMContentLoaded", main ); 