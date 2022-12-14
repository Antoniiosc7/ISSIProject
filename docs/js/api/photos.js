/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const photosAPI = {
    
    getAll: function () {
    return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/photos`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getById: function ( photoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/photos/${photoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getUserById: function ( userId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/photos/${userId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/photos`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            
    update: function ( photoId , formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .put(`${BASE_URL}/photos/${photoId}`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
        
    delete: function ( photoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/photos/${photoId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
};
export { photosAPI };