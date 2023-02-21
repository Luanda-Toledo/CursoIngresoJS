/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al
 número secreto  o si “se pasó…”  del número secreto.
*/

// Declaro variables globales
 var numeroSecreto;
 var contadorIntentos;
 var numeroAleatorio;

function comenzar() { //Genero el número RANDOM entre 1 y 100

  // Deeclaro variables locales
  var rango;
  var numeroMaximo;
  var numeroMinimo;

  // Asignamos valore
  numeroMaximo = 100;
  numeroMinimo = 1;

  // Calculamos el rango
  rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

  // Pedimos un numero aleatorio y lo redondeamos
  numeroAleatorio = Math.round(Math.random() * rango);

  console.log(numeroAleatorio);

}

// Le asigno el valor a la variable
contadorIntentos = 0;

function verificar() {

  // Declaramos las variables locales
  var numeroIngresado;

  // Aumentamos el contador cada vz que se llame esta funcion
  contadorIntentos++;

  // Solicitamos un un numero al usuario
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);

  // numeroIngresado mayor que numero secreto
  if (numeroIngresado > numeroAleatorio && numeroIngresado < 100) {

      //Alerta si se paso
      alert("Se paso para llegar al numero secreto");
  
  // NumeroIngresado menor que numeroSecreto y no es cero
  } else if (numeroIngresado < numeroAleatorio && numeroIngresado > 0){
    
    //Alerta si le falta 
    alert("Falta para llegar al numero secreto..");

  } else if (numeroIngresado == numeroAleatorio){

    //Son iguales
    alert(`Usted es un ganador!!! Y en solo ${contadorIntentos}.`);

  } else {

    // Respuesta a errores 
    alert("ERROR, ingrese un numero del 1 al 100!!");

  }
  
  //Mostrar en el cuadro de texto la cantidad de intentos
  document.getElementById("txtIdIntentos").value = contadorIntentos;

}

/*
function comenzar() { //Genero el número RANDOM entre 1 y 100

  var numeroAleatorio;
  var rango;
  var numeroMaximo;
  var numeroMinimo;

  numeroMaximo = 100;
  numeroMinimo = 1;

  // Calculamos el rango
  rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

  // Pedimos un numero aleatorio y lo redondeamos
  numeroAleatorio = Math.round(Math.random() * rango);

  return numeroAleatorio;

}

function verificar() {

  // Declaramos las variables
  var numeroIngresado;
  var contadorIntentos;
  var numeroSecreto;

  // Asignamos valores iniciales
  contadorIntentos = 0;
  numeroSecreto = comenzar();

  do {
    // Solicitamos un un numero al usuario
    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);
    //Vamos sumando la cantidad de intentos
    contadorIntentos++;

    if (numeroIngresado < numeroSecreto) {

      //Alerta si le falta 
      alert("Falta para llegar al numero secreto..");

    } else {

      //Alerta si se paso
      alert("Se paso para llegar al numero secreto");

    }

  } while (numeroSecreto !== numeroIngresado);

  alert(`Usted es un ganador!!! Y en solo ${contadorIntentos}.`);
}

*/