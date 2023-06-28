/*
Luanda Gisel Toledo Viera
Division k

Enunciado 3

Una librería desea corroborar quién es el mejor vendedor para poder premiarlo y 
destacarlo como empleado del mes. Para ello se deben ingresar los siguientes datos 
dependiendo de las cantidades de venta que hubo en el día.

-Carnet de vendedor: (AA203 -A3246 -A8898)
-Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
-El total vendido
-Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)


Una vez finalizado la carga total del día calcular:


1)Cual fue el género más vendido. 
2)Cuál fue el vendedor que tiene el menor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3020 le corresponde una comisión del %12, 
sino del %6. Mostrar la venta mas barata. -> se refiere al total vendido
*/
function mostrar() {

	// Declaramos variables
	var carnetDelVendedor;
	var generoVendido;
	var totalVendido;
	var estrellasOtorgadasPorElCliente;
	var respuestaContinuar;
	var contadorDeIngresados;
	var contadorTerror;
	var contadorInfantil;
	var contadorAutoayuda;
	var contadorMezclado;
	var generoMasVendido;
	var carnetVendedorMenorPromedioDeEstrellas;
	var promedioEstrellasAA203;
	var promedioEstrellasA3246;
	var promedioEstrellasA8898;
	var acumuladorEstrellasAA203;
	var acumuladorEstrellasA3246;
	var acumuladorEstrellasA8898;
	var acumuladorTotalDeEstrellas;
	var acumuladorImporteVendedorAA203;
	var acumuladorImporteVendedorA3246;
	var acumuladorImporteVendedorA8898;
	var ventaMasBarata;
	var flag;

	// Asignamos valores
	flag = true;
	contadorDeIngresados = 0;
	contadorAutoayuda = 0;
	contadorInfantil = 0;
	contadorMezclado = 0;
	contadorTerror = 0;
	acumuladorEstrellasA3246 = 0;
	acumuladorEstrellasA8898 = 0;
	acumuladorEstrellasAA203 = 0;
	acumuladorImporteVendedorA3246 = 0;
	acumuladorImporteVendedorA8898 = 0;
	acumuladorImporteVendedorAA203 = 0;



	do {

		// VALIDAMOS CARNET de vendedor: (AA203 -A3246 - A8898)
		do {
			carnetDelVendedor = prompt("Ingrese una de las opciones: AA203, A3246 o A8898 ");
			carnetDelVendedor = carnetDelVendedor.toUpperCase();

		} while (!isNaN(carnetDelVendedor) || (carnetDelVendedor != "AA203" && carnetDelVendedor != "A3246" && carnetDelVendedor != "A8898"));

		// VALIDAMOS Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
		do {
			generoVendido = prompt("Ingrese una de las opciones: terror, infantil, autoayuda o mezclado ");
			generoVendido = generoVendido.toLowerCase();

		} while (!isNaN(generoVendido) || (generoVendido != "terror" && generoVendido != "infantil" && generoVendido != "autoayuda" && generoVendido != "mezclado"));


		// VALIDAMOS -El total vendido (importe)
		do {
			totalVendido = prompt("Ingrese el total vendido: ");
			totalVendido = parseInt(totalVendido);

		} while (isNaN(totalVendido) || totalVendido < 0);

		// VALIDAMOS Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)
		do {

			estrellasOtorgadasPorElCliente = prompt("Ingrese las Estrellas puestas por el cliente: ");
			estrellasOtorgadasPorElCliente = parseInt(estrellasOtorgadasPorElCliente);

		} while (isNaN(estrellasOtorgadasPorElCliente) || (estrellasOtorgadasPorElCliente < 0 || estrellasOtorgadasPorElCliente > 6));

		// B
		acumuladorTotalDeEstrellas += estrellasOtorgadasPorElCliente;

		switch (generoVendido) {

			case "autoayuda":

				contadorAutoayuda++;
				break;

			case "infantil":

				contadorInfantil++;
				break;

			case "mezclado":

				contadorMezclado++;
				break;

			case "terror":

				contadorTerror++;
				break;
		}

		switch (carnetDelVendedor) {

			case "A3246":

				acumuladorEstrellasA3246 += estrellasOtorgadasPorElCliente;
				acumuladorImporteVendedorA3246 += totalVendido;
				break;

			case "A8898":

				acumuladorEstrellasA8898 += estrellasOtorgadasPorElCliente;
				acumuladorImporteVendedorA8898 += totalVendido;
				break;

			case "AA203":

				acumuladorEstrellasAA203 += estrellasOtorgadasPorElCliente;
				acumuladorImporteVendedorAA203 += totalVendido;
				break;
		}

		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');


	// 1)Cual fue el género más vendido. 
	if (contadorAutoayuda > contadorInfantil && contadorAutoayuda > contadorMezclado && contadorAutoayuda > contadorTerror) {

		generoMasVendido = "Autoayuda";

	} else {

		if (contadorInfantil > contadorMezclado && contadorInfantil > contadorTerror) {

			generoMasVendido = "Infantil";

		} else {

			if (contadorMezclado > contadorTerror) {

				generoMasVendido = "Mezclado";

			} else {

				generoMasVendido = "Terror";
			}
		}
	}

	// b) Cuál fue el vendedor que tiene el menor promedio de estrellas.
	promedioEstrellasA3246 = acumuladorTotalDeEstrellas / acumuladorEstrellasA3246;
	promedioEstrellasA8898 = acumuladorTotalDeEstrellas / acumuladorEstrellasA8898;
	promedioEstrellasAA203 = acumuladorTotalDeEstrellas / acumuladorEstrellasAA203;

	if (promedioEstrellasA3246 < promedioEstrellasA8898 && promedioEstrellasA3246 < promedioEstrellasAA203) {

		carnetVendedorMenorPromedioDeEstrellas = "A3246";

	} else {

		if (promedioEstrellasA8898 < promedioEstrellasAA203) {

			carnetVendedorMenorPromedioDeEstrellas = "A8898";

		} else {

			carnetVendedorMenorPromedioDeEstrellas = "AA203";
		}
	}

	//Si el vendedor superó una cantidad total de $3020 le corresponde una comisión del %12, sino del %6.
	if (acumuladorImporteVendedorA3246 > 3020) {
		
		acumuladorImporteVendedorA3246 = acumuladorImporteVendedorA3246 * 12 / 100;

	} else {
		
		acumuladorImporteVendedorA3246 = acumuladorImporteVendedorA3246 * 6 / 100;

	}

	if (acumuladorImporteVendedorA8898 > 3020) {
		
		acumuladorImporteVendedorA8898 = acumuladorImporteVendedorA8898 * 12 / 100;

	} else {
		
		acumuladorImporteVendedorA8898 = acumuladorImporteVendedorA8898 * 6 / 100;

	}

	if (acumuladorImporteVendedorAA203 > 3020) {
		
		acumuladorImporteVendedorAA203 = acumuladorImporteVendedorAA203 * 12 / 100;

	} else {
		
		acumuladorImporteVendedorAA203 = acumuladorImporteVendedorAA203 * 6 / 100;

	}

	if (acumuladorImporteVendedorA3246 < acumuladorImporteVendedorA8898 && acumuladorImporteVendedorA3246 < acumuladorImporteVendedorAA203) {

		ventaMasBarata = acumuladorImporteVendedorA3246;

	} else {

		if (acumuladorImporteVendedorA8898 < acumuladorImporteVendedorAA203) {

			ventaMasBarata = acumuladorImporteVendedorA8898;

		} else {

			ventaMasBarata = acumuladorImporteVendedorAA203;

		}
	}
	

	// MOSTRAR RESPUESTAS
	document.write("\n 1)Cual fue el género más vendido. : " + generoMasVendido);
	document.write("\n 2) Cuál fue el vendedor que tiene el menor promedio de estrellas.: " + carnetVendedorMenorPromedioDeEstrellas);
	document.write("\n 3) Si el vendedor superó una cantidad total de $3020 le corresponde una comisión del %12, sino del %6: " + acumuladorImporteVendedorA3246 + acumuladorImporteVendedorA8898 + acumuladorImporteVendedorAA203);
	document.write("\n Mostrar la venta mas barata.: " + ventaMasBarata);

}