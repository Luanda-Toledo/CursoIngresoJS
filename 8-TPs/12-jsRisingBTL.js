/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	// Declaracion de variables
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;

	// VALIDAR EDAD
	do {
		// Solicitamos los valores al usuario atraves de promp
		edadIngresada = prompt("Edad, entre 18 y 90 años inclusive.");
		edadIngresada = parseInt(edadIngresada);

		// !(edad mayor a 17 o menor a 91)
	} while (!(edadIngresada < 17 || edadIngresada > 91));

	// VALIDAR SEXO
	do {
		// Solicitamos los valores al usuario atraves de promp
		sexoIngresado = prompt("Sexo, “M” para masculino y “F” para femenino");

		// Si es distinto de F o M se repite
	} while (!(sexoIngresado == "F" || sexoIngresado == "M"));

	// VALIDAR ESTADO CIVIL
	do {
		// Solicitamos los valores al usuario atraves de promp
		estadoCivilIngresado = prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);

		// !(mayor a 0 o menor a 5)
	} while (!(estadoCivilIngresado < 0 || estadoCivilIngresado > 5));

	// VALIDAR SUELDO BRUTO
	do {
		// Solicitamos los valores al usuario atraves de promp
		sueldoBrutoIngresado = prompt("Sueldo bruto, no menor a 8000.");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

		// si sueldo bruto es menor que 8000 se repite
	} while (sueldoBrutoIngresado < 8000);

	// VALIDAR LEGAJO
	do {
		// Solicitamos los valores al usuario atraves de promp
		legajoIngresado = prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
		legajoIngresado = parseInt(legajoIngresado);

	} while (isNaN(legajoIngresado) == true && (legajoIngresado < 1000 || legajoIngresado > 9999));

	// VALIDAR NACIONALIDAD
	do {
		// Solicitamos los valores al usuario atraves de promp
		nacionalidadIngresada = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

		// Si nacionalidad es distinto de A, E o N entonces se repite
	} while (!(nacionalidadIngresada == "A" || nacionalidadIngresada == "E" || nacionalidadIngresada == "N"));

	// Una vez que los datos sean validos, vamos a buscar la opcion elegida

	// SEXO SELECCIONADO
	if (sexoIngresado == "F") {
		sexoIngresado = "Femenino";
	} else {
		sexoIngresado = "Masculino";
	}

	// ESTADO CIVIL SELECCIONADO
	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		default:
			estadoCivilIngresado = "Viudo";
			break;
	}

	// NACIONALIDAD SELECCIONADA
	switch (nacionalidadIngresada) {
		case "A":
			nacionalidadIngresada = "Argentino";
			break;
		case "E":
			nacionalidadIngresada = "Extranjero";
			break;
		default:
			nacionalidadIngresada = "Nacionalizado";
			break;
	}

	// Mostramos los valores que ingreso el usuario
	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
	document.getElementById("txtIdLegajo").value = legajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;


}
