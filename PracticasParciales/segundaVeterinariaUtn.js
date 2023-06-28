/*
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar
 hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:

a) El mas pesados de los galgos.
b) El importe total a pagar, y  con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c) Promedio de peso entre cada raza de perros ingresada
d) Nombre, raza y edad del perro más viejo ingresado

*/
function mostrar() {

	// Declaramos variables
	var nombre;
	var edad;
	var raza;
	var peso;
	var precioConsulta;
	var respuestaContinuar;
	var contadorDeIngresados;
	var flagGalgoMasPesado;
	var pesoGalgoMasPesado;
	var importeTotal;
	var acumuladorImportesDeConsulta;
	var acumuladorPesoGalgo;
	var acumuladorPesoSharpei;
	var acumuladorPesoPastor;
	var contadorGalgos;
	var contadorSharpei;
	var contadorPastor;
	var promedioPesoGalgos;
	var promedioPesoSharpei;
	var promedioPesoPastor;
	var nombrePerroMasViejo;
	var razaPerroMasViejo;
	var edadPerroMasViejo;
	var flagPerroMasViejo;

	// Asignamos valores
	flagGalgoMasPesado = true;
	flagPerroMasViejo = true;
	contadorDeIngresados = 0;
	acumuladorImportesDeConsulta = 0;
	acumuladorPesoGalgo = 0;
	acumuladorPesoPastor = 0;
	acumuladorPesoSharpei = 0;
	contadorGalgos = 0;
	contadorSharpei = 0;
	contadorPastor = 0;


	do {

		// VALIDAMOS raza: (validar "sharpei", "galgo", "pastor").
		do {
			raza = prompt("Ingrese una de las opciones para la raza: sharpei, galgo o pastor ");
			raza = raza.toLowerCase();

		} while (!isNaN(raza) || (raza != "sharpei" && raza != "galgo" && raza != "pastor"));

		// VALIDAMOS NOMBRE
		do {
			nombre = prompt("Ingrese el nombre: ");
			nombre = nombre.toLowerCase();

		} while (!isNaN(nombre));

		// VALIDAMOS EDAD
		do {
			edad = prompt("Ingrese la edad: ");
			edad = parseInt(edad);

		} while (isNaN(edad) || (edad < 0 || edad > 26));

		// VALIDAMOS PESO
		do {
			peso = prompt("Ingrese la peso: ");
			peso = parseFloat(peso);

		} while (isNaN(peso) || peso < 0);

		// VALIDAMOS precio de consulta (desde 500 hasta 1500).
		do {

			precioConsulta = prompt("Ingrese el precio de la consulta: ");
			precioConsulta = parseInt(precioConsulta);

		} while (isNaN(precioConsulta) || (precioConsulta < 500 || precioConsulta > 1500));

		// B
		acumuladorImportesDeConsulta += precioConsulta;

		// a) El mas pesados de los galgos.
		switch (raza) {

			case "galgo":

				if (flagGalgoMasPesado == true) {

					pesoGalgoMasPesado = peso;
					flagGalgoMasPesado = false;

				} else {

					if (pesoGalgoMasPesado < peso) {

						pesoGalgoMasPesado = peso;
					}
				}

				contadorGalgos++;
				acumuladorPesoGalgo += peso;

				break;

			case "pastor":

				contadorPastor++;
				acumuladorPesoPastor += peso;
				break;

			case "sharpei":

				contadorSharpei++;
				acumuladorPesoSharpei += peso;
				break;
		}

		// d) Nombre, raza y edad del perro más viejo ingresado
		if (flagPerroMasViejo == true) {

			nombrePerroMasViejo = nombre;
			razaPerroMasViejo = raza;
			edadPerroMasViejo = edad;
			flagPerroMasViejo = false;

		} else {

			if (edadPerroMasViejo < edad) {

				nombrePerroMasViejo = nombre;
				razaPerroMasViejo = raza;
				edadPerroMasViejo = edad;
			}
		}

		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');

	// b) El importe total a pagar, y  con descuento (solo si corresponde)
	// Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	// Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
	if (contadorDeIngresados > 1) {

		importeTotal = acumuladorImportesDeConsulta * 0.05;

	} else if (contadorDeIngresados > 3) {

		importeTotal = acumuladorImportesDeConsulta * 0.10;

	} else {

		importeTotal = acumuladorImportesDeConsulta;
	}

	// c) Promedio de peso entre cada raza de perros ingresada
	promedioPesoGalgos = acumuladorPesoGalgo / contadorGalgos;
	promedioPesoPastor = acumuladorPesoPastor / contadorPastor;
	promedioPesoSharpei = acumuladorPesoSharpei / contadorSharpei;



	// MOSTRAR RESPUESTAS
	document.write("\n a) El mas pesados de los galgos: " + pesoGalgoMasPesado);
	document.write("\n b) El importe total a pagar: " + importeTotal);
	document.write("\n c) Promedio de peso entre cada raza de perros ingresada: " + promedioPesoGalgos +
		promedioPesoPastor + promedioPesoSharpei);
	document.write("\n d) Nombre, raza y edad del perro más viejo ingresado: " + nombrePerroMasViejo +
		razaPerroMasViejo + edadPerroMasViejo);

}