

"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
import { usersAPI }  from "/js/api/users.js";
import { commentarysAPI }  from "/js/api/commentarys.js";
//import { galleryPhotos, users } from "/js/utils/data.js";

const photoRenderer = { 
	// 5.2 Devuelve Card para la galería
	asCard: function (comment) { // El parámetro es un objeto photo
	let card = parseHTML(
			`                                <li class="list-group-item"><strong>${comment.userId} : </strong>${comment.text}!!)
		`);
	// Recuperar datos de usuario con promesa AJAX, mediante AXIOS

	return card;
	},
	// 5.3 Detalles de la foto




};
export { photoRenderer };