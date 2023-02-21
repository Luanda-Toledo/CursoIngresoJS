/* 
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una 
estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene
un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento
del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento 
del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar() {
	// Declaramos las variables
	var estacionIngresada;
	var destino;
	var estadiaBase;
	var descuento;
	var aumento;
	var precioFinal;

	// Asignamos valores
	aumento = 0;
	descuento = 0;
	estadiaBase = 15000;

	// Extraemos el valor atraves del ID
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	// Segun la estacion ingresada...
	switch (estacionIngresada) {

		case "Invierno":

			switch (destino) {

				case "Bariloche":

					aumento = 0.2;
					break;

				case "Mar del plata":

					descuento = 0.2;
					break;

				default: // Cataratas - Cordoba

					descuento = 0.1;
					break;

			}

			break;

		case "Verano":

			switch (destino) {

				case "Bariloche":

					descuento = 0.2;
					break;

				case "Mar del plata":

					aumento = 0.2;
					break;

				default: // Cataratas - Cordoba

					aumento = 0.1;
					break;

			}

			break;

		default: // Si no ingresa ningun case -> primavera / otoño

			switch (destino) {

				case "Cordoba":

					aumento = 0;
					break;
			
				default:

					aumento = 0.1; // Bariloche - Mar del plata - Cataratas
					break;
			}

			break;

	}

	if (aumento != 0) {

		precioFinal = estadiaBase + estadiaBase * aumento;

	} else if (descuento != 0) {

		precioFinal = estadiaBase - estadiaBase * descuento;

	} else {

		precioFinal = estadiaBase;

	}

	alert(`En ${estacionIngresada} la estadia en ${destino}, tiene un valor de $ ${precioFinal}`);

}//FIN DE LA FUNCIÓN