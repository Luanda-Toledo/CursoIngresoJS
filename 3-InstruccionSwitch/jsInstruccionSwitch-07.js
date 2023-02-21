/*
Al selecionar un destino , indicar el punto cardinal de nuestro 
pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	// Declaramos las variables
	var destinoIngresado;
	var mensaje;

	// Extraemos el valor atraves del ID
	destinoIngresado = document.getElementById("txtIdDestino").value;

	// Si la variable destino es ... se muestra el mensaje ...
	switch (destinoIngresado) {
		case "Cataratas":
			mensaje = "Norte";
			break;
		case "Mar del plata":
			mensaje = "Este";
			break;
		case "Ushuaia":
			mensaje = "Sur";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Oeste";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN