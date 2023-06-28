// Plantilla con while
function mostrar() {

	// Declaramos variables
	var nombre;
	var edad;
	var tipoDe;
	var cantidad;
	var precioIngresado;
	var respuestaContinuar;
	var contadorDeIngresados;
	var flag;

	// Asignamos valores
	flag = true;
	contadorDeIngresados = 0;


	do {

		// VALIDAMOS NOMBRE
		do {
			nombre = prompt("Ingrese el nombre: ");
			nombre = nombre.toLowerCase();

		} while (!isNaN(nombre));

		// VALIDAMOS EDAD
		do {
			edad = prompt("Ingrese la edad: ");
			edad = parseInt(edad);

		} while (isNaN(edad) || (edad < 17 || edad > 110));

		// VALIDAMOS TIPOS 
		do {
			tipoDe = prompt("Ingrese una de las opciones: UNO, DOS o TRES ");
			tipoDe = tipoDe.toLowerCase();

		} while (!isNaN(tipoDe) || (tipoDe != "UNO" && tipoDe != "DOS" && tipoDe != "TRES"));

		// VALIDAMOS CANTIDADES
		do {
			cantidad = prompt("Ingrese la cantidad: ");
			cantidad = parseInt(cantidad);

		} while (isNaN(cantidad) || cantidad < 0);

		// VALIDAMOS PRECIO INGRESADO
		do {

			precioIngresado = prompt("Ingrese el importe: ");
			precioIngresado = parseInt(precioIngresado);

		} while (isNaN(precioIngresado) || (precioIngresado < 0 || precioIngresado > 1));






		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');



	// MOSTRAR RESPUESTAS
	document.write("\n : " + A);
	document.write("\n : " + B);
	document.write("\n : " + C);
	document.write("\n : " + D);
	document.write("\n : " + E);

}

// Plantilla con for
function mostrar() {

	// Declaramos variables
	var nombre;
	var edad;
	var tipoDe;
	var cantidad;
	var precioIngresado;
	var flag;

	// Asignamos valores
	flag = true;


	for (var i = 0; i < 1; i++) {

		// VALIDAMOS NOMBRE
		do {
			nombre = prompt("Ingrese el nombre: ");
			nombre = nombre.toLowerCase();

		} while (!isNaN(nombre));

		// VALIDAMOS EDAD
		do {
			edad = prompt("Ingrese la edad: ");
			edad = parseInt(edad);

		} while (isNaN(edad) || (edad < 17 || edad > 110));

		// VALIDAMOS TIPOS 
		do {
			tipoDe = prompt("Ingrese una de las opciones: UNO, DOS o TRES ");
			tipoDe = tipoDe.toLowerCase();

		} while (!isNaN(tipoDe) || (tipoDe != "UNO" && tipoDe != "DOS" && tipoDe != "TRES"));

		// VALIDAMOS CANTIDADES
		do {
			cantidad = prompt("Ingrese la cantidad: ");
			cantidad = parseInt(cantidad);

		} while (isNaN(cantidad) || cantidad < 0);

		// VALIDAMOS PRECIO INGRESADO
		do {

			precioIngresado = prompt("Ingrese el importe: ");
			precioIngresado = parseInt(precioIngresado);

		} while (isNaN(precioIngresado) || (precioIngresado < 0 || importeIngresado > 1));
	}



	// MOSTRAR RESPUESTAS
	document.write("\n : " + A);
	document.write("\n : " + B);
	document.write("\n : " + C);
	document.write("\n : " + D);
	document.write("\n : " + E);

}