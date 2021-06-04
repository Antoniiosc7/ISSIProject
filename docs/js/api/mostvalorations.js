/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const mostValorationsAPI = {
    
    getAll: function () {
        return new Promise ( function ( resolve , reject ) {
            axios
            .get(`${BASE_URL}/mostvalorations`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
            .then( response => resolve ( response.data ))
            .catch( error => reject ( error.response.data.message ));
            });
        }
 
    };


export { mostValorationsAPI };