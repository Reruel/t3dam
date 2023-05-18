'use strict';
// nos ayuda a no dejar pasar ningún error
// opcion 1: fabricamos el selector

// defino variables globales
var color = 'white';

// pedimos solamente el color
function eligeColor() {
    color = prompt("Diga de qué color quiere el saludo (rojo,azul,amarillo)", "");
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black'; //lo pongo en negro para saber que es un color erróneo
            break;
    }
}

function saludar(identificador) {
    id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

function saludarc1() {
    let cuadro = document.getElementById("c1");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

function saludarc2() {
    let cuadro = document.getElementById("c2");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

function saludarc3() {
    let cuadro = document.getElementById("c3");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

function saludarc4() {
    let cuadro = document.getElementById("c4");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

function saludarc5() {
    let cuadro = document.getElementById("c5");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

eligeColor();

