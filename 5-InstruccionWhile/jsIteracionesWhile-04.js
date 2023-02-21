/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {

	// Declaro Variables
	var numeroIngresado;

	// Le asignamos el valor que ingrese el usuario
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	// Parseamos e valor ingresado
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9) {

		// Le asignamos el valor que ingrese el usuario
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");

		// Parseamos e valor ingresado
		numeroIngresado = parseInt(numeroIngresado);

	}

	// Mostrar el valor en el cuadro de texto
	document.getElementById("txtIdNumero").value = numeroIngresado;

	/* 
		while( !(numeroIngresado > 0 && numeroIngresado < 10) )
	*/

}//FIN DE LA FUNCIÓN