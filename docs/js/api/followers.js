/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const followersAPI = {
    
    getAll: function () {
    return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/followers`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getById: function ( siguiendoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/followers/${siguiendoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },


    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/followers`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            

        
    delete: function ( seguidoId , siguiendoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/followers/${seguidoId}&&${siguiendoId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
};
export { followersAPI };