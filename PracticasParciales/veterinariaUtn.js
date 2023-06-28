/* 
Luanda Gisel Toledo Viera
Division K


Enunciado 2

En una veterinaria se están realizando censos para evaluar los animales ingresados por día. 
Por este motivo, se le realizará una consulta al menos 6 clientes.

Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR


A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
B- Cuál es el promedio de edad de los PERROS.
C- Cuál es el tipo de mascota más vacunado.
*/
function mostrar() {

	// Declaramos variables
	var edad;
	var tamañoDeLaMascota;
	var sexoDeLaMascota;
	var tipoDeMascota;
	var preguntaPorVacunacion;
	var respuestaContinuar;
	var contadorDeIngresados;
	var flagMascotaMasJoven;
	var tipoMascotaMasJoven;
	var sexoMascotaMasJoven;
	var edadMascotaMasJoven;
	var tamañoMascotaMasJoven;
	var contadorDePerros;
	var acumuladorEdadDePerros;
	var promedioEdadDePerros;
	var contadorVacunasPerros;
	var contadorVacunasGatos;
	var contadorVacunasOtros;
	var tipoDeMascotaMasVacunado;

	// Asignamos valores
	flagMascotaMasJoven = true;
	contadorDeIngresados = 0;
	contadorDePerros = 0;
	acumuladorEdadDePerros = 0;
	contadorVacunasPerros = 0;
	contadorVacunasGatos = 0;
	contadorVacunasOtros = 0;

	do {

		// VALIDAMOS Edad de la mascota. Validar.
		do {
			edad = prompt("Ingrese la edad: ");
			edad = parseInt(edad);

		} while (isNaN(edad) || (edad < 0 || edad > 30));

		// VALIDAMOS Tamaño de la mascota (Chica, Mediana o Grande).
		do {
			tamañoDeLaMascota = prompt("Ingrese una de las opciones para el tamaño: chica, mediana o grande ");
			tamañoDeLaMascota = tamañoDeLaMascota.toLowerCase();

		} while (!isNaN(tamañoDeLaMascota) || (tamañoDeLaMascota != "chica" && tamañoDeLaMascota != "mediana" && tamañoDeLaMascota != "grande"));

		// VALIDAMOS Sexo de la mascota (Hembra o Macho).
		do {
			sexoDeLaMascota = prompt("Ingrese el sexo de la mascota: hembra o macho");
			sexoDeLaMascota = sexoDeLaMascota.toLowerCase();

		} while (!isNaN(sexoDeLaMascota) || (sexoDeLaMascota == "hembra" && sexoDeLaMascota == "macho"));

		// VALIDAMOS Tipo de mascota (Gato, Perro, Otro).
		do {
			tipoDeMascota = prompt("Ingrese una de las opciones para el tipo de mascota: gato, perro o otro ");
			tipoDeMascota = tipoDeMascota.toLowerCase();

		} while (!isNaN(tipoDeMascota) || (tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otro"));

		// Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
		do {
			preguntaPorVacunacion = prompt("Está vacunado? SI/NO: SI o NO");
			preguntaPorVacunacion = preguntaPorVacunacion.toUpperCase();

		} while (!isNaN(preguntaPorVacunacion) || (preguntaPorVacunacion == "SI" && preguntaPorVacunacion == "NO"));

		// A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes.
		if (tamañoDeLaMascota == "mediana" || tamañoDeLaMascota == "grande") {

			if (flagMascotaMasJoven == true) {

				tipoMascotaMasJoven = tipoDeMascota;
				sexoMascotaMasJoven = sexoDeLaMascota;
				edadMascotaMasJoven = edad;
				tamañoMascotaMasJoven = tamañoDeLaMascota;
				flagMascotaMasJoven = false;

			} else {

				if (edadMascotaMasJoven > edad) {

					tipoMascotaMasJoven = tipoDeMascota;
					sexoMascotaMasJoven = sexoDeLaMascota;
					edadMascotaMasJoven = edad;
					tamañoMascotaMasJoven = tamañoDeLaMascota;
				}
			}
		}

		switch (tipoDeMascota) {

			case "perro":

				// B
				contadorDePerros++;
				acumuladorEdadDePerros += edad;

				if (preguntaPorVacunacion == "SI") {

					contadorVacunasPerros++;
				}
				break;

			case "gato":

				if (preguntaPorVacunacion == "SI") {

					contadorVacunasGatos++;
				}
				break;

			case "otro":

				if (contadorVacunasOtros == "SI") {

					contadorVacunasOtros++;
				}
				break;
		}

		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (contadorDeIngresados > 6 || respuestaContinuar == 'SI');


	// B- Cuál es el promedio de edad de los PERROS.
	if (contadorDePerros > 0) {

		promedioEdadDePerros = acumuladorEdadDePerros / contadorDePerros;

	} else {

		promedioEdadDePerros = 0;
	}

	// C- Cuál es el tipo de mascota más vacunado.
	if (contadorVacunasPerros > contadorVacunasGatos && contadorVacunasPerros > contadorVacunasOtros) {

		tipoDeMascotaMasVacunado = "Perros";

	} else {

		if (contadorVacunasGatos > contadorVacunasOtros) {

			tipoDeMascotaMasVacunado = "Gatos";

		} else {

			tipoDeMascotaMasVacunado = "Otros";
		}
	}


	// MOSTRAR RESPUESTAS
	document.write("\n A- Cuál es el tipo, el sexo y la edad de la mascota más joven entre los tamaños medianos o grandes: ");
	document.write("\n Tipo de mascota: " + tipoMascotaMasJoven);
	document.write("\n Sexo de la mascota: " + sexoMascotaMasJoven);
	document.write("\n Edad de la mascota: " + edadMascotaMasJoven);
	document.write("\n Tamaño de la mascota: " + tamañoMascotaMasJoven);
	document.write("\n B- Cuál es el promedio de edad de los PERROS: " + promedioEdadDePerros);
	document.write("\n C- Cuál es el tipo de mascota más vacunado.: " + tipoDeMascotaMasVacunado);

}