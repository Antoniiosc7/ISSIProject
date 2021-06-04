

"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
import { usersAPI }  from "/js/api/users.js";
import { photosAPI }  from "/js/api/photos.js";
import { categorysAPI }  from "/js/api/categorys.js";
import { messageRenderer } from '/js/renderers/messages.js';
//import { galleryPhotos, users } from "/js/utils/data.js";

const photoRenderer = { 
	// 5.2 Devuelve Card para la galería
	asCard: function (photo) { // El parámetro es un objeto photo
	let card = parseHTML(
			`
			<div class="card" id="ajustate">
			<div class="card">
			<div class="card-header">
				<a href="user.html?userid=${photo.userId}" id="negro">
					<h5 class="card-text user-name"></h5>
				</a>
			</div>
			<img src="${photo.url}"
				class="card-img-top">
			<div class="card-body">
				<h4 class="card-title">${photo.title}
				</h4>
				<hr>
				<ul class="list-group list-group-flush">
	
					<h7 class="card-title">${photo.description}
					</h7>
					<li class="list-group-item"><B>Fecha de publicacion:</B> ${photo.date}</li>
	
					<li class="list-group-item"><b>Visibilidad:</b> ${photo.visibility}</li>
					
				</ul>
				<div class="card-body">
					<button type="button" class="btn btn-secondary"> <a href="photo_detail.html?photoId=${photo.photoId}"
							id="blanco">Ver en detalle</a></button>
				</div>
			</div>
			</div>
			
		</div>)
		`);
	// Recuperar datos de usuario con promesa AJAX, mediante AXIOS
	usersAPI.getById(photo.userId)
	.then( users => { 
		card.querySelector(".user-name").innerHTML=`
		<small>${photo.userId}: ${users[0].firstName} ${users[0].lastName}
		</small>`;
	})
	.catch ( error => (messageRenderer.showErrorAsAlert(error)) );

	return card;
	},
	// 5.3 Detalles de la foto
	asDetail: function (photo) {
		let html = `

		<div class="card">

		<img src="${photo.url}"
			class="card-img-top">
		<div class="card-body">
			<h4 class="card-title">${photo.title}
			</h4>
			<hr>
			<ul class="list-group list-group-flush">

				<h7 class="card-title">${photo.description}
				</h7>
				<li class="list-group-item"><strong>Categorias:</strong> <a
						href="category.html" class="text">${photo.category}</a> <a href="category.html"
						class="text">Fiesta.</a></li>
				</li>
				<li class="list-group-item"><B>Fecha de publicacion:</B> ${photo.date}</li>

				<li class="list-group-item"><b>Visibilidad:</b> ${photo.visibility}</li>
                                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" class="bi bi-star-fill"
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
				</div>
			</div>  
		</div>
	`;


		let photoDetails = parseHTML (html);
		usersAPI.getById(photo.userId)
		.then( users => { 
			card.querySelector(".user-name").innerHTML=`
			<small>${photo.userId}: ${users[0].firstName} ${users[0].lastName}
					  
			</small>`;
		})
		.catch ( error => (messageRenderer.showErrorAsAlert(error)) );
		return photoDetails;
		},
///########################################################################################(())
		asProfile: function (user) {
			let html = `
			<div class="card" id="xd">
                <br>
                <div class="text-center">
                  <img src="${user.avatarUrl}"
                    class="rounded" alt="" id="fotillo">
                </div>
                <br>
                <hr>
                <br>
                <dl class="row">

                  <dt class="col-sm-3">Nombre</dt>
                  <dd class="col-sm-9">${user.firstName}</dd>

                  <dt class="col-sm-3">Apellido(s)</dt>
                  <dd class="col-sm-9">
                    <p>${user.lastName}</p>

                  </dd>

                  <dt class="col-sm-3">Email</dt>
                  <dd class="col-sm-9">${user.email}</dd>

                  <dt class="col-sm-3">Nombre de usuario</dt>
                  <dd class="col-sm-9">${user.username}</dd>

                </dl>
              </div>
		`;
	
	
			let photoDetails = parseHTML (html);
	
			// Recuperar datos de usuario con promesa AJAX, mediante AXIOS
			/*
			usersAPI.getById(photo.userId)
			.then( users => { 
				photoDetails.querySelector(".user-link").innerHTML=`
					«${photo.userId}: ${users[3].firstName} ${users[3].lastName}»
				`;
			})
			.catch ( error => (messageRenderer.showErrorAsAlert(error)) );
	*/
			return photoDetails;
			},
///##############################################
asCategoryName: function (photo) {
	let html = `
	
			<h5>Categoria: ${photo.name}</h5>
			
`;


	let photoDetails = parseHTML (html);

	// Recuperar datos de usuario con promesa AJAX, mediante AXIOS


	return photoDetails;
	},
///##############################################
			asUserName: function (photo) {
				let html = `
				
                        <h2>@${photo.username}</h2>
                        
			`;
		
		
				let photoDetails = parseHTML (html);
		
				// Recuperar datos de usuario con promesa AJAX, mediante AXIOS

		
				return photoDetails;
				},
	// ################################################### //
	asCard2: function (photo) { // El parámetro es un objeto photo
		let card = parseHTML(
				`<div class="col-md-6 mb-3">
				<div class="card">
				<div class="card">
				<div class="card-header">
					<a href="user.html?userid=${photo.userId}" id="negro">
						<h5 class="card-text user-name"></h5>
					</a>
				</div>
				<img src="${photo.url}"
					class="card-img-top">
				<div class="card-body">
					<h4 class="card-title">${photo.title}
					</h4>
					<hr>
					<ul class="list-group list-group-flush">
		
						<h7 class="card-title">${photo.description}
						</h7>
						<li class="list-group-item"><strong>Categorias:</strong> <a
								href="category.html" class="text">${photo.category}</a> <a href="category.html"
								class="text">Fiesta.</a></li>
						</li>
						<li class="list-group-item"><B>Fecha de publicacion:</B> ${photo.date}</li>
		
						<li class="list-group-item"><b>Visibilidad:</b> ${photo.visibility}</li>
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
						<button type="button" class="btn btn-secondary"> <a href="photo_detail.html?photoId=${photo.photoId}"
								id="blanco">Ver en detalle</a></button>
					</div>
				</div>
				</div>
				</div>
			</div>)
			`);
		// Recuperar datos de usuario con promesa AJAX, mediante AXIOS
		usersAPI.getById(photo.userId)
		.then( users => { 
			card.querySelector(".user-name").innerHTML=`
			<small>${photo.userId}: ${users[0].firstName} ${users[0].lastName}
					  
			</small>`;
		})
		.catch ( error => (messageRenderer.showErrorAsAlert(error)) );
	
		return card;
		},
	//########################
	asComment: function (comment) {
		let html = `
		<div class="card" id="ajustate">
		<div class="card">
		<li class="list-group-item"><strong>${comment.username}: </strong>${comment.text}
		</div>
		</div>
	`;


		let photoDetails3 = parseHTML (html);


		
		return photoDetails3;
		},
		//########################
		asCategory: function (category) {
			let html = `

			
			<li class="list-group-item"><a href="category.html?categoryId=${category.categoryId}"  id="negro">${category.name}</a> 

		`;
	

			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
			//########################
		asRate: function (rate) {
			let html = `
			<div class="card" id="ajustate">
			<div class="card">
			<li class="list-group-item"><strong>${rate.title}: </strong>${rate.media}
			</div>
			</div>
		`;
	
	
			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
		//########################
		asMostFollows: function (follow) {
			let html = `
			<div class="col-md-12 mb-3">
			<div class="card">
			<div class="card">
                    	<div class="col-md text-center">
                         
							<strong><a href="user.html?userid=${follow.siguiendoId}" ${follow.username}: id="negro">${follow.username}</a>:</strong><p>Seguidores totales: ${follow.NumSeguidores}</p>
                          
                    	</div>
				
			</div>
			</div>
			</div>
		`;
	
	
			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
	//########################

	asMostCategory: function (categoria) {
		let html = `
		<div class="card">
		<div class="color">
		<div class="card">
					<div class="col-md text-center">
					 
						<strong><a href="category.html?categoryId=${categoria.categoryId}" : id="negro">${categoria.name}</a>:</strong><p>Numero de fotos: ${categoria.NumFotos}</p>
					  
						</div>
				
						</div>
						</div>
						</div>
	`;


		let photoDetails3 = parseHTML (html);


		
		return photoDetails3;
		},
//########################
	asMostValorations: function (valoration) {
			let html = `
			<div class="card">
			<div class="color">
			<div class="card">
                    	<div class="col-md text-center">
                         
							<strong><a href="photo_detail.html?photoId=${valoration.PhotoId}" ${valoration.username}: id="negro">${valoration.title}</a>:</strong><p>Valoracion media: ${valoration.media}</p>
                          
                    	</div>
				
			</div>
			</div>
			</div>
		`;
	
	
			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
	//########################
	asMostCommentarys: function (valoration) {
		let html = `
		<div class="card">
		<div class="color">
		<div class="card">
					<div class="col-md text-center">
					 
						<strong><a href="photo_detail.html?photoId=${valoration.photoId}" : id="negro">${valoration.title}</a>:</strong><p>Numero de commentarios: ${valoration.Total}</p>
					  
					</div>
			
		</div>
		</div>
		</div>
	`;


		let photoDetails3 = parseHTML (html);


		
		return photoDetails3;
		},
//########################
	asMostValorationsFecha: function (valoration) {
		let html = `
		<div class="col-md-12 mb-3">
		<div class="card">
		<div class="card">
					<div class="col-md text-center">
					 
						<strong><a href="photo_detail.html?photoId=${valoration.PhotoId}" ${valoration.username}: id="negro">${valoration.title}</a>:</strong><p>Valoracion media: ${valoration.media}</p>
					  
					</div>
			
		</div>
		</div>
		</div>
	`;


		let photoDetails3 = parseHTML (html);


		
		return photoDetails3;
		},
		//########################
		asAvgValoration: function (comment) {
			let html = `
			<div id="ajustate">
			
			<h4>${comment.media}/5</h4>
			
			</div>
		`;
	
	
			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
		//########################
		asCategoryInput: function () {
			let html = `
			<select class="custom-select">
			<option selected> Elegir categoria </option>
			</select>
		`;
			categorysAPI.getAll()
			.then(categorias => {
				console.log(categorias)
				for(let categoria of categorias){
					let espacio = document.querySelector(".custom-select");
					let codigo = parseHTML(`
					<option>${categoria.name}</option>`);
					espacio.appendChild(codigo);
				}
			})
	
			let photoDetails3 = parseHTML (html);
	
	
			
			return photoDetails3;
			},
			//########################
			try: function (comment) {
				let html = `
				<div id="ajustate">
				
				<p>Aun no se han enviado valoraciones</p>
				
				</div>
			`;
		
		
				let photoDetails3 = parseHTML (html);
		
		
				
				return photoDetails3;
				},
				//########################
	asTopValoraciones: function (valoration) {
		let html = `
		<ol>
		<li><a href="/category.html">${valoration.title}</a> </li>
		<li><a href="/category.html">Perros</a> </li>
		<li><a href="/category.html">Paisajes</a> </li>
		<li><a href="/category.html">Selfies</a> </li>
		<li><a href="/category.html">Futbol</a> </li>
	</ol>
	`;


		let photoDetails3 = parseHTML (html);


		
		return photoDetails3;
		},

};
export { photoRenderer };