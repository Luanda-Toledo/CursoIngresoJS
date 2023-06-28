/*

Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio). *
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

10000 precio base de cada pasaje

La empresa tambien nos pide realizar los nombreVendedorritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.


function mostrar() {
	var nombreVendedor;
	var nombreComprador;
	var cantidadPasajes;
	var precioBase;
	var precioPorPasaje;
	var precioFinal;
	var tipoDeAsiento;
	var tipoDeViaje;
	var tipoDeDestino;
	var continua;
	var porcentaje;
	var recaudacionHuesos;
	var recaudacionPepepeposo;
	var recaudacionQuinoto;
	var vendedorConMayorRecaudacion;
	var contadorViajesNacionales;
	var contadorViajesInternacionales;
	var porcentajeInternacional;
	var porcentajeNacional;
	var cantidadTotalDePaquetesVendidos;
	var contadorPaqueteEconomico;
	var contadorPaqueteEjecutivo;
	var contadorPaquetePrimeraClase;
	var promedioEconomica;
	var promedioEjecutivo;
	var promedioPrimeraClase;
	var vendedorConMayorRecaudacionEnPesos;
	var mensaje;

	contadorPaqueteEconomico = 0;
	contadorPaqueteEjecutivo = 0;
	contadorPaquetePrimeraClase = 0;
	contadorViajesInternacionales = 0;
	contadorViajesNacionales = 0;
	recaudacionHuesos = 0;
	recaudacionPepepeposo = 0;
	recaudacionQuinoto = 0;
	precioPorPasaje = 10000;


	do {
		do {
			nombreVendedor = prompt("Identifiquese (Quinoto, Huesos o Pepepeposo)").toLowerCase();
		} while (!isNaN(nombreVendedor) || (nombreVendedor != "quinoto" && nombreVendedor != "pepepesoso" && nombreVendedor != "huesos"));

		do {
			nombreComprador = prompt("Ingrese el nombre del comprador").toLowerCase();
		} while (!isNaN(nombreComprador));

		do {
			cantidadPasajes = prompt("Ingrese la cantidad de pasajes a vender (minimo 1 - maximo 5)");
			cantidadPasajes = parseInt(cantidadPasajes);
		} while (isNaN(cantidadPasajes) || (cantidadPasajes < 1 || cantidadPasajes > 5));

		do {
			tipoDeAsiento = prompt("Ingrese el tipo de asiento (economica, ejecutiva o primera clase)").toLowerCase();
		} while (!isNaN(tipoDeAsiento) || (tipoDeAsiento != "economica" && tipoDeAsiento != "ejecutiva" && tipoDeAsiento != "primera clase"));
		do {
			tipoDeViaje = prompt("Ingrese el tipo de viaje (directo o con escala)");
		} while (!isNaN(tipoDeViaje) || (tipoDeViaje != "directo" && tipoDeViaje != "con escala"));
		do {
			tipoDeDestino = prompt("Ingrese el tipo de destino (nacional o internacional)");
		} while (!isNaN(tipoDeDestino) || (tipoDeDestino != "internacional" && tipoDeDestino != "nacional"));

		//Punto E
		precioBase = precioPorPasaje * cantidadPasajes;
		if (tipoDeAsiento == "ejecutiva") {
			porcentaje = 1.20;
		}
		else {
			if (tipoDeAsiento == "primera clase") {
				porcentaje = 1.35;
			}
			else {
				porcentaje = 1;
			}
		}
		precioFinal = precioBase * porcentaje;
		alert("El precio del paquete es de: " + precioFinal);
		//Punto A
		switch (nombreVendedor) {
			case "huesos":
				recaudacionHuesos = recaudacionHuesos + precioFinal;
				break;
			case "pepepesoso":
				recaudacionPepepeposo = recaudacionPepepeposo + precioFinal;
				break;
			case "quinoto":
				recaudacionQuinoto = recaudacionQuinoto + precioFinal;
				break;
		}
		//Punto C y D
		if (tipoDeViaje == "Internacional") {
			contadorViajesInternacionales++;
		}
		else {
			contadorViajesNacionales++;
		}
		//Punto F
		switch (tipoDeAsiento) {
			case "economica":
				contadorPaqueteEconomico++;
				break;
			case "ejecutiva":
				contadorPaqueteEjecutivo++;
				break;
			case "primera clase":
				contadorPaquetePrimeraClase++;
				break;
		}

		cantidadTotalDePaquetesVendidos++;
		continua = confirm("Vender otro pasaje");
	} while (continua);


	//Punto B
	if (recaudacionPepepeposo > recaudacionHuesos && recaudacionPepepeposo > recaudacionQuinoto) {
		vendedorConMayorRecaudacion = "Pepepeposo";
		vendedorConMayorRecaudacionEnPesos = recaudacionPepepeposo;
	}
	else {
		if (recaudacionHuesos > recaudacionQuinoto) {
			vendedorConMayorRecaudacion = "Huesos";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
		else {
			vendedorConMayorRecaudacion = "Quinoto";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
	}

	//Punto C
	porcentajeInternacional = contadorViajesInternacionales / cantidadTotalDePaquetesVendidos * 100;
	porcentajeNacional = contadorViajesNacionales / cantidadTotalDePaquetesVendidos * 100;

	//Punto F
	promedioEconomica = cantidadTotalDePaquetesVendidos / contadorPaqueteEconomico;
	promedioEjecutivo = cantidadTotalDePaquetesVendidos / contadorPaqueteEjecutivo;
	promedioPrimeraClase = cantidadTotalDePaquetesVendidos / contadorPaquetePrimeraClase;

	mensaje = "\nEl total recaudado por cada vendedor";
	mensaje += "\nQuinoto vendio un total de: $" + recaudacionQuinoto;
	mensaje += "\nPepeposo vendio un total de: $" + recaudacionPepepeposo;
	mensaje += "\nHuesos vendio un total de: $" + recaudacionHuesos;
	mensaje += "\nEl vendedor que mas recaudo fue: " + vendedorConMayorRecaudacion + " con un total de: $" + vendedorConMayorRecaudacionEnPesos;
	mensaje += "\nEl porcentaje de paquetes de viajes internaciones es: %" + porcentajeInternacional;
	mensaje += "\nEl porcentaje de paquetes de viajes nacionales es: %" + porcentajeNacional;
	mensaje += "\nLos promedios de ventas segun el tipo de pasaje es:";
	mensaje += "\nPromedio de paquetes clase economica: " + promedioEconomica;
	mensaje += "\nPromedio de paquetes clase ejecutiva: " + promedioEjecutivo;
	mensaje += "\nPromedio de paquetes primera clase: " + promedioPrimeraClase;

	alert(mensaje);
}




*/