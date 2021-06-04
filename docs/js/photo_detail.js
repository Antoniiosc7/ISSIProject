"use strict ";
import { galleryRenderer } from '/js/renderers/gallery.js';

import { photoRenderer } from "/js/renderers/photos.js";
import { messageRenderer } from '/js/renderers/messages.js';// 5.3 JSON con datos de las fotos 
import { photosAPI } from "/js/api/photos.js";
import { usersAPI } from "/js/api/users.js"; // API REST para fotos
import { sessionManager } from "/js/utils/session.js";
import { commentarysAPI } from "/js/api/commentarys.js";
import { valorationsAPI } from "/js/api/valorations.js";
import { categorysAPI } from "/js/api/categorys.js";
import { valoracionesValidator } from "/js/validators/valoraciones.js";
import { CommentaryViewAPI } from "/js/api/Commentaryview.js";
import { averageValorationsAPI } from "/js/api/averagevalorations.js";
import { categoryPhotoAPI } from "/js/api/categoryphoto.js"
import {viewPhotoCategoryAPI} from "/js/api/viewphotocategory.js"; 



const urlParams = new URLSearchParams(window.location.search); 
const photoId = urlParams.get('photoId'); 
console.log ("The photo ID to load is: " + photoId);
function main () {

    antiguoPhotoDetail();
    selectCategory();
    //cargaComentarios ();        
    cargaComentarios();
    cargaCategoria();
    valoracionMedia()
    
    let formAddCategory = document.getElementById ("publishCategory");
    formAddCategory.onsubmit = addCategory;
    let formPublishComment = document.getElementById ("formPublishComment");
    formPublishComment.onsubmit = publicarComentario;
    let ratePhoto = document.getElementById ("formValorations");
    ratePhoto.onsubmit = publicarValoracion;
    let quitCategory = document.getElementById ("quitCategory");
    quitCategory.onsubmit = quitarCategoria;
}

function quitarCategoria ( event ) {
    event.preventDefault(); 
    let form = event.target; 
    let formData = new FormData (form);   

         categorysAPI.getAll()
        .then (categorias =>{
        for(let categoria of categorias){            
            if(categoria.name == formData.get("name")){
                let categoryId = categoria.categoryId
                console.log(categoria.categoriaId)
                categoryPhotoAPI.delete(photoId, categoryId)
                .then(data=>{window.location.href=""})
                .catch(error=>{messageRenderer.showErrorMessage(error)})
            }
        }
    })

}

function cargaCategoria(){

    let galleryContainer = document.querySelector ("#categoriamodule");

    viewPhotoCategoryAPI.getCategoryById(photoId)			
    .then ( comments => {		
            let gallery = galleryRenderer.asCategoryGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}
function addCategory ( event ) {
    event.preventDefault(); 
    let form = event.target; 
    let formData = new FormData (form);   

    console.log(formData)
    formData.append("photoId", photoId);
       
         categorysAPI.getAll()
        .then (categorias =>{
        for(let categoria of categorias){            
            if(categoria.name == formData.get("name")){
                
                formData.append("categoryId", categoria.categoryId)
                console.log(categoria.categoriaId)
                categoryPhotoAPI.create(formData)
                .then(data=>{window.location.href=""})
                .catch(error=>{messageRenderer.showErrorMessage(error)})
            }
        }
    })

}

function selectCategory(){
    let photoContainer = document.querySelector ("#categoryyy");
    categorysAPI.getAll()
        .then ( photos => { 
            let photoDetails = photoRenderer.asCategoryInput(photos);
            photoContainer.appendChild (photoDetails);
        })
        .catch (error => {
            messageRenderer.showErrorAsAlert(error);
        })
}

function antiguoPhotoDetail(){

    let photoContainer = document.querySelector ("#photo-details");
    photosAPI.getById (photoId)
        .then ( photos => { let photoDetails = photoRenderer.asCard(photos[0]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {messageRenderer.showErrorAsAlert( error );
        });

    
    let deleteBtn = document.querySelector ("#button-delete");
	let editBtn = document.querySelector ("#button-edit");
	if ( sessionManager.getLoggedId() ) {
		deleteBtn.onclick = handleDelete; 
		editBtn.onclick = handleEdit;	
	} else {
		deleteBtn.style.display="none";
		editBtn.style.display="none";
	}
};

function handleDelete ( event ) {
    if ( confirm("Confirm to delete this photo ?")) {
    photosAPI.delete( photoId )
        .then( data => {window.location.href="index.html"; })
    .catch ( error => { messageRenderer.showErrorMessage ( error ); })
    }
}

function handleEdit ( event ) { 
    window.location.href = "edit_photo.html?photoId=" + photoId;
};

function publicarComentario ( event ) {
    event.preventDefault(); 
    let form = event.target;
    let formData = new FormData (form);
	
    //if (currentPhoto === null) { // Cargar una foto nueva
        let iduser = sessionManager.getLoggedId();
        formData.append ("userId", iduser); 
		formData.append ("photoId", photoId );  
        commentarysAPI.create ( formData )
            .then( data => {window.location.href = ""; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });
            alert ("Comentario publicado!");
}


function publicarValoracion ( event ) {
    event.preventDefault(); 
    let form = event.target; 
    let formData = new FormData (form);
        let iduser = sessionManager.getLoggedId();
        formData.append ("userId", iduser); 
		formData.append ("photoId", photoId );  
        valorationsAPI.create ( formData )
            .then( data => {window.location.href = ""; })
            .catch( error => {messageRenderer.showErrorAsAlert ( error ); });
            alert ("Valoracion enviada!");

}

function valoracionMedia(){
    let photoContainer = document.querySelector ("#valoracionMedia");
    averageValorationsAPI.getByPhotoId (photoId)
        .then ( photos => { let photoDetails = photoRenderer.asAvgValoration(photos[0]);
                            photoContainer.appendChild (photoDetails);
        })
        .catch( error => {let photoDetails = photoRenderer.try(error[0]);
            photoContainer.appendChild (photoDetails);
        });
}


function cargaComentarios(){

    let galleryContainer = document.querySelector ("#commentariosModule");

    CommentaryViewAPI.getByPhotoId(photoId)			
    .then ( comments => {		
            let gallery = galleryRenderer.asCommentGallery(comments);
            galleryContainer.appendChild (gallery);
    })


}
document.addEventListener ("DOMContentLoaded", main ); 

