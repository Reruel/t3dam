'use strict';
// nos ayuda a no dejar pasar ningún error
// este programa solamente define funciones
// que son invocadas solamente desde el html

// defino e inicializo variables globales
var color = 'white';

// trabajamos con arrays
var colorFr = new Array('#adff2f', 'pink', 'lightskyblue', 'gray', 'goldenrod');

var colorFn = [];
colorFn[0] = 'magenta';
colorFn[1] = 'blue';
colorFn[2] = 'black';
colorFn[3] = 'yellow';
colorFn[4] = 'red';

function pinturaInicial() {
    for (let i = 0; i < 5; i++) {
        let identificador="c"+(i+1);
        let elemento = document.getElementById(identificador);
        elemento.style.backgroundColor = colorFn[i];
        elemento.style.color = colorFr[i];
    }
}

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

pinturaInicial();
