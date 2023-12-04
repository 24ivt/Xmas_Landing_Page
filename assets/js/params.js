const campoNombre = document.querySelector('.nom .valor');
const campoNacimiento = document.querySelector('.naixement .valor');
const campoDni = document.querySelector('.identificador p');
// Parametros GET.
const urlParams = new URLSearchParams(window.location.search);

const REGEX_NACIMIENTO = /^(3[01]|[12]\d|\d)\/(1[0-2]|[1-9])\/(19\d\d|20(?:2[0-4]|[01]\d))$/;

// Nombre.
let nombre = urlParams.get('nom');
if (urlParams.get('nom') != null) {
    campoNombre.innerHTML = urlParams.get('nom');
}

// Nacimiento.
let nacimiento = urlParams.get('naixement');
if (nacimiento != null) {
    // Comprovación del formato de la fecha.
    if (REGEX_NACIMIENTO.test(nacimiento)) {
        campoNacimiento.innerHTML = nacimiento;
    } else {
        console.error('La data de naixement no es vàlida.');
    }
}

// DNI.
let dni = urlParams.get('dni');
if (dni != null) {
    campoDni.innerHTML = dni;
}