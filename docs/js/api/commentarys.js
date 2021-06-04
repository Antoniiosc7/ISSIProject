/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const commentarysAPI = {
    
    getAll: function () {
    return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/commentarys`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getById: function ( commentaryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/commentarys/${commentaryId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getByPhotoId: function ( photoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/commentarys/${photoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },


    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/commentarys`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            
    update: function ( commentaryId , formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .put(`${BASE_URL}/commentarys/${commentaryId}`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
        
    delete: function ( commentaryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/commentarys/${commentaryId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
};
export { commentarysAPI };