/*
3- COPA PISTÓN:

Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:

-Nombre
-Edad (mayor a 18)
-Nacionalidad del piloto (argentino, ingles, frances, brasilero, estadounidense)
-Cantidad de carreras ganadas (no pueden ser números negativos)
-Número del vehículo (no puede ser un número negativo)

Se necesita saber :

A) Nacionalidad del piloto más joven.
B) Cantidad de vehículos con número par.
C) Nombre del piloto con menos victorias y el número de auto impar.
D) Cantidad de pilotos mayores de 25 años con número de vehículo impar.
E) Nombre del piloto más joven con más victorias.
F) Nacionalidad del piloto más veterano con menos victorias.
G) Promedio de edad de los pilotos que tiene un vehículo con número par. 
*/
function mostrar() {

	var nombreIngresado;
	var edad;
	var nacionalidad;
	var cantidadCarrerasGanadas;
	var numeroVehiculo;
	var edadPilotoMasJoven;
	var nacionalidadPilotoMasJoven;
	var contadorVehiculosNumerosPares;
	var nombrePilotoConMenosVictoriasVehiculoImpar;
	var menorCantidadVictoriasVehiculosImpar;
	var flagPrimerIngreso;
	var contadorVehiculosImparesPilotoMayor;
	var nombrePilotoMasJovenMayorVictorias;
	var mayorCantidadDeVictoriasPilotoMasJoven;
	var edadPilotoMasJovenConMasVictorias;
	var pilotoMenorCantidadCarrerasGanadasMasViejo;
	var nacionalidadPilotoMasViejoMasPerdedor;
	var edadPilotoMasViejoMasPerdedor;
	var acumuladorEdadPilotoConVehiculoPar;
	var contadorEdadPilotosConVehiculoPar;
	var promedioDeEdadPilotosVehiculosPares;
	var numeroVehiculoImparConMenosVictorias;

	contadorVehiculosNumerosPares = 0;
	contadorVehiculosImparesPilotoMayor = 0;
	contadorEdadPilotosConVehiculoPar = 0;
	acumuladorEdadPilotoConVehiculoPar = 0;
	flagPrimerIngreso = true;

	for (var i = 0; i < 10; i++) {

		do {
			nombreIngresado = prompt("Ingrese el nombre: ");
			nombreIngresado = nombreIngresado.toLowerCase();

		} while (!isNaN(nombreIngresado));

		do {

			edad = prompt("Ingrese la edad: ");
			edad = parseInt(edad);

		} while (isNaN(edad) || (edad < 17 || edad > 110));

		do {
			nacionalidad = prompt("Ingrese una de las opciones para su nacionalidad: argentino, ingles, frances, brasilero o estadounidense ");
			nacionalidad = nacionalidad.toLowerCase();

		} while (!isNaN(nacionalidad) || (nacionalidad != "argentino" && nacionalidad != "ingles" && nacionalidad != "frances" && nacionalidad != "brasilero" && nacionalidad != "estadounidense"));

		do {

			cantidadCarrerasGanadas = prompt("Ingrese el importe de cantidad de carreras ganadas: ");
			cantidadCarrerasGanadas = parseInt(cantidadCarrerasGanadas);

		} while (isNaN(cantidadCarrerasGanadas) || cantidadCarrerasGanadas < 0);

		do {

			numeroVehiculo = prompt("Ingrese numero de vehiculo: ");
			numeroVehiculo = parseInt(numeroVehiculo);

		} while (isNaN(numeroVehiculo) || numeroVehiculo < 0);

		// A) Nacionalidad del piloto más joven.
		// E) Nombre del piloto más joven con más victorias.
		// F) Nacionalidad del piloto más veterano con menos victorias.
		if (i == 0) {

			edadPilotoMasJoven = edad;
			nacionalidadPilotoMasJoven = nacionalidad;
			nombrePilotoMasJovenMayorVictorias = nombreIngresado;
			mayorCantidadDeVictoriasPilotoMasJoven = cantidadCarrerasGanadas;
			edadPilotoMasJovenConMasVictorias = edad;
			pilotoMenorCantidadCarrerasGanadasMasViejo = cantidadCarrerasGanadas;
			nacionalidadPilotoMasViejoMasPerdedor = nacionalidad;
			edadPilotoMasViejoMasPerdedor = edad;

		} else {

			if (edadPilotoMasJoven > edad) { // A

				edadPilotoMasJoven = edad;
				nacionalidadPilotoMasJoven = nacionalidad;

			}

			if (mayorCantidadDeVictoriasPilotoMasJoven < cantidadCarrerasGanadas && edadPilotoMasJovenConMasVictorias > edad) {// B

				nombrePilotoMasJovenMayorVictorias = nombre;
				mayorCantidadDeVictoriasPilotoMasJoven = cantidadCarrerasGanadas;

			}

			if (edadPilotoMasViejoMasPerdedor < edad && pilotoMenorCantidadCarrerasGanadasMasViejo > cantidadCarrerasGanadas) { // C

				pilotoMenorCantidadCarrerasGanadasMasViejo = cantidadCarrerasGanadas;
				nacionalidadPilotoMasViejoMasPerdedor = nacionalidad;
				edadPilotoMasViejoMasPerdedor = edad;

			}
		}


		if (numeroVehiculo % 2 == 0) { // B) Cantidad de vehículos con número par.

			contadorVehiculosNumerosPares++;
			acumuladorEdadPilotoConVehiculoPar += edad;
			contadorEdadPilotosConVehiculoPar++;

		} else {

			if (edad > 25) {

				contadorVehiculosImparesPilotoMayor++;

			}

			// C) Nombre del piloto con menos victorias y el número de auto impar.
			// D) Cantidad de pilotos mayores de 25 años con número de vehículo impar.

			if (flagPrimerIngreso == true) {

				nombrePilotoConMenosVictoriasVehiculoImpar = nombreIngresado;
				menorCantidadVictoriasVehiculosImpar = cantidadCarrerasGanadas;
				numeroVehiculoImparConMenosVictorias = numeroVehiculo;
				flagPrimerIngreso = false;

			} else {

				if (cantidadCarrerasGanadas < menorCantidadVictoriasVehiculosImpar) {

					nombrePilotoConMenosVictoriasVehiculoImpar = nombreIngresado;
					menorCantidadVictoriasVehiculosImpar = cantidadCarrerasGanadas;
					numeroVehiculoImparConMenosVictorias = numeroVehiculo;

				}
			}
		}
	}

	// G) Promedio de edad de los pilotos que tiene un vehículo con número par. 
	if (contadorEdadPilotosConVehiculoPar != 0) {
		
		promedioDeEdadPilotosVehiculosPares = acumuladorEdadPilotoConVehiculoPar / contadorVehiculosNumerosPares;

	} else {

		promedioDeEdadPilotosVehiculosPares = 0;
		
	}


	// Mostramos el mensaje
	document.write("\n Nacionalidad del piloto mas joven: " + nacionalidadPilotoMasJoven);

	document.write("\n Cantidad de vehiculos con numero impar: " + acumuladorEdadPilotoConVehiculoPar);

	document.write("\n Nombre del piloto con menos victorias y el número de auto impar: " + nombrePilotoConMenosVictoriasVehiculoImpar + numeroVehiculoImparConMenosVictorias);

	document.write("\n Cantidad de pilotos mayores de 25 años con número de vehículo impar: " + contadorVehiculosImparesPilotoMayor);

	document.write("\n Nombre del piloto más joven con más victorias: " + nombrePilotoMasJovenMayorVictorias);

	document.write("\n Nacionalidad del piloto más veterano con menos victorias: " + nacionalidadPilotoMasViejoMasPerdedor);

	document.write("\n Promedio de edad de los pilotos que tiene un vehículo con número par: " + promedioDeEdadPilotosVehiculosPares);

}