/*
	C.Arévalo
	photos.js.  API Rest para recurso:"photos"
	Marzo/2021
*/
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const photoPrivacitysAPI = {
    
    getAll: function () {
        return new Promise ( function ( resolve , reject ) {
            axios
            .get(`${BASE_URL}/photoprivacitys`, requestOptions )
            .then ( response => resolve ( response.data ))
            .catch ( error => reject ( error.response.data.message ));
            });
        },
    getById: function ( userId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .get(`${BASE_URL}/photoprivacitys/${userId}`, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    
       
};


export { photoPrivacitysAPI };