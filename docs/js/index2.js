"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";

function main(){
    loadPhotos();
}

function loadPhotos() {
    let gallery = document.getElementById("gallery");
	
    let photo = {
        photourl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg",
        user: "Antoniiosc7",
        userurl:"http://127.0.0.1:8080/antoniiosc7.html",
        photo: "http://127.0.0.1:8080/show_photo.html",
        title: "Gataso",
        description: "buen gato mi pana",
    }; 

    let card = photoRenderer.asCard(photo);
    gallery.appendChild(card);
}

document.addEventListener("DOMContentLoaded", main);