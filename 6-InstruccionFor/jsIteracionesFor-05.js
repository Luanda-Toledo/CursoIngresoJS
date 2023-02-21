/* 
Al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar() {

	//Declaramos la variable
	var numeroIngresado;

	// Bucle for infinito (se detiene cuando se ingrese al if que contiene el break)
	for (; ;) {
		
		// Solicitamos un numero al usuario
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		// Si el numero ingresado es 9 se sale del bucle y deja de solicitar numeros
		if (numeroIngresado == 9) {
			
			break;

		}

		// Mostramos el numero que ingreso el usuario
		alert("Usted ingreso el numero " + numeroIngresado);
	}

}//FIN DE LA FUNCIÓN