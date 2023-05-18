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
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}


eligeColor();

