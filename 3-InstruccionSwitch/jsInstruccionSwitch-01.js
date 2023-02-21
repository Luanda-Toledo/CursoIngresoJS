/*
Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiestas!!!." 
*/

function mostrar() {

	// Declaramos las variables
	var mesDelAño;
	var mensaje;

	// Extraemos el valor atraves del ID
	mesDelAño = document.getElementById("txtIdMes").value;

	// Si la variable mes del año toma el valor...
	switch (mesDelAño) {
		case "Enero":
			mensaje = "Que comiences bien el año!!!.";
			break;
		case "Marzo":
			mensaje = "A clases!!!.";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
			break;
		default: // Si no ingresa ningun case
			mensaje = "No se definio el mensaje";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);


}//FIN DE LA FUNCIÓN

// Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. 
// Si la expresión coincide con múltiples entradas, la primera será la seleccionada, 
// incluso si las mayúsculas son tenidas en cuenta.