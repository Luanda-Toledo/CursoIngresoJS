

/* 
EJERCICIO 3
Se ingresa una tiempo indeterminada de ventas realizadas por las distintas sucursales de un Mayorista,
validando los datos ingresaBS.AS.:
nombreDelCliente del Cliente
Sucursal ("CABA" , "BS.AS.", "INTERIOR")
Tipo ("GRANDE" , "MEDIANA" , "PEQUEÑA")
Monto de ventas en pesos

Informar:
a) El nombreDelCliente del cliente al que se le vendio menos
b) El promedio del monto de venta de las sucursales del tipo PEQUEÑA
c) La sucursal con mas tiempo de ventas 

*/
// Plantilla generica basica

function mostrar() {

	// Declaramos variables
	var nombreDelCliente;
	var sucursal;
	var montoEnPesos;
	var tamaño;
	var montoEnPesos;
	var respuestaContinuar;
	var cantidadDeIngresados;
	var menosVendido;
	var nombreMenosVendido;
	var contadorVentasPequeñas;
	var promedioVentasPequeñas;
	var contadorCaba;
	var contadorBuenosAires;
	var contadorInterior;
	var sucursalMayorCantidadDeVentas;
	var flag;
	var mensaje;

	// Asignamos valores
	flag = true;
	cantidadDeIngresados = 0;
	menosVendido = 0;
	contadorVentasPequeñas = 0;
	contadorBuenosAires = 0;
	contadorCaba = 0;
	contadorInterior = 0;

	do {

		// VALIDAMOS nombreDelCliente
		do {
			nombreDelCliente = prompt("Ingrese el nombreDelCliente: ");
			nombreDelCliente = nombreDelCliente.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreDelCliente));

		// VALIDAMOS Sucursal ("CABA" , "BS.AS.", "INTERIOR")
		do {
			sucursal = prompt("Ingrese una de las opciones: CABA, BS.AS. o INTERIOR ");
			sucursal = sucursal.toUpperCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(sucursal) || (sucursal != "CABA" && sucursal != "BS.AS." && sucursal != "INTERIOR"));

		// Tipo ("GRANDE" , "MEDIANA" , "PEQUEÑA")
		do {
			tamaño = prompt("Ingrese una de las opciones: GRANDE, MEDIANA o PEQUEñA ");
			tamaño = tamaño.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
			// Que no sea un numero y que sea solo una de las tres opciones dadas
		} while (!isNaN(tamaño) || (tamaño != "grande" && tamaño != "mediana" && tamaño != "pequeña"));

		// VALIDAMOS montoEnPesos
		do {
			// Solicitamos los valores al usuario atraves de promp
			montoEnPesos = prompt("Ingrese el montoo en pesos: ");
			montoEnPesos = parseInt(montoEnPesos);

		} while (isNaN(montoEnPesos) || montoEnPesos < 0);

		switch (sucursal) {
			case "CABA":
				contadorCaba++;
				break;
			case "BS.AS.":
				contadorBuenosAires++;
				break;

			default:

				contadorInterior++;
				break;
		}

		switch (sucursal) {
			case "pequeña":
				contadorVentasPequeñas++;
				break;
			case "mediano":

				break;

			default:
				break;
		}

		// A
		if (flag == true) {

			menosVendido = montoEnPesos;
			nombreMenosVendido = nombreDelCliente;
			flag == false;

		} else {

			if (menosVendido > montoEnPesos) {

				menosVendido = menosVendido;
				nombreMenosVendido = nombreMenosVendido;

			} else {

				menosVendido = montoEnPesos;
				nombreMenosVendido = nombreDelCliente;

			}

		}

		cantidadDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');

	// a) El nombreDelCliente del cliente al que se le vendio menos -> nombreMenosVendido

	// b) El promedio del monto de venta de las sucursales del tipo PEQUEÑA
	promedioVentasPequeñas = cantidadDeIngresados / contadorVentasPequeñas;

	// c) La sucursal con mas cantidad de ventas 
	if (contadorCaba > contadorBuenosAires && contadorCaba > contadorInterior) {
		sucursalMayorCantidadDeVentas = "CABA";

	}
	else {
		if (contadorBuenosAires > contadorInterior) {
			sucursalMayorCantidadDeVentas = "BS. AS.";

		}
		else {
			sucursalMayorCantidadDeVentas = "INTERIOR";

		}
	}




	// MOSTRAR RESPUESTAS

	// 1 
	mensaje = "\n El: " + A;

	// 2
	mensaje += "\n El: " + A;

	// 3
	mensaje += "\n El total de: " + A;
	mensaje += "\n El total de: " + A;

	// 4
	mensaje += "\n El : " + A;

	// 5
	mensaje += "\n El" + A;


	alert(mensaje);


}
