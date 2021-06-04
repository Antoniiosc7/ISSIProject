/*
	C.Arévalo
	gallery.js.  Renderizador de la galería, para un array JSON de photos
	Marzo/2021
*/
"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
import { photoRenderer } from "/js/renderers/photos.js"; // Renderizador de una photo

const galleryRenderer = {
	asCardGallery: function (photos) {
		let galleryContainer = parseHTML ('<div class="photo-gallery row p-2 bg-light"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let photo of photos ) {
				galleryContainer.appendChild (photoRenderer.asCard (photo)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},
	asRateGallery: function (rates) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let rate of rates ) {
				galleryContainer.appendChild (photoRenderer.asRate (rate)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},
	asMostFollowsGallery: function (follows) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let follow of follows ) {
				galleryContainer.appendChild (photoRenderer.asMostFollows(follow)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},
	asMostValorationsGallery: function (valorations) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let valoration of valorations ) {
				galleryContainer.appendChild (photoRenderer.asMostValorations(valoration)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},	
	asMostCommentarysGallery: function (valorations) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let valoration of valorations ) {
				galleryContainer.appendChild (photoRenderer.asMostCommentarys(valoration)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},	
	asMostValorationsFechaGallery: function (valorations2) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let valoration2 of valorations2 ) {
				galleryContainer.appendChild (photoRenderer.asMostValorationsFecha(valoration2)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},	
	asMostCategorysGallery: function (categoria) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let valoration2 of categoria ) {
				galleryContainer.appendChild (photoRenderer.asMostCategory(valoration2)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},	
	asCategoryGallery: function (valorations) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let valoration of valorations ) {
				galleryContainer.appendChild (photoRenderer.asCategory(valoration)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		},	
	asCommentGallery: function (comments) {
		let galleryContainer = parseHTML ('<div"> </div>'); // Div a incrustar en contenedor de la galería
		for ( let comment of comments ) {
				galleryContainer.appendChild (photoRenderer.asComment(comment)); // Añade Card a la fila
		}
		return galleryContainer; // Devuelve el div con todas las fotos. Se incrustará en el conteenedor de la galería
		}
	}

	

	
export { galleryRenderer };
