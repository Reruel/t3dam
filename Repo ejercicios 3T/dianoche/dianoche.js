// código para manejar el modo dia y noche

/* añadir aquí lo siguiente:
  leer todas las variables guardadas en localStorage
  especialmente la variable --modoInicial

*/

var modo = leerModoActual();
if (modo=="dia") {
    ponerModoDia();    
} else {
    ponerModoNoche();
}


function leerModoActual() {    
    let modo = window.localStorage.getItem("--modoGuardado");
    if (!modo) {
        // devolverá modo DIA si no hay modo guardado
        /* 
        leer el --modoGuardado de nuestro CSS original
                */

        modo=document.documentElement.style.getPropertyValue("--modoGuardado");
        // modo = getComputedStyle(document.documentElement).getPropertyValue('--modoGuardado');


    };
    return modo;
}

function ponerModoDia() {

    // ponemos letra oscura sobre fondo blanco
    let todo=document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("--modoGuardado","dia");

    // ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";

    // mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";
    
}


function ponerModoNoche() {

    // ponemos letra clara sobre fondo oscuro
    let todo=document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("--modoGuardado","noche");

    // mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";

    // ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";
    
}
