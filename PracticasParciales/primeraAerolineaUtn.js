/*

-> AEROLINEA


Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
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


-----------------------------------------------------------------------------------------

function mostrar() {

	// Declaramos variables
	var nombreVendedor;
	var nombreComprador;
	var cantidadDePasajes;
	var tipoDeAsiento;
	var respuestaContinuar;
	var precioPaquete;
	var porcentaje;
	var precioFinal;
	var precioBase;
	var precioPorUnidad;
	var tipoDeViaje;
	var destinoDelViaje;
	var acumuladorVendidosPorPepepeposo;
	var acumuladorVendidosPorQuinoto;
	var acumuladorVendidosPorHuesos;
	var vendedorConMayorRecaudacion;
	var vendedorConMayorRecaudacionEnPesos;
	var contadorViajesInternacionales;
	var contadorViajesNacionales;
	var porcentajeDestinoInternacionales;
	var porcentajeDestinoNacionales
	var contadorViajesDirectos;
	var contadorViajesConEscala;
	var cantidadDeIngresados;
	var promedioClaseEconomica;
	var promedioPrimeraClase;
	var promedioEjecutivo;
	var contadorClaseEconomica;
	var contadorPrimeraClase;
	var contadorEjecutivo;
	var mensaje;

	// Asignamos valores
	cantidadDeIngresados = 0;
	precioPorUnidad = 10000;
	acumuladorVendidosPorPepepeposo = 0;
	acumuladorVendidosPorQuinoto = 0;
	acumuladorVendidosPorHuesos = 0;
	contadorViajesInternacionales = 0;
	contadorViajesNacionales = 0;
	contadorViajesConEscala = 0;
	contadorViajesDirectos = 0;
	



	do {

		// Nombre del vendedor (validar los nombres ya mencionados).
		do {
			nombreVendedor = prompt("Ingrese una de las opciones: Pepepeposo, Quinoto o Huesos ");
			nombreVendedor = nombreVendedor.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
			// Que no sea un numero y que sea solo una de las tres opciones dadas
		} while (!isNaN(nombreVendedor) || (nombreVendedor != "Pepepeposo" && nombreVendedor != "Quinoto" && nombreVendedor != "Huesos"));


		// Nombre del comprador (validar que no sea un numero).
		do {
			nombreComprador = prompt("Ingrese el nombre: ");
			nombreComprador = nombreComprador.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreComprador));

		// Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).

		do {

			cantidadDePasajes = prompt("Ingrese la cantidad De Pasajes: ");
			cantidadDePasajes = parseInt(cantidadDePasajes);

			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(cantidadDePasajes) || (cantidadDePasajes < 1 || cantidadDePasajes > 5));


		// Precio total del paquete de viaje (validar el rango posible de precio).
		do {

			precioPaquete = prompt("Ingrese la precio Paquete: ");
			precioPaquete = parseInt(precioPaquete);

			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(precioPaquete) || (precioPaquete < 10000 || precioPaquete > 10000000)); // diez millones


		// Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
		do {
			tipoDeAsiento = prompt("Ingrese una de las opciones: clase economica, clase ejecutiva o primera clase ");
			tipoDeAsiento = tipoDeAsiento.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
			// Que no sea un numero y que sea solo una de las tres opciones dadas
		} while (!isNaN(tipoDeAsiento) || (tipoDeAsiento != "clase economica" && tipoDeAsiento != "clase ejecutiva" && tipoDeAsiento != "primera clase"));

		// los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
		//  los de primera clase tienen un 35% de aumento sobre el precio base del paquete.

		if (tipoDeAsiento == "ejecutiva") {
			// si pongo 0.20 me descuenta 
			// si pongo 1.20 me aumenta
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

		// E
		//   CAJITA =       10.000   *    3
		precioBase = precioPorUnidad * cantidadDePasajes;
		// CAJITA2  =    30000  *  1.35 = 40500
		precioFinal = precioBase * porcentaje;
		//                                           $40.500
		alert("El precio segun el tipo es de: " + precioFinal);

		// Tipo de viaje (validar si el viaje es directo o con escala).
		do {

			tipoDeViaje = prompt("Tipo de viaje: directo o con escala");


		} while (!(tipoDeViaje == "directo" || tipoDeViaje == "con escala"));

		// Tipo de destino (validar si es nacional o internacional).
		do {

			destinoDelViaje = prompt("Destino del viaje: nacional o internacional");


		} while (!(destinoDelViaje == "nacional" || destinoDelViaje == "internacional"));



		// A) El total de pesos recaudados de cada vendedor.
		switch (nombreVendedor) {
			case "pepepeposo":                    
				acumuladorVendidosPorPepepeposo = acumuladorVendidosPorPepepeposo + precioFinal; 
				break;
			case "quinoto":
				acumuladorVendidosPorQuinoto = acumuladorVendidosPorQuinoto + precioFinal;
				break;
			case "huesos":
				acumuladorVendidosPorHuesos = acumuladorVendidosPorHuesos + precioFinal;
				break;
		}

		// C
		if (destinoDelViaje == "nacional") {
			contadorViajesNacionales++; 
		} else {
			contadorViajesInternacionales++;
		}

		// D) Cual es la cantidad de paquetes de viaje vendidos que sean directos y con escala.
		if (tipoDeViaje == "directo") {
			contadorViajesDirectos++; 
		} else {
			contadorViajesConEscala++;  
		}


		// F clase economica, clase ejecutiva o primera clase
		switch (tipoDeAsiento) {
			case "clase economica":
				contadorClaseEconomica++; 
				break;
			case "clase ejecutiva":
				contadorEjecutivo++; 
				break;
			case "primera clase":
				contadorPrimeraClase++; 
				break;
		}
    do{
		cantidadDeIngresados++;

		// -> Preguntamos si quiere seguir cargando mas datos
		respuestaContinuar = prompt("¿Quiere comprar otro Paquete?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');


	// B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.

	if (acumuladorVendidosPorPepepeposo > acumuladorVendidosPorQuinoto && acumuladorVendidosPorPepepeposo > acumuladorVendidosPorHuesos) {
		vendedorConMayorRecaudacion = "Pepepeposo";
		vendedorConMayorRecaudacionEnPesos = acumuladorVendidosPorPepepeposo;
	}
	else {
		if (acumuladorVendidosPorQuinoto > acumuladorVendidosPorHuesos) {
			vendedorConMayorRecaudacion = "Quinoto";
			vendedorConMayorRecaudacionEnPesos = acumuladorVendidosPorQuinoto;
		}
		else {
			vendedorConMayorRecaudacion = "Huesos";
			vendedorConMayorRecaudacionEnPesos = acumuladorVendidosPorHuesos;
		}
	}

	// C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.								
	porcentajeDestinoInternacionales = contadorViajesInternacionales * cantidadDeIngresados / 100;
	porcentajeDestinoNacionales = contadorViajesNacionales *  cantidadDeIngresados / 100;

	// F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
	// cajita economica =            10            /       2    =0.25
	promedioClaseEconomica = cantidadDeIngresados / contadorClaseEconomica;
	promedioPrimeraClase = cantidadDeIngresados / contadorPrimeraClase;
	promedioEjecutivo = cantidadDeIngresados / contadorEjecutivo


	// Mostramos el mensaje
	mensaje = "\n El total de pesos vendidos por cada vendedor..:"; 
	mensaje += "\n  Pepepeposo un total de: $" + acumuladorVendidosPorPepepeposo;
	mensaje += "\n  Quinoto un total de: $" + acumuladorVendidosPorQuinoto;
	mensaje += "\n  Huesos total de: $" + acumuladorVendidosPorHuesos;

	mensaje += "\n El porcentaje de paquetes vendidos nacionales: " + porcentajeDestinoNacionales;
	mensaje += "\n El porcentaje de paquetes vendidos internacionales: " + porcentajeDestinoInternacionales;

	mensaje += "\n El vendedor que mas recaudo: " + vendedorConMayorRecaudacion + " .Un total de $" + vendedorConMayorRecaudacionEnPesos;

	mensaje += "\n Cantidad de pasajes directos vendidos : " + contadorViajesDirectos;
	mensaje += "\n Cantidad de pasajes vendidos con escala : " + contadorViajesConEscala;

	mensaje += "\n Totales promedio segun tipo de asiento:";
	mensaje += "\n Promedio: " + promedioClaseEconomica;
	mensaje += "\n Promedio: " + promedioEjecutivo;
	mensaje += "\n Promedio: " + promedioPrimeraClase;

    alert(mensaje);

*/