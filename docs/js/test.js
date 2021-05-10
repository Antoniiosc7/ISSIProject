"use strict";

import { messageRenderer } from "/js/renderers/messages.js";

function main() {
    addHandlerForm();
}

function addHandlerForm() {
    let form = document.getElementById("test-form");
    form.onsubmit = validateForm;
}
    
function validateForm(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let errors = [];

    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let password1 = formData.get("password1");
    let password2 = formData.get("password2");
    
    if (firstName.length < 3) {
        errors.push("The first name must have at least 3 characters");
    }

    if (lastName.length < 3) {
        errors.push("The lastname must have at least 3 characters");
    }

    if (password1 !== password2) {
        errors.push("The passwords must match");
    }

    if (errors.length > 0){

    } else {

    }
}

document.addEventListener("DOMContentLoaded", main);