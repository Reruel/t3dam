function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--white", color.value);
    document.getElementById('mensaje').innerHTML = "APLICADO";
    if (typeof (Storage) !== "undefined") {
        localStorage.colorElegido = color.value;
        localStorage.tamElegido = parseFloat(tamelegido);
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function setupInicial() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.colorElegido) {
            document.documentElement.style.setProperty("--white", localStorage.colorElegido);
        }
        if (localStorage.tamElegido) {
            document.documentElement.style.fontSize = localStorage.tamElegido + "rem";
        }
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function resetAjustes() {
    if (typeof (Storage) !== "undefined") {
        localStorage.clear();        
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function aplicarNombre() {
    if (typeof (Storage) !== "undefined") {
        sessionStorage.nombreUsuario = document.getElementById('name').innerHTML; 
        window.parent.getElementById('idUsuario').innerHTML = sessionStorage.nombreUsuario;         
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}

function setupNombre() {
    if (typeof (Storage) !== "undefined") {
        document.getElementById('idUsuario').innerHTML = sessionStorage.nombreUsuario;       
    } else {
        alert("Sorry, your browser does not support web storage...");
    }
}