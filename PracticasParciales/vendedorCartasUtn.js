/*
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.

Se pide informar por document.write:

A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.

B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.

C) El promedio de precio de las cartas de por tipo.
*/

function mostrar() {

	// Declaramos variables
	var nombreDeLaCarta;
	var tipoDeCarta;
	var rarezaDeLaCarta;
	var precioIngresado;
	var respuestaContinuar;
	var contadorDeIngresados;
	var flagCartaTrampraMasCara;
	var nombreCartaTrampaMasCara;
	var rarezaCartaTrampraMasCara;
	var importeCartaTrampraMasCara;
	var contadorMagicaUltraRara;
	var contadorMonstruoUltraRara;
	var acumuladorImporteMagicas;
	var acumuladorImportesMonstruo;
	var acumuladorImportesTrampa;
	var contadorCartasMonstruo;
	var contadorCartasMagicas;
	var contadorCartasTrampa;
	var promedioCartasMonstruo;
	var promedioCartasMagicas;
	var promedioCartasTrampa;

	// Asignamos valores
	flagCartaTrampraMasCara = true;
	contadorDeIngresados = 0;
	contadorMonstruoUltraRara = 0;
	contadorMagicaUltraRara = 0;
	acumuladorImportesTrampa = 0;
	acumuladorImportesMonstruo = 0;
	acumuladorImporteMagicas = 0;
	contadorCartasMagicas = 0;
	contadorCartasMonstruo = 0;
	contadorCartasTrampa = 0;

	do {

		// VALIDAMOS NOMBRE De La Carta
		do {
			nombreDeLaCarta = prompt("Ingrese el Nombre De LaCarta: ");
			nombreDeLaCarta = nombreDeLaCarta.toLowerCase();

		} while (!isNaN(nombreDeLaCarta));

		// VALIDAMOS Tipo de carta: Validar "monstruo", "magica", "trampa".
		do {
			tipoDeCarta = prompt("Ingrese una de las opciones: monstruo, magica o trampa ");
			tipoDeCarta = tipoDeCarta.toLowerCase();

		} while (!isNaN(tipoDeCarta) || (tipoDeCarta != "monstruo" && tipoDeCarta != "magica" && tipoDeCarta != "trampa"));

		// VALIDAMOS Rareza: Validar "rara", "super rara", "ultra rara".
		do {
			rarezaDeLaCarta = prompt("Ingrese una de las opciones: rara, super rara o ultra rara ");
			rarezaDeLaCarta = rarezaDeLaCarta.toLowerCase();

		} while (!isNaN(rarezaDeLaCarta) || (rarezaDeLaCarta != "rara" && rarezaDeLaCarta != "super rara" && rarezaDeLaCarta != "ultra rara"));

		// VALIDAMOS PRECIO INGRESADO que no sea 0 o negativo.
		do {

			precioIngresado = prompt("Ingrese el importe: ");
			precioIngresado = parseInt(precioIngresado);

		} while (isNaN(precioIngresado) || (precioIngresado < 0 || precioIngresado != 0));


		// C) 
		switch (tipoDeCarta) {

			// B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
			case "monstruo":

				if (rarezaDeLaCarta == "ultra rara") {
					contadorMonstruoUltraRara++;
				}

				contadorCartasMonstruo++;
				acumuladorImportesMonstruo += precioIngresado;

				break;

			case "magica":

				if (rarezaDeLaCarta == "ultra rara") {
					contadorMagicaUltraRara++;
				}

				contadorCartasMagicas++;
				acumuladorImporteMagicas += precioIngresado;

				break;

			case "trampa":

				// A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.
				if (flagCartaTrampraMasCara == true) {

					nombreCartaTrampaMasCara = nombreDeLaCarta;
					rarezaCartaTrampraMasCara = rarezaDeLaCarta;
					importeCartaTrampraMasCara = precioIngresado;
					flagCartaTrampraMasCara = false;

				} else {

					if (importeCartaTrampraMasCara < precioIngresado) {

						nombreCartaTrampaMasCara = nombreDeLaCarta;
						rarezaCartaTrampraMasCara = rarezaDeLaCarta;
						importeCartaTrampraMasCara = precioIngresado;
					}

				}

				contadorCartasTrampa++;
				acumuladorImportesTrampa += precioIngresado;

				break;
		}

		contadorDeIngresados++;

		respuestaContinuar = prompt("¿Quiere seguir ingresando?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');

	// C) El promedio de precio de las cartas de por tipo
	promedioCartasMagicas = acumuladorImporteMagicas / contadorCartasMagicas;
	promedioCartasMonstruo = acumuladorImportesMonstruo / contadorCartasMonstruo;
	promedioCartasTrampa = acumuladorImportesTrampa  / contadorCartasTrampa;



	// MOSTRAR RESPUESTAS
	document.write("\n A) El nombre y rareza  de la carta tipo trampa con mayor precio: " + nombreCartaTrampaMasCara + rarezaCartaTrampraMasCara);
	document.write("\n B) Cuantas cartas de rareza ultra rara y de tipo magica o monstruo fueron vendidas: " + contadorMonstruoUltraRara + contadorMagicaUltraRara);
	document.write("\n C) El promedio de precio de las cartas de por tipo: " + promedioCartasMagicas + promedioCartasMonstruo + promedioCartasTrampa);


}