/*
Al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno. 
*/

function mostrar() {
	// Declaramos las variables
	var mesDelAño;
	var mensaje;

	// Extraemos el valor atraves del ID
	mesDelAño = document.getElementById("txtIdMes").value;

	// Si la variable mes del año toma el valor...
	switch (mesDelAño) {
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN