/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const ownIndexAPI = {
    
    getAll: function () {
        return new Promise ( function ( resolve , reject ) {
            axios
            .get(`${BASE_URL}/ownindex`, requestOptions )
            .then ( response => resolve ( response.data ))
            .catch ( error => reject ( error.response.data.message ));
            });
        },
    getById: function ( seguidoId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/ownindex/${seguidoId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    
       
};


export { ownIndexAPI };