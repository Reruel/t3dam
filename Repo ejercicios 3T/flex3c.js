'use strict';
// nos ayuda a no dejar pasar ningún error
// este programa solamente define funciones
// que son invocadas solamente desde el html

// defino e inicializo variables globales
var color = 'white';

// ahora al color lo cogeremos con una función

function obtieneColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);    
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}

function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
