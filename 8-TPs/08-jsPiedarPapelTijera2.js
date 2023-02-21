/* 
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página
*/

// Declarar variables globales
var eleccionMaquina;
var numero1;
var numero2;
var numero3;
var mensajeEmpate;
var mensajeGano;
var mensajePerdio;
var contadorDeEmpates;
var contadorDeGanadas;
var contadorDePerdidas;

// Asignamos valores
numero1 = "Piedra";
numero2 = "Papel";
numero3 = "Tijera";
mensajeEmpate = "Usted empato contra la maquina. La maquina eligio: ";
mensajeGano = "Usted le gano a la maquina. La maquina eligio: ";
mensajePerdio = "Usted perdio contra la maquina. La maquina eligio: ";
contadorDeEmpates = 0;
contadorDeGanadas = 0;
contadorDePerdidas = 0;

function comenzar() { // Generar el numero RANDOM

	// Declaro variables locales
	var rango;
	var numeroMaximo;
	var numeroMinimo;

	// Asignamos valore
	numeroMaximo = 3;
	numeroMinimo = 1;

	// Calculamos el rango
	rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

	// Pedimos un numero aleatorio y lo redondeamos
	numeroAleatorio = Math.round(Math.random() * rango);

	// Segun el numero la eleccion de la maquina
	switch (numeroAleatorio) {
		case 1:
			eleccionMaquina = numero1; // PIEDRA
			break;
		case 2:
			eleccionMaquina = numero2; // PAPEL
			break;
		default:
			eleccionMaquina = numero3; // TIJERA
			break;
	}

}//FIN DE LA FUNCIÓN


// -> PIEDRA  le gana a tijeras / pierde con papel / empata con piedra
function piedra() { // El caso de que el usuario elija piedra -> NUMERO 1

	switch (eleccionMaquina) {
		case "Piedra":
			alert(mensajeEmpate + eleccionMaquina);
			contadorDeEmpates++;
			break;
		case "Papel":
			alert(mensajePerdio + eleccionMaquina);
			contadorDePerdidas++;
			break;
		default:
			alert(mensajeGano + eleccionMaquina);
			contadorDeGanadas++;
			break;
	}

}//FIN DE LA FUNCIÓN

// -> PAPEL le gana a piedra / pierde con tijeras / empata con papel
function papel() {

	switch (eleccionMaquina) {
		case "Piedra":
			alert(mensajeGano + eleccionMaquina);
			contadorDeGanadas++;
			break;
		case "Papel":
			alert(mensajeEmpate + eleccionMaquina);
			contadorDeEmpates++;
			break;
		default:
			alert(mensajePerdio + eleccionMaquina);
			contadorDePerdidas++;
			break;
	}

}//FIN DE LA FUNCIÓN

// -> TIJERA le gana papel / pierde con piedra / empata tijera
function tijera() {

	switch (eleccionMaquina) {
		case "Piedra":
			alert(mensajePerdio + eleccionMaquina);
			contadorDePerdidas++;
			break;
		case "Papel":
			alert(mensajeGano + eleccionMaquina);
			contadorDeGanadas++;
			break;
		default:
			alert(mensajeEmpate + eleccionMaquina);
			contadorDeEmpates++;
			break;
	}

}//FIN DE LA FUNCIÓN

function mostrarResultado() {

	// Poner los valores en el cuadro
	document.getElementById("txtIdGanadas").value = contadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = contadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = contadorDeEmpates;

}


/* 
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function mostrarResultado() {

}


*/ 