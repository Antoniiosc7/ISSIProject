
"use_strict";
import { BASE_URL , requestOptions } from "./common.js";
const categoryPhotoAPI = {
    
    

    create: function ( formData ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .post(`${BASE_URL}/categoryphoto`, formData, requestOptions )
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
    delete: function ( photoId , categoryId ) {
        return new Promise ( function ( resolve , reject ) {
        axios
        .delete(`${BASE_URL}/categoryphoto/${photoId}&&${categoryId}`, requestOptions)
        .then( response => resolve ( response.data ))
        .catch( error => reject ( error.response.data.message ));
        });
    },
            
};
export { categoryPhotoAPI };