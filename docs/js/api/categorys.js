/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const categorysAPI = {
    
    getAll: function () {
    return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/categorys`, requestOptions )     // Http GET Request a la API de la BD MariaDB que debe estar creada
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getById: function ( categoryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/categorys/${categoryId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

    getByPhotoId: function ( categoryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/categorys/${categoryId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },


    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/categorys`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            
    update: function ( categoryId , formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .put(`${BASE_URL}/categorys/${categoryId}`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
        
    delete: function ( commentaryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/categorys/${commentaryId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
};
export { categorysAPI };