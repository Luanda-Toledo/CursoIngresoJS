/* 
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
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
		case "Mar del plata":
			mensaje = "Hace calor en este destino";
			break;
		default: // Si no ingresa ningun case
			mensaje = "Hace frio en este destino";
			break;
	}

	// Mostramos el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN