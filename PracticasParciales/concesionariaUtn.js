/*

2- Una concesionaria necesita realizar un sistema de ventas online, donde se calculará las preferencias de 11 clientes.

	Los datos necesarios son:
	-Nombre del cliente: (no puede contener números)
	-Edad: (validar que sea mayor a 18 años)
	-Tipo de vehículo:  (Auto - Camioneta - PickUp)
	-Preferencia: (Nafta – Diesel - GNC)
	-Precio por vehículo.
	-Cantidad de vehículos.

	Calcular y mostrar en un document.write:
	A- A la compra más grande realizada, se le otorgará un 15% de descuento, mostrando el nombre del cliente y su edad.
	B- La mínima cantidad de vehículos vendidos.
	C- Cuántas camionetas a GNC se compraron.
	D- El cliente más viejo que compró una PickUp Nafta.
	E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.

*/
function mostrar() {

	// DECLARAMOS VARIABLES
	var nombreDelCliente;
	var edadDelCliente;
	var tipoDeVehiculo;
	var preferenciaDelVehiculo;
	var precioDelVehiculo;
	var cantidadDeVehiculos;
	var totalAPagar;
	var primerIngreso;
	var compraMasGrandeIngresada;
	var nombreCompraMasGrandeRealizada;
	var edadCompraMasGrandeRealizada;
	var minimaCantidadDeVehiculosVendidos;
	var acummuladorCamionetasGNC;
	var banderaClienteMasViejo;
	var nombreDelClienteMasViejoPickup;
	var edadDelClienteMasViejoPickup;
	var contadorAuto;
	var contadorCamioneta;
	var contadorPickup;
	var porcentajeCamioneta;
	var porcentajeAutos;
	var porcentajePickup;
	

	// ASIGNAMOS VALORES
	acummuladorCamionetasGNC = 0;
	contadorAuto = 0;
	contadorCamioneta = 0;
	contadorPickup = 0;
	banderaClienteMasViejo = true;
	primerIngreso = true;


	// Como nos pide una cantidad exacta de ingresos utilizamos un for
	for (var i = 0; i < 11; i++) {

		// VALIDACIONES
		do {
			nombreDelCliente = prompt("Ingrese el nombre: ");
			nombreDelCliente = nombreDelCliente.toLowerCase();

		} while (!isNaN(nombreDelCliente));

		do {

			edadDelCliente = prompt("Ingrese la edadDelCliente: ");
			edadDelCliente = parseInt(edadDelCliente);

		} while (isNaN(edadDelCliente) || (edadDelCliente < 17 || edadDelCliente > 110));

		do {
			tipoDeVehiculo = prompt("Ingrese una de las opciones: auto, camioneta o pickup ");
			tipoDeVehiculo = tipoDeVehiculo.toLowerCase();

		} while (!isNaN(tipoDeVehiculo) || (tipoDeVehiculo != "auto" && tipoDeVehiculo != "camioneta" && tipoDeVehiculo != "pickup"));

		do {
			preferenciaDelVehiculo = prompt("Ingrese una de las opciones: nafta, diesel o gnc ");
			preferenciaDelVehiculo = preferenciaDelVehiculo.toLowerCase();

		} while (!isNaN(preferenciaDelVehiculo) || (preferenciaDelVehiculo != "nafta" && preferenciaDelVehiculo != "diesel" && preferenciaDelVehiculo != "gnc"));

		do {

			precioDelVehiculo = prompt("Ingrese el importe: ");
			precioDelVehiculo = parseInt(precioDelVehiculo);

		} while (isNaN(precioDelVehiculo) || precioDelVehiculo < 0);

		do {

			cantidadDeVehiculos = prompt("Ingrese la cantidad: ");
			cantidadDeVehiculos = parseInt(cantidadDeVehiculos);

		} while (isNaN(cantidadDeVehiculos) || cantidadDeVehiculos < 0);

		// FIN DE VALIDACIONES

		// A
		totalAPagar = cantidadDeVehiculos * precioDelVehiculo;

		if (primerIngreso == true) {

			compraMasGrandeIngresada = totalAPagar;
			nombreCompraMasGrandeRealizada = nombreDelCliente;
			edadCompraMasGrandeRealizada = edadDelCliente;

			// B
			minimaCantidadDeVehiculosVendidos = cantidadDeVehiculos;

			primerIngreso = false;

		} else {

			if (compraMasGrandeIngresada < totalAPagar) {

				compraMasGrandeIngresada = totalAPagar;
				nombreCompraMasGrandeRealizada = nombreDelCliente;
				edadCompraMasGrandeRealizada = edadDelCliente;

			} else if (minimaCantidadDeVehiculosVendidos > cantidadDeVehiculos) { // B

				minimaCantidadDeVehiculosVendidos = cantidadDeVehiculos;

			}

		}

		switch (tipoDeVehiculo) {
			case "auto":

				contadorAuto++;

				break;

			case "camioneta":

				contadorCamioneta++;

				if (preferenciaDelVehiculo == "gnc") {  // C

					acummuladorCamionetasGNC += cantidadDeVehiculos;

				}

				break;

			case "pickup":

				contadorPickup++;

				if (preferenciaDelVehiculo == "nafta") { // D

					if (banderaClienteMasViejo == true) {

						nombreDelClienteMasViejoPickup = nombreDelCliente;
						edadDelClienteMasViejoPickup = edadDelCliente;
						banderaClienteMasViejo = false;

					} else {

						if (edadDelClienteMasViejoPickup < edadDelCliente) {

							edadCompraMasGrandeRealizada = edadDelCliente;
							nombreDelClienteMasViejoPickup = nombreDelCliente;

						}

					}

				}

				break;
		}
	}


	// A
	compraMasGrandeIngresada = compraMasGrandeIngresada * 0.15;

	// E
	porcentajeAutos = contadorAuto * 100 / i;
	porcentajeCamioneta = contadorCamioneta * 100 / i;
	porcentajePickup = contadorPickup * 100 / i;

	// MOSTRAMOS LOS RESULTADOS
	document.write("El descuento de lacompra termino siendo de: " + compraMasGrandeIngresada + 
	". Y el nombre y la edad del cliente es: " + nombreCompraMasGrandeRealizada + edadCompraMasGrandeRealizada);

	document.write("La minima cantidad de vehiculos vedidos: " + minimaCantidadDeVehiculosVendidos);

	document.write("Cuantas camionetas a gnc se compraron: " + acummuladorCamionetasGNC);

	document.write("El cliente mas viejo que compro una Puckup nafta : " + edadDelClienteMasViejoPickup + nombreDelClienteMasViejoPickup);

	document.write("El porcentaje de clientes que compraron Auto, Camioneta y Pickup: " + porcentajeAutos + porcentajeCamioneta + porcentajePickup);



}