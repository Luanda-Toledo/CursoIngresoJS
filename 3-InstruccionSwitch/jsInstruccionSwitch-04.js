/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	
	// Declaramos las variables
	var mesDelAño;
	var mensaje;

	// Extraemos el valor atraves del ID
	mesDelAño = document.getElementById("txtIdMes").value;

	// Si la variable mes del año toma el valor...
	switch (mesDelAño) {
		case "Febrero":
			mensaje = "Si tiene 28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Si tiene 30 días.";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Si tiene 31 días.";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);


}//FIN DE LA FUNCIÓN