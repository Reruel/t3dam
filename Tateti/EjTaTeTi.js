function pintar(col,caja)
{
    document.getElementById(caja).style.backgroundColor=col;
}

let contador = 0;
    function escribirSimbolo() {
      if (contador % 2 == 0) { // Si el contador es par, escribe una x
        document.write('x');
      } else { // Si el contador es impar, escribe una o
        document.write('o');
      }
      contador++;
    } 

    
// Creamos el tablero
var tablero = [  ["", "", ""],
                 ["", "", ""],
                 ["", "", ""]
];

// Creamos los jugadores
var jugador1 = {
    simbolo: "+",
    nombre: "Jugador 1"
  };
  var jugador2 = {
    simbolo: "o",
    nombre: "Jugador 2"
  };

// Alternar turnos
var primerJugador = jugador1;

// Función para marcar una casilla
function marcarCasilla(caja) {
  // Comprobar si la casilla está vacía
  if (tablero[fila][columna] === "") {
    // Marcar la casilla con el símbolo del jugador actual
    tablero[fila][columna] = primerJugador.simbolo;
    
    // Comprobar si el jugador actual ha ganado el juego
    if (comprobarVictoria(primerJugador)) {
      alert(primerJugador.nombre + " ha ganado!");
      // Permitir al usuario reiniciar el juego
      reset();
    } else {
      // Cambiar al siguiente jugador
      primerJugador = (primerJugador === jugador1) ? jugador2 : jugador1;
    }
  }
}

// Función para comprobar si un jugador ha ganado el juego
function comprobarJugador(jugador) {
    // Comprobar las combinaciones ganadoras posibles
    if (tablero[0][0] === jugador.simbolo && tablero[0][1] === jugador.simbolo && tablero[0][2] === jugador.simbolo) {
      return true;
    } else if (tablero[1][0] === jugador.simbolo && tablero[1][1] === jugador.simbolo && tablero[1][2] === jugador.simbolo) {
      return true;
    } else if (tablero[2][0] === jugador.simbolo && tablero[2][1] === jugador.simbolo && tablero[2][2] === jugador.simbolo) {
      return true;
    } else if (tablero[0][0] === jugador.simbolo && tablero[1][0] === jugador.simbolo && tablero[2][0] === jugador.simbolo) {
      return true;
    }
}