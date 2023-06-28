
/*
Luanda Gisel Toledo Viera
DIVISION K

Enunciado 1

En una hamburguesería el cajero debe ir cargando los pedidos de los clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad.

Que tipo de hamburguesa (simple, doble o veggie), 
cantidad de hamburguesas. 
La simple vale 125, la doble 185 y la veggie 145.
Esto se debe cargar hasta que el cajero decida.

Al final, se deberá presentar:

A)Cuál fue el tipo de hamburguesa más comprada.

B)Cual fue el promedio de compra por tipo de hamburguesa. -> PRECIO SOBRE LA CANTIDAD

C)El nombre y apellido de la persona que realizó la compra más barata.
*/

function mostrar() {

	// Declaramos variables
	var nombreDelCliente;
	var apellidoDelCliente;
	var edadDelCliente;
	var tipoDeHamburguesa;
	var cantidad;
	var respuestaContinuar;
	var contadorDeIngresados;
	var agregarOtroProducto;
	var precioPorUnidad;
	var importeTotalPorCompra;
	var contadorHamburguesaSimple;
	var contadorHamburguesaDoble;
	var contadorHamburguesaVeggie;
	var tipoDeHamburguesaMasComprada;
	var acumuladorImporteHamburguesaSimple;
	var acumuladorImporteHamburguesaDoble;
	var acumuladorImporteHamburguesaVeggie;
	var promedioHamburguesaSimple;
	var promedioHamburguesaDoble;
	var promedioHamburguesaVeggie;
	var importeTotalDelPedido;
	var flagCompraMasBarata;
	var nombreCompraMasBarata;
	var apellitoCompraMasBarata;
	var importeCompraMasBarata;

	// Asignamos valores
	flagCompraMasBarata = true;
	contadorDeIngresados = 0;
	contadorHamburguesaDoble = 0;
	contadorHamburguesaSimple = 0;
	contadorHamburguesaVeggie = 0;
	acumuladorImporteHamburguesaSimple = 0;
	acumuladorImporteHamburguesaDoble = 0;
	acumuladorImporteHamburguesaVeggie = 0;


	do {

		// VALIDAMOS NOMBRE Del Cliente
		do {
			nombreDelCliente = prompt("Ingrese el nombre Del Cliente: ");
			nombreDelCliente = nombreDelCliente.toLowerCase();

		} while (!isNaN(nombreDelCliente));

		// VALIDAMOS Apelliido Del Cliente
		do {
			apellidoDelCliente = prompt("Ingrese el apellido Del Cliente: ");
			apellidoDelCliente = apellidoDelCliente.toLowerCase();

		} while (!isNaN(apellidoDelCliente));

		// VALIDAMOS EDAD
		do {
			edadDelCliente = prompt("Ingrese la edad Del Cliente: ");
			edadDelCliente = parseInt(edadDelCliente);

		} while (isNaN(edadDelCliente) || (edadDelCliente < 17 || edadDelCliente > 110));

		do {

			// VALIDAMOS tipo de hamburguesa (simple, doble o veggie)
			do {
				tipoDeHamburguesa = prompt("Ingrese una de las opciones: simple, doble o veggie ");
				tipoDeHamburguesa = tipoDeHamburguesa.toLowerCase();

			} while (!isNaN(tipoDeHamburguesa) || (tipoDeHamburguesa != "simple" && tipoDeHamburguesa != "doble" && tipoDeHamburguesa != "veggie"));

			// VALIDAMOS CANTIDAD
			do {

				cantidad = prompt("Ingrese la cantidad: ");
				cantidad = parseInt(cantidad);

			} while (isNaN(cantidad) || cantidad < 0);


			switch (tipoDeHamburguesa) {
				// La simple vale 125, la doble 185 y la veggie 145.
				case "simple":

					contadorHamburguesaSimple++;
					precioPorUnidad = 125;
					importeTotalPorCompra = cantidad * precioPorUnidad;
					acumuladorImporteHamburguesaSimple += importeTotalPorCompra;
					break;

				case "doble":

					contadorHamburguesaDoble++;
					precioPorUnidad = 185;
					importeTotalPorCompra = cantidad * precioPorUnidad;
					acumuladorImporteHamburguesaSimple += importeTotalPorCompra;
					break;

				case "veggie":

					contadorHamburguesaVeggie++
					precioPorUnidad = 145;
					importeTotalPorCompra = cantidad * precioPorUnidad;
					acumuladorImporteHamburguesaSimple += importeTotalPorCompra;
					break;
			}


			agregarOtroProducto = prompt("¿Quiere agregar otro producto?: Responda SI o NO");
			agregarOtroProducto = agregarOtroProducto.toUpperCase();

		} while (agregarOtroProducto == 'SI');

		// C) El nombre y apellido de la persona que realizó la compra más barata.
		importeTotalDelPedido = acumuladorImporteHamburguesaDoble + acumuladorImporteHamburguesaSimple + acumuladorImporteHamburguesaVeggie;
		if (flagCompraMasBarata == true) {

			nombreCompraMasBarata = nombreDelCliente;
			apellitoCompraMasBarata = apellidoDelCliente;
			importeCompraMasBarata = importeTotalDelPedido;
			flagCompraMasBarata = false;

		} else {

			if (importeCompraMasBarata > importeTotalDelPedido) {

				nombreCompraMasBarata = nombreDelCliente;
				apellitoCompraMasBarata = apellidoDelCliente;
				importeCompraMasBarata = importeTotalDelPedido;
			}
		}

		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');

	// A) Cuál fue el tipo de hamburguesa más comprada.
	if (contadorHamburguesaSimple > contadorHamburguesaDoble && contadorHamburguesaSimple > contadorHamburguesaVeggie) {

		tipoDeHamburguesaMasComprada = "Hamburguesa Simple";

	} else {

		if (contadorHamburguesaDoble > contadorHamburguesaVeggie) {

			tipoDeHamburguesaMasComprada = "Hamburguesa Doble";

		} else {

			tipoDeHamburguesaMasComprada = "Hamburguesa Veggie";
		}
	}

	// B) Cual fue el promedio de compra por tipo de hamburguesa. ->PRECIO SOBRE LA CANTIDAD

	if (contadorHamburguesaVeggie > 0) {

		promedioHamburguesaVeggie = acumuladorImporteHamburguesaVeggie / contadorHamburguesaVeggie;

	} else {

		promedioHamburguesaVeggie = 0;
	}

	if (contadorHamburguesaSimple > 0) {

		promedioHamburguesaSimple = acumuladorImporteHamburguesaSimple / contadorHamburguesaSimple;

	} else {

		promedioHamburguesaSimple = 0;
	}

	if (contadorHamburguesaDoble > 0) {

		promedioHamburguesaDoble = acumuladorImporteHamburguesaDoble / contadorHamburguesaDoble;

	} else {

		promedioHamburguesaDoble = 0;
	}


	// MOSTRAR RESPUESTAS
	document.write("\n A) Cuál fue el tipo de hamburguesa más comprada: " + tipoDeHamburguesaMasComprada);
	document.write("\n B) Cual fue el promedio de compra por tipo de hamburguesa: ");
	document.write("\n Hamburguesa Simple: " + promedioHamburguesaSimple);
	document.write("\n Hamburguesa Doble: " + promedioHamburguesaDoble);
	document.write("\n Hamburguesa Veggie: " + promedioHamburguesaVeggie);
	document.write("\n C) El nombre y apellido de la persona que realizó la compra más barata: ");
	document.write("\n Nombre: " + nombreCompraMasBarata);
	document.write("\n Apellido: " + apellitoCompraMasBarata);
	document.write("\n Importe de la compra mas barata: " + importeCompraMasBarata);

}