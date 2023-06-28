/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

//Declaro variables globales
var respuesta;
var resultadoOperacion;
var numeroAleatorioUno;
var numeroAleatorioDos;
var operador;

function comenzar() { // Generamos los aletorios y los mostramos

    // Declaro variables locales
    var rango;
    var numeroMaximo;
    var numeroMinimo;

    // Asignamos valores del rango
    numeroMaximo = 10;
    numeroMinimo = 1;

    // Calculamos el rango
    rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

    // Generamos dos numero aleatorios y los redondeamos
    numeroAleatorioUno = Math.round(Math.random() * rango);
    numeroAleatorioDos = Math.round(Math.random() * rango);

    // Elegimos el operador aleatoriamente
    switch (numeroAleatorioUno) {
        case 1:
        case 2:
            operador = "Suma";
            break;
        case 3:
        case 4:
            operador = "Resta";
            break;
        case 1:
        case 2:
            operador = "Division";
            break;

        default:
            operador = "Multiplicacion";
            break;
    }

    // Mostramos los valores aleatorios en los cuadros de texto
    document.getElementById("txtIdPrimerNumero").value = numeroAleatorioUno;
    document.getElementById("txtIdSegundoNumero").value = numeroAleatorioDos;
    document.getElementById("txtIdOperador").value = operador;

}//FIN DE LA FUNCIÓN

function Responder() { // Resolvemos operacion y comparamos resultados

    // Resolvemos la operacion segun el caso
    switch (operador) {
        case "Suma":
            resultadoOperacion = numeroAleatorioUno + numeroAleatorioDos;
            break;
        case "Resta":
            resultadoOperacion = numeroAleatorioUno - numeroAleatorioDos;
            break;
        case "Division":
            resultadoOperacion = numeroAleatorioUno / numeroAleatorioDos;
            break;
        default:
            resultadoOperacion = numeroAleatorioUno * numeroAleatorioDos;
            break;
    }

    // Extraemos la respuesta del usuario
    respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta = parseInt(respuesta);

    // Comparamos el resultado con la respuesta del usuario
    if (respuesta == resultadoOperacion) {
        
        alert(`La respuesta ingresada: ${respuesta}, es correcta!!`);

    } else {

        alert(`La respuesta ingresada: ${respuesta}, es incorrecta.`);

    }



}//FIN DE LA FUNCIÓN
