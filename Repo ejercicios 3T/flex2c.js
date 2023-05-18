'use strict';
// nos ayuda a no dejar pasar ningún error
// opcion 3: usamos switch

// pedimos el nro de cuadro donde escribir HOLA

var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)", "");
cuadro = parseInt(cuadro);
// cuadro será ahora una variable numérica, supuestamente entre 1 y 5

var estecuadro="";

switch (cuadro) {
    case 1:
        estecuadro = document.getElementById("c1");
        break;
    case 2:
        estecuadro = document.getElementById("c2");
        break;
    case 3:
        estecuadro = document.getElementById("c3");
        break;
    case 4:
        estecuadro = document.getElementById("c4");
        break;
    case 5:
        estecuadro = document.getElementById("c5");
        break;
    default:
        alert ("mal numero has ingresado");
}
if (estecuadro!="") {
    estecuadro.innerHTML = "HOLA";
    estecuadro.style.color="red";
}

alert ("si editas el html, puedes usar 3 js alternativos");

