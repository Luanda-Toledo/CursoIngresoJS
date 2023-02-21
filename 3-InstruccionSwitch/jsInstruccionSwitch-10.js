/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/ 
function mostrar()
{
	// Declaro las variables
	var estacionIngresada;
	var destino;
	var mensajeNoViaja;
	var mensajeViaja;

	// Asignamos valores a los mensajes
	mensajeNoViaja = "No se viaja";
	mensajeViaja = "Si se viaja";

	// Extraemos el valor atraves del ID
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//Segun la estacion del año..
	switch (estacionIngresada) {

		case "Invierno":

			//Segun el lugar de destino..
			switch (destino) {
				case "Bariloche":

					alert(mensajeViaja);
					break;
			
				default: // Mar del plata - Cataratas - Cordoba
					alert(mensajeNoViaja);
					break;
			}

		break;
		case "Verano":

			//Segun el lugar de destino..
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":

					alert(mensajeViaja);
					break;
			
				default: // Mar del plata - Cordoba
					alert(mensajeNoViaja);
					break;
			}

		break;
		case "Primavera":

			//Segun el lugar de destino..
			switch (destino) {
				case "Bariloche":

					alert(mensajeNoViaja);
					break;
			
				default: // Mar del plata - Cataratas - Cordoba
					alert(mensajeViaja);
					break;
			}

		break;
	
		default: // Otoño
			alert(mensajeViaja);
			break;
	}

}//FIN DE LA FUNCIÓN