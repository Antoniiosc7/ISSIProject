"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const photoRenderer = {
    asCard: function (photo){
        let html = `<div class="card">
        <div class="card-header">
            <a href="${photo.userurl}" id="negro">
                <h5>${photo.user}</h5>
            </a>
        </div>
        <img src="${photo.photourl}"
            class="card-img-top">
        <div class="card-body">
            <h4 class="card-title">${photo.title}
            </h4>
            <hr>
            <ul class="list-group list-group-flush">

                <h7 class="card-title">${photo.description}
                </h7>
                <li class="list-group-item"><strong>Categorias:</strong> <a
                        href="category.html" class="text">Amigos,</a> <a href="category.html"
                        class="text">Fiesta.</a></li>
                </li>
                <li class="list-group-item"><B>Fecha de publicacion:</B> 23/8/2019</li>

                <li class="list-group-item"><b>Visibilidad:</b> Publica</li>
                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg></li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-secondary"> <a href="show_photo.html"
                        id="blanco">Ver en detalle</a></button>
            </div>
        </div>
    </div>`;
        let card = parseHTML(html);
        return card;
    },


};

export { photoRenderer };