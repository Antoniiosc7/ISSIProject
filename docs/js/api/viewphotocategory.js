/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const viewPhotoCategoryAPI = {
    
    getAll: function () {
        return new Promise ( function ( resolve , reject ) {
            axios
            .get(`${BASE_URL}/viewphotocategory`, requestOptions )
            .then ( response => resolve ( response.data ))
            .catch ( error => reject ( error.response.data.message ));
            });
        },
    getById: function ( categoryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/viewphotocategory/${categoryId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    getCategoryById: function ( photoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/viewphotocategory/photo/${photoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    
       
};


export { viewPhotoCategoryAPI };