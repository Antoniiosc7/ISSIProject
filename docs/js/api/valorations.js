/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const valorationsAPI = {
    
    getAll: function () {
    return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/valorations`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getById: function ( valorationId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/valorations/${valorationId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/valorations`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            
    update: function ( valorationId , formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .put(`${BASE_URL}/valorations/${valorationId}`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
        
    delete: function ( valorationId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/valorations/${valorationId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
};
export { valorationsAPI };