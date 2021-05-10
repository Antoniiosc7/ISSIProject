"use strict";

function main(){
    addHandlerForm();
}

function addHandlerForm(){
    let form = document.getElementById("register-form");
    form.onsubmit = validateForm;

}

function validateForm(event){
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let error = [];

    let firstname = formData.get("firstname");
    let surname = formData.get("surname");
    let password1 = formData.get("InputPassword1");
    let password2 = formData.get("InputPassword2");
    alert(firstname);





 }

document.addEventListener("DOMContentLoaded", main);