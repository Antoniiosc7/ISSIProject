"use strict ";
import { messageRenderer } from '/js/renderers/messages.js';
import { photosAPI } from "/js/api/photos.js"; 
import { sessionManager } from './utils/session.js';
import { categorysAPI } from "/js/api/categorys.js";

let urlParams = new URLSearchParams ( window.location.search ); // Query a la URL
let photoId = urlParams.get ("photoId"); // Extrae el parámetro
let currentPhoto = null; // Datos de la foto actual

function main () {
    let categoryForm = document.getElementById ("form-category-upload");
    categoryForm.onsubmit = subecategory;
    if ( photoId !== null ) { loadCurrentPhoto (); } // Si es edición existe el parámetro, si no es una carga
    let registerForm = document.getElementById ("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;

}

function subecategory ( event ) {
    event.preventDefault(); 
    let form = event.target; 
    let formData = new FormData (form);
        categorysAPI.create ( formData )
            .then( data => {window.location.href = ""; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });



}

function loadCurrentPhoto () { // Cargar la foto actual y rellenar el formulario
    let pageTitle           = document.getElementById ("create-edit-title"); 
    let urlInput            = document.getElementById ("input-url");
    let titleInput          = document.getElementById ("input-title");
    let descriptionInput    = document.getElementById ("input-description");
    let imagePreview        = document.getElementById ("image-preview");

    pageTitle.textContent   = " Editing a photo ";
    photosAPI.getById ( photoId )
        .then(photos => {
                    currentPhoto = photos [0];
                    urlInput.value = currentPhoto.url;
                    titleInput.value = currentPhoto.title;
                    descriptionInput.value = currentPhoto.description;
                    let visibilityInput     = document.getElementById ("input-visibility-"+currentPhoto.visibility);                 
                    visibilityInput.checked = true ;
                    imagePreview.src = urlInput.value;
        })
        .catch(error => { messageRenderer.showErrorMessage ( error );
        });
}

function handleSubmitPhoto ( event ) {
    event.preventDefault(); 
    let form = event.target; 
    let formData = new FormData (form);
	
    if (currentPhoto === null) { // Cargar una foto nueva
        let iduser = sessionManager.getLoggedId();
        formData.append ("userId", iduser); 
		formData.set("visibility", formData.get("visibility") ? formData.get("visibility") : "Private");  
      	photosAPI.create ( formData )
            .then( data => {window.location.href = "index.html"; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });
    } else { // Actualizar foto 
        formData.append("userId", currentPhoto.userId ); 
        formData.append("date", currentPhoto.date ); 
        photosAPI.update( photoId , formData )
            .then( () => window.location.href = "index.html")
            .catch( error => messageRenderer.showErrorAsAlert ( error ));
    }


}

document.addEventListener ("DOMContentLoaded", main ); // Manejador de eventos. Cuando se carga totalmente