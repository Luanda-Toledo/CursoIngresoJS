/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar() {
	// Declaramos las variables
	var horaIngresada;
	var mensaje;

	// Extraemos el valor atraves del ID
	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);

	// Si la variable hora es ... se muestra el mensaje ...
	switch (horaIngresada) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Ya paso la mañana";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN