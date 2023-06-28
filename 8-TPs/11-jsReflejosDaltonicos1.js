/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar. Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

// Declaro variables globales
var colorSecreto;
var tiempoInicio;
var numeroAleatorio;

// Generar 6 numeros aleatorios uno por cada color
function comenzar() {

    // Declaro variables locales
    var rango;
    var numeroMaximo;
    var numeroMinimo;

    // Asignamos valores del rango
    numeroMaximo = 6;
    numeroMinimo = 1;

    // Calculamos el rango
    rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

    // Generamos un numero aleatorio y lo redondeamos
    numeroAleatorio = Math.round(Math.random() * rango);

    // Cada numero equivale a un color
    switch (numeroAleatorio) {
        case 1:
            colorSecreto = "azul";
            break;
        case 2:
            colorSecreto = "amarillo";
            break;
        case 3:
            colorSecreto = "marron";
            break;
        case 4:
            colorSecreto = "verde";
            break;
        case 5:
            colorSecreto = "celeste";
            break;
        default:
            colorSecreto = "rojo";
            break;
    }

    // Mostrarle este valor al usuario
    document.getElementById("txtIdColorElegido").value = colorSecreto;

}//FIN DE LA FUNCIÓN

// Comparar el resultado ingresado por el usuario y mostrar el tiempo
function Responder(colorParametro) {

    // Comparar resultados
    if (colorParametro == colorSecreto) {
        alert("Su respuesta es correcta!");
    } else {
        alert("Su respuesta es incorrecta, vuelve a intentarlo.");
    }

    // Cronometro


}//FIN DE LA FUNCIÓN
