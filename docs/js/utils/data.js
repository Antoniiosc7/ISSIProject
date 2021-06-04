/*
	C.Arévalo
	data.js.  Array JSON de photos para renderizar galería y detalles
	Marzo/2021
*/
'use strict';

// 5.3 Fotos de la galería. Se le añade el id a la photo
const galleryPhotos = [
    {	id:0,
        title:"Samoyed",
        description:"A very good boy.",
        userId: 1, date:"22/12/2016",
        url:"https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
    },
    {	id:1,
        title:"Spanish tortilla",
        description:"With onion",
        userId: 2,date:"22/12/2016",
        url:"https://cocina-familiar.b-cdn.net/recetas/thumb/tortilla-de-patata-con-cebolla.jpg",
    },
    {	id:2,
        title:"Seville",
        description:"The beautiful city of Seville",
        userId: 3,date:"22/12/2016",
        url:"https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg",
    },
    {	id:3,
        title:"Abstract art",
        description:"Clipart",
        userId: 4,date:"22/12/2016",
        url:"https://clipartart.com/images/worst-clipart-ever-1.jpg",
    },
];

export { galleryPhotos };
