/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

// Declarar variables globales
var eleccionMaquina;
var numero1;
var numero2;
var numero3;
var mensajeEmpate;
var mensajeGano;
var mensajePerdio;

// Asignamos valores
numero1 = "Piedra";
numero2 = "Papel";
numero3 = "Tijera";
mensajeEmpate = "Usted empato contra la maquina. La maquina eligio: ";
mensajeGano = "Usted le gano a la maquina. La maquina eligio: ";
mensajePerdio = "Usted perdio contra la maquina. La maquina eligio: ";

function comenzar() { // Generar el numero RANDOM

    // Deeclaro variables locales
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
            break;
        case "Papel":
            alert(mensajePerdio + eleccionMaquina);
            break;
        default:
            alert(mensajeGano + eleccionMaquina);
            break;
    }

}//FIN DE LA FUNCIÓN

// -> PAPEL le gana a piedra / pierde con tijeras / empata con papel
function papel() {

    switch (eleccionMaquina) {
        case "Piedra":
            alert(mensajeGano + eleccionMaquina);
            break;
        case "Papel":
            alert(mensajeEmpate + eleccionMaquina);
            break;
        default:
            alert(mensajePerdio + eleccionMaquina);
            break;
    }



}//FIN DE LA FUNCIÓN

// -> TIJERA le gana papel / pierde con piedra / empata tijera
function tijera() {

    switch (eleccionMaquina) {
        case "Piedra":
            alert(mensajePerdio + eleccionMaquina);
            break;
        case "Papel":
            alert(mensajeGano + eleccionMaquina);
            break;
        default:
            alert(mensajeEmpate + eleccionMaquina);
            break;
    }

}//FIN DE LA FUNCIÓN


/* 
-> PIEDRA  le gana a tijeras / pierde con papel / empata con piedra

-> PAPEL le gana a piedra / pierde con tijeras / empata con papel

-> TIJERA le gana papel / pierde con piedra / empata tijera


*/