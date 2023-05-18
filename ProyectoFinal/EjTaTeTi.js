var contador = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

function pintar(col, caja) {
  document.getElementById(caja).style.backgroundColor = col;
}

function escribirSimbolo(id) {
	let elem = document.getElementById(id)
	let elemDisplay = document.getElementById('displayInfo')
	if (elem.innerHTML == "" && isGameActive){
		if (contador % 2 == 0) { // Si el contador es par, escribe una X
			elem.innerHTML = '<span class="display-player playerX">x</span>';
			elemDisplay.innerHTML = 'Turno de <span class="display-player playerO">o</span>'
		} else { // Si el contador es impar, escribe una O
			elem.innerHTML = '<span class="display-player playerO">o</span>';
			elemDisplay.innerHTML = 'Turno de <span class="display-player playerX">x</span>'
		}
		contador++;
		switch(id){ //escribimos los valores en el array del tablero
			case 'caja1':
              board[0] = elem.innerHTML;
              break;
			case 'caja2':
              board[1] = elem.innerHTML;
              break;
			case 'caja3':
              board[2] = elem.innerHTML;
              break;
			case 'caja4':
              board[3] = elem.innerHTML;
              break;
			case 'caja5':
              board[4] = elem.innerHTML;
              break;
			case 'caja6':
              board[5] = elem.innerHTML;
              break;
			case 'caja7':
              board[6] = elem.innerHTML;
              break;
			case 'caja8':
              board[7] = elem.innerHTML;
              break;
			case 'caja9':
              board[8] = elem.innerHTML;
              break;
          
		}
	}
	if(contador >= 3 ){ //a partir del tercer turno, alguien puede ganar, así que empezamos las comprobaciones
		FUNCIONBASICA();
	}
}

function resetearTablero() {
  //reseteamos todo el html
  let elem = document.getElementById('caja1');
  elem.innerHTML = '';
  elem = document.getElementById('caja2');
  elem.innerHTML = '';
  elem = document.getElementById('caja3');
  elem.innerHTML = '';
  elem = document.getElementById('caja4');
  elem.innerHTML = '';
  elem = document.getElementById('caja5');
  elem.innerHTML = '';
  elem = document.getElementById('caja6');
  elem.innerHTML = '';
  elem = document.getElementById('caja7');
  elem.innerHTML = '';
  elem = document.getElementById('caja8');
  elem.innerHTML = '';
  elem = document.getElementById('caja9');
  elem.innerHTML = '';
  //reseteamos el contador
  contador = 0;
  //reseteamos el array del tablero
  board = ['', '', '', '', '', '', '', '', ''];
  
  //resetamos el display de turno
  elem = document.getElementById('displayInfo');
  elem.innerHTML = 'Empezamos por el jugador <span class="display-player playerX">x</span>';
  //reactivamos el juego
  isGameActive = true;
}


function FUNCIONBASICA() {
	
	const winningConditions = [ //todas las posibles condiciones de victoria
      [0, 1, 2], //horizontal 1
      [3, 4, 5], //horizontal 2
      [6, 7, 8], //horizontal 3
      [0, 3, 6], //vertical 1
      [1, 4, 7], //vertical 2
      [2, 5, 8], //vertical 3
      [0, 4, 8], //diagonal 1
      [2, 4, 6]  //diagonal 2
	];

  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
	  const winCondition = winningConditions[i]; // array de 3 posiciones de victoria
	  const a = board[winCondition[0]]; // valor en el tablero de la posición de victoria 0
	  const b = board[winCondition[1]]; // valor en el tablero de la posición de victoria 1
	  const c = board[winCondition[2]]; // valor en el tablero de la posición de victoria 2
	  if (a === '' || b === '' || c === '') { // algo en la línea no tiene valor por lo que nadie ha cumplido la condición de victoria y pasamos a comprobar la siguiente
		  continue;
	  }
	  if (a === b && b === c) { // toda la línea tiene el mismo valor, alguien ha ganado
		  roundWon = true;
		  break;
	  }
  }
 
  if (roundWon) { //alguien ha ganado
	elem = document.getElementById('displayInfo')
	if(contador % 2 == 0){ 	//al ser el turno de X y haber ganado alguien, ganó O
		elem.innerHTML = 'Ganador el jugador <span class="display-player playerO">o</span>';
		alert('Ganador el jugador o');
	}else{ 					//al ser el turno de O y haber ganado alguien, ganó X
		elem.innerHTML = 'Ganador el jugador <span class="display-player playerX">x</span>';
		alert('Ganador el jugador x');
	}
	isGameActive = false; // se desactiva el juego
  }else if (!board.includes('')){ //nadie ha ganado y no quedan huecos en el tablero
	elem = document.getElementById('displayInfo');
	elem.innerHTML = 'Empate';
	alert('Empate');	
	isGameActive = false; // se desactiva el juego
  }
  
}
