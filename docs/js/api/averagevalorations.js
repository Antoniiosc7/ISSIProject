/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const averageValorationsAPI = {
    
    getAll: function (  ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/averagevalorations/`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    getByPhotoId: function ( photoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/averagevalorations/${photoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },

};
export { averageValorationsAPI };