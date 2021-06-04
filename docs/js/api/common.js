/*
	C.Arévalo
	common.js.  Base de la API Rest y cabecera para peticiones con autorización
	Marzo/2021
*/
'use strict';

import { sessionManager } from '../utils/session.js';

const BASE_URL = "/api/v1";

const requestOptions = {
    headers: { Token: sessionManager.getToken() },
};

export { BASE_URL, requestOptions };