const campoNombre = document.querySelector('.nom .valor');
const campoNacimiento = document.querySelector('.naixement .valor');
const campoSexo = document.querySelector('.sexe');
const campoNacionalidad = document.querySelector('.nacionalitat');
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
    // Comprobación del formato de la fecha.
    if (REGEX_NACIMIENTO.test(nacimiento)) {
        campoNacimiento.innerHTML = nacimiento;
    } else {
        console.error('La data de naixement no es vàlida.');
    }
}

// DNI.
let dni = urlParams.get('dni');
if (dni != null) {
    // Comprobación del formato del DNI.
    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
        campoDni.innerHTML = dni;
    } else {
        console.error('El DNI no es vàlid.');
    }
}

// Sexo.
let sexo = urlParams.get('sexe');
if (sexo != null) {
    // Comprobación del valor para el campo del sexo válido.
    if (/^[MF]$/.test(sexo)) {
        campoSexo.innerHTML = sexo;
    } else {
        console.error('El sexe no es vàlid.');
    }
}

// Nacionalidad.
let nacionalidad = urlParams.get('nacionalitat');
if (nacionalidad != null) {
    // Comprobación del valor para el campo de la nacionalidad válida.
    if (nacionalidad.length == 3) {
        campoNacionalidad.innerHTML = nacionalidad;
    } else {
        console.error('La nacionalitat ha de tenir tres lletres.');
    }
}