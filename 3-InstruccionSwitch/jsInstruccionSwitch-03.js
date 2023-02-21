/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
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
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Este mes tiene 30 o más días";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN