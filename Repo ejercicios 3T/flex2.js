'use strict';
// nos ayuda a no dejar pasar ningún error
// opcion 1: fabricamos el selector

// pedimos el nro de cuadro donde escribir HOLA

var cuadro = prompt("Diga en qué cuadro quiere saludar (1 a 5)","");
cuadro = parseInt(cuadro);
// cuadro será ahora una variable numérica, supuestamente entre 1 y 5

var selector = "c"+cuadro;

var estecuadro = document.getElementById(selector);
estecuadro.innerHTML="HOLA";
estecuadro.style.color="red";


alert ("si editas el html, puedes usar 3 js alternativos");
