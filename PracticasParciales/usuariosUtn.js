
//Ejercicio de usuarios
function mostrar() {

	// Declaramos variables
	var nombreIngresado;
	var tipoDeUsuario;
	var cantidadDeDescargas;
	var respuestaContinuar;
	var cantidadDeIngresados;
	var edadVIP;
	var usuarioMasJoven;
	var flag;
	var acumuladorDescargas;
	var contadorUsuariosRegistrados;
	var promedioRegistrados;
	var mensaje;

	// Asignamos valores
	flag = true;
	cantidadDeIngresados = 0;
	acumulador1 = 0;
	edadVIP = 0;
	contadorUsuariosRegistrados = 0;


	do {

		// VALIDAMOS nombreIngresado
		do {
			nombreIngresado = prompt("Ingrese el nombreIngresado: ");
			nombreIngresado = nombreIngresado.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreIngresado));

		//VALIDAMOS EDAD
		do {

			edadIngresada = prompt("Ingrese la edadIngresada: ");
			edadIngresada = parseInt(edadIngresada);

			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(edadIngresada) || (edadIngresada < 17 || edadIngresada > 110));

		// VALIDAMOS TIPOS 
		do {
			tipoDeUsuario = prompt("Ingrese una de las opciones: REGISTRADO o VIP ");
			tipoDeUsuario = tipoDeUsuario.toUpperCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(tipoDeUsuario) || (tipoDeUsuario != "REGISTRADO" && tipoDeUsuario != "VIP"));

		// VALIDAMOS CANTIDADES
		do {
			// Solicitamos los valores al usuario atraves de promp
			cantidadDeDescargas = prompt("Ingrese la cantidad: ");
			cantidadDeDescargas = parseInt(cantidadDeDescargas);

		} while (isNaN(cantidadDeDescargas) || cantidadDeDescargas < 0);

		switch (tipoDeUsuario) {
			case "REGISTRADO":
				contadorUsuariosRegistrados++;
				break;

			default:
				break;
		}


		//a) El nombreIngresado del usuario de tipo "VIP" mas joven
		if (tipoDeUsuario == "VIP") {

			if (edadVIP > edadIngresada) {

				usuarioMasJoven = usuarioMasJoven;
				edadVIP = edadIngresada;

			} else {

				edadVIP = edadIngresada;
				usuarioMasJoven = nombreIngresado;
			}

		} 

		//b) La cantidad total de descargas al dia
		if (flag == true) {
			acumuladorDescargas = cantidadDeDescargas;
			flag = false;
		} else {
			acumuladorDescargas = acumuladorDescargas + cantidadDeDescargas;
		}

		cantidadDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');


	// c) Promedio total de descargas de los usuarios del tipo "REGISTRADO".
	promedioRegistrados = cantidadDeIngresados / contadorUsuariosRegistrados;




	// MOSTRAR RESPUESTAS

	// 1   El nombreIngresado del usuario de tipo "VIP" mas joven
	mensaje = "\n El nombre del usuario VIP mas Joven: " + usuarioMasJoven;

	// 2 La cantidad total de descargas al dia
	mensaje += "\n Cantidad total de descargas al dia: " + acumuladorDescargas;

	// 3 Promedio total de descargas de los usuarios del tipo "REGISTRADO".
	mensaje += "\n El promedio total de descargas del tipo REGISTRADO: " + promedioRegistrados;


	document.write(`<p> ${mensaje} </p>`);


}

/*
A) NOMBRE DEL USUARIO DE TIPO VIP MAS JOVEN
B) LA CANTIDAD TOTAL DE DESCARGAS DEL DIA
C) PROMEDIO TOTAL DE DESCARGAS DE LOS USUARIOS DEL TIPO REGISRADOS
*/