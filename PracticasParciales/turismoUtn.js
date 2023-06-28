/*  A)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo



function mostrar() {

	// **********************************************************************************************
	// ************************************* EJERCICIO 1 ********************************************
	// **********************************************************************************************

	// ----------------------- Validacion de datos ingresados por el usuario -------------------------------------------

	// Declaramos las variables
	var nombreDelTitular;
	var lugarDelViaje;
	var temporadaDelViaje;
	var cantidadDeDias;
	var importeDelViaje;
	var alturaPasajero;
	var pesoDelPasajero;
	var sexoPasajero;
	var equipajeDeMano;
	var medioDePago;
	var largoDeLaCadena;
	var ingresarOtroPasajero;
	var contadorDePasajeros; // Total de pasajeros
	var contadorTemporadaBaja;
	var contadorTemporadaAlta;
	var temporadaConMasViajes;
	var acumuladorPesoPasajeros;
	var acumuladorDiasPuertoMadryn;
	var acumuladorDiasVillaGesell;
	var acumuladorDiasCordoba;
	var contadorPasajerosPuertoMadryn;
	var contadorPasajerosVillaGesell;
	var contadorPasajerosCordoba;
	var acumuladorDeImportes;
	var pasajeroMasPesado;
	var pasajeroMasLiviano;
	var nombrePasajeroPesado;
	var nombrePasajeroLiviano;
	var flagPesoMaxMin; //1
	var importeMaximoPuertoMadryn;
	var importeMaximoVillaGesell;
	var importeMaximoCordoba;
	var nombreDestinoImporteMaximo;
	var maximoImporteSegunDestino;
	var flagMaxImporte; //2
	var alturaMujerMasAlta;
	var nombreMujerMasAlta;
	var flagMujerAlta; //3
	var contadorMercadoPago;
	var contadorTarjeta;
	var contadorEfectivo;
	var medioDePagoMasUtilizado;


	// Asignamos valores iniciales a los contadores
	contadorDePasajeros = 1;
	contadorTemporadaBaja = 0;
	contadorTemporadaAlta = 0;
	acumuladorPesoPasajeros = 0;
	acumuladorDeImportes = 0;
	acumuladorDiasPuertoMadryn = 0;
	acumuladorDiasVillaGesell = 0;
	acumuladorDiasCordoba = 0;
	flagPesoMaxMin = 0;
	flagMaxImporte = 0;
	flagMujerAlta = 0;
	importeMaximoPuertoMadryn = 0;
	importeMaximoVillaGesell = 0;
	importeMaximoCordoba = 0;
	contadorMercadoPago = 0;
	contadorTarjeta = 0;
	contadorEfectivo = 0;
	contadorPasajerosPuertoMadryn = 0;
	contadorPasajerosVillaGesell = 0;
	contadorPasajerosCordoba = 0;


	do { // CARGA Y VALIDACION DE DATOS

		// NOMBRE DEL TITULAR
		do {
			// Solicitamos los datos al cliente
			nombreDelTitular = prompt("Ingrese el nombre del titular");

			// Calculamos el largo de la cadena
			// Le tenemos que restar uno por que el .length comienza en 1, y nosotros necesitamos que comience a contar desde cero
			largoDeLaCadena = nombreDelTitular.length - 1;

			// Usamos un if para manejar errores
			// Verificamos que el largo de la cadena, es decir, el nombre tenga mas de dos letras
			if (nombreDelTitular.length < 3) {

				alert("El nombre ngresado debe contener mas de dos letras");
				nombreDelTitular = 1;

				// Con .charAt(0) tomamos el indice 0, es decir la primera letra
				// Luego intentamos parsearlo, si lo parsea es un numero y si no es una cadena de texto
				// Por ultimo verificamos si el resultado de parsearlo es o no un numero
				// En caso de que sea un numero (esta mal) entra en este bloque de codigo
			} else if (isNaN(parseInt(nombreDelTitular.charAt(0))) == false) {

				alert("ERROR, el nombre NO debe tener numeros ni caracteres especiales.");
				nombreDelTitular = 1;

				// Verificamos si el ultimo numero de la cadena es un numero
			} else if (isNaN(parseInt(nombreDelTitular.charAt(largoDeLaCadena))) == false) {

				alert("ERROR, el nombre NO debe tener numeros ni caracteres especiales.");
				nombreDelTitular = 1;

			}

			// isNan false = si es un numero / isNan true = no es un numero
			// Si es nombreDelTitular es un numero entonces se repite
		} while (isNaN(nombreDelTitular) == false);


		// LUGAR DEL VIAJE
		do {
			// Solicitamos el dato al usuario - (\n salto de linea)
			lugarDelViaje = prompt("Elija el lugar de destino indicando el numero: \n 1- Puerto Madryn \n 2- Villa Gessel \n 3- Córdoba");

			// Calculamos el largo de la cadena
			largoDeLaCadena = lugarDelViaje.length - 1;

			// Usamos un if para manejar el error: si el ultimo numero de la cadena no es un numero
			if (lugarDelViaje.length > 1) {

				if (isNaN(parseInt(lugarDelViaje.charAt(largoDeLaCadena))) == true) {

					alert("ERROR, solo utilice los numeros del 1 al 3 para elegir su opcion de destino.");
					lugarDelViaje = "La opcion no existe";
				}
			}

			//Parseamos el valor del lugar del viaje
			lugarDelViaje = parseInt(lugarDelViaje);

			// Usamos un if para manejar el error de rango: Si es mayor que 4 o menor que cero enonces se ejecuta este bloque 
			if (lugarDelViaje > 3 || lugarDelViaje < 1) {

				alert("ERROR, solo utilice los numeros del 1 al 3 para elegir su opcion de destino.");
				lugarDelViaje = "La opcion no existe";

			}

			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(lugarDelViaje) == true);


		// TEMPORADA DEL VIAJE (baja / alta)
		do {

			// Solicitamos el dato al usuario
			temporadaDelViaje = prompt("Elija la temporada en que va a viajar: baja o alta");
			// Pasamos todas las letras a minusculas
			temporadaDelViaje = temporadaDelViaje.toLowerCase();

			// Si la temporada es distinta de baja o alta entonces se repite
		} while (!(temporadaDelViaje == "baja" || temporadaDelViaje == "alta"));


		// CANTIDAD DE DIAS QUE DURARA EL VIAJE
		do {

			// Solicitamos el dato al usuario
			cantidadDeDias = prompt("Ingrese la cantidad de dias que va a durar el viaje");

			// Calculamos el largo de la cadena
			largoDeLaCadena = cantidadDeDias.length - 1;

			// Verificamos si el ultimo numero de la cadena es un numero o no
			if (isNaN(parseInt(cantidadDeDias.charAt(largoDeLaCadena))) == true) {

				alert("ERROR, utilice numeros para indicar la cantidad de dias. \n No utilice letras ni caracteres especiales.");
				cantidadDeDias = "La opcion no existe";
			}

			//Parseamos el valor del lugar del viaje
			cantidadDeDias = parseInt(cantidadDeDias);

			// Usamos un if para manejar el error de rango: Si es mayor que 365 o menor que 1 enonces se ejecuta este bloque 
			if (cantidadDeDias > 365 || cantidadDeDias < 1) {

				alert("ERROR, solo utilice los numeros del 1 al 365 para elegir la cantidad de dias. \n No utilice letras ni caracteres especiales.");
				cantidadDeDias = "La opcion no existe";

			}

			// 2) c) Cantidad de dias acumulados por destino
			if (lugarDelViaje == 1) { // Dias en Puerto Madryn

				acumuladorDiasPuertoMadryn = acumuladorDiasPuertoMadryn + cantidadDeDias;

			} else if (lugarDelViaje) { // Dias en Villa Gesell

				acumuladorDiasVillaGesell = acumuladorDiasVillaGesell + cantidadDeDias;

			} else {
				// Dias en Cordoba
				acumuladorDiasCordoba = acumuladorDiasCordoba + cantidadDeDias;

			}

			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(cantidadDeDias) == true);


		// IMPORTE DEL VIAJE
		do {

			// Solicitamos el dato al usuario
			importeDelViaje = prompt("Ingrese el importe del viaje: valores desde 10.000 hasta 1.000.000");

			// Calculamos el largo de la cadena
			largoDeLaCadena = importeDelViaje.length - 1;

			// Verificamos si el ultimo numero de la cadena es un numero o no
			if (isNaN(parseInt(importeDelViaje.charAt(largoDeLaCadena))) == true) {

				alert("ERROR, solo utilice los numeros del 10.000 al 1.000.000 para especificar el importe. \n No utilice letras ni caracteres especiales.");
				importeDelViaje = "La opcion no existe";
			}

			//Parseamos el valor del lugar del viaje
			importeDelViaje = parseInt(importeDelViaje);

			// Usamos un if para manejar el error de rango: Si es mayor que 1.000.000 o menor que 10.000 enonces se ejecuta este bloque 
			if (importeDelViaje > 1000000 || importeDelViaje < 10000) {

				alert("ERROR, solo utilice los numeros del 10.000 al 1.000.000 para especificar el importe. \n No utilice letras ni caracteres especiales.");
				importeDelViaje = "La opcion no existe";

			}

			// 2) d) Acumulador de importes 
			acumuladorDeImportes = acumuladorDeImportes + importeDelViaje;

			// 2) f) Lugar donde se pago mayor importe

			// Reconocer si estoy pidiendo por 1ra vez -> Inicializo max y min
			if (flagMaxImporte == 0) { // 1ra vez

				// Dependiendo la opcion del destino almaceno el importe

				switch (lugarDelViaje) {
					case 1:

						importeMaximoPuertoMadryn = importeDelViaje;
						break;
					case 2:

						importeMaximoVillaGesell = importeDelViaje;
						break;

					default:

						importeMaximoCordoba = importeDelViaje;
						break;
				}

				// Dentro del if para que no se sobreescriba cada vez que se ejecute el while
				flagMaxImporte++;

			}

			// En caso contrario -> Si tengo un nuevo max o nuevo min los actualizo de ser necesario..
			if (importeMaximoPuertoMadryn < importeDelViaje) { // Pisamos valores iniciales

				importeMaximoPuertoMadryn = importeDelViaje;


			} else if (importeMaximoVillaGesell < importeDelViaje) {

				importeMaximoVillaGesell = importeDelViaje;

			} else if (importeMaximoCordoba < importeDelViaje) {

				importeMaximoCordoba = importeDelViaje;

			}

			// Comparamos los tres valores maximos y sacamos el valor mas grande
			if (importeMaximoPuertoMadryn > importeMaximoVillaGesell) {

				if (importeMaximoPuertoMadryn > importeMaximoCordoba) {

					maximoImporteSegunDestino = importeMaximoPuertoMadryn;
					nombreDestinoImporteMaximo = "Puerto Madryn";

				}

			} else if (importeMaximoCordoba > importeMaximoVillaGesell) {

				if (importeMaximoCordoba > importeMaximoPuertoMadryn) {

					maximoImporteSegunDestino = importeMaximoCordoba;
					nombreDestinoImporteMaximo = "Cordoba";
				}

			} else if (importeMaximoVillaGesell > importeMaximoPuertoMadryn) {

				if (importeMaximoVillaGesell > importeMaximoCordoba) {

					maximoImporteSegunDestino = importeMaximoVillaGesell;
					nombreDestinoImporteMaximo = "Villa Gesell";

				}

			}


			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(importeDelViaje) == true);


		// ALTURA DEL PASAJERO 
		do {

			// Solicitamos el dato al usuario
			alturaPasajero = prompt("Ingrese su altura en metros: ");

			// Calculamos el largo de la cadena
			largoDeLaCadena = alturaPasajero.length - 1;

			// Verificamos si el ultimo numero de la cadena es un numero o no
			if (isNaN(parseInt(alturaPasajero.charAt(largoDeLaCadena))) == true) {

				alert("ERROR, solo utilice los numeros del 0.20 al 2.50 para ingresar su altura en metros. \n No utilice letras ni caracteres especiales.");
				alturaPasajero = "La opcion no existe";
			}

			//Parseamos el valor de la altura
			alturaPasajero = parseFloat(alturaPasajero);
			// Redondeamos a dos cifras decimales
			alturaPasajero.toFixed(2);

			// Usamos un if para manejar el error de rango: Si es mayor que 2.5 o menor que 0.2 enonces se ejecuta este bloque 
			if (alturaPasajero > 2.5 || alturaPasajero < 0.20) {

				alert("ERROR, solo utilice los numeros del 0.20 al 2.50 para ingresar su altura en metros. \n No utilice letras ni caracteres especiales.");
				alturaPasajero = "La opcion no existe";

			}


			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(alturaPasajero) == true);


		// PESO DEL PASAJERO 
		do {

			// Solicitamos el dato al usuario
			pesoDelPasajero = prompt("Ingrese su peso en kilogramos: ");

			// Calculamos el largo de la cadena
			largoDeLaCadena = pesoDelPasajero.length - 1;

			// Verificamos si el ultimo numero de la cadena es un numero o no
			if (isNaN(parseInt(pesoDelPasajero.charAt(largoDeLaCadena))) == true) {

				alert("ERROR, solo utilice numeros para ingresar su peso. \n No utilice letras ni caracteres especiales.");
				pesoDelPasajero = "La opcion no existe";
			}

			//Parseamos el valor del peso
			pesoDelPasajero = parseFloat(pesoDelPasajero);
			// Redondeamos a dos cifras decimales
			pesoDelPasajero.toFixed(2);

			// Usamos un if para manejar el error de rango: Si es mayor que 2.5 o menor que 0.2 enonces se ejecuta este bloque 
			if (pesoDelPasajero > 180 || pesoDelPasajero < 2) {

				alert("ERROR, solo utilice numeros para ingresar su peso. \n No utilice letras ni caracteres especiales.");
				pesoDelPasajero = "La opcion no existe";

			}

			// 2) b) Peso pasajeros villa gesell
			if (lugarDelViaje == 2) {

				// Guardamos los valores y los vamos sumando en cada iteracion
				acumuladorPesoPasajeros = acumuladorPesoPasajeros + pesoDelPasajero;

			}

			// 2) e) Pasajero mas pesado / Pasajero mas Liviano

			// Reconocer si estoy pidiendo por 1ra vez -> Inicializo max y min
			if (flagPesoMaxMin == 0) { // 1ra vez

				pasajeroMasPesado = pesoDelPasajero;
				nombrePasajeroPesado = nombreDelTitular;
				pasajeroMasLiviano = pesoDelPasajero;
				nombrePasajeroLiviano = nombreDelTitular;

				// Dentro del if para que no se sobreescriba cada vez que se ejecute el while
				flagPesoMaxMin++;

			}

			// En caso contrario -> Si tengo un nuevo max o nuevo min los actualizo de ser necesario..
			if (pasajeroMasPesado < pesoDelPasajero) { // Si entra al if entonces no entra al else if

				pasajeroMasPesado = pesoDelPasajero;
				nombrePasajeroPesado = nombreDelTitular;

			} else if (pasajeroMasLiviano > pesoDelPasajero) {

				pasajeroMasLiviano = pesoDelPasajero;
				nombrePasajeroLiviano = nombreDelTitular;

			}


			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(pesoDelPasajero) == true);


		// SEXO DEL PASAJERO ( F / M / NB )
		do {

			// Solicitamos el dato al usuario
			sexoPasajero = prompt("Seleccione el sexo: 'F', 'M' o 'NB' ");
			// Pasamos las letras a mayusculas
			sexoPasajero = sexoPasajero.toUpperCase();

			// Si es distinta a algunas de las letras dadas como opciones entonces se repite
		} while (!(sexoPasajero == "F" || sexoPasajero == "M" || sexoPasajero == "NB"));


		// VIAJA CON EQUIPAJE DE MANO? SI / NO
		do {

			// Solicitamos el dato al usuario 
			equipajeDeMano = prompt("¿Viaja con equipaje de mano? Responda SI o NO.");
			// Pasamos las letras a mayusculas
			equipajeDeMano = equipajeDeMano.toUpperCase();

			// Si la respuesta no es "SI" o "NO", entonces se repite 
		} while (!(equipajeDeMano == "SI" || equipajeDeMano == "NO"));



		// MEDIO DE PAGO: (MERCADO PAGO / TARJETA / EFECTIVO )
		do {

			// Solicitamos el dato al usuario
			medioDePago = prompt("Ingrese la opcion con la cual abonara el viaje: \n 1- Mercado Pago \n 2- Tarjeta \n 3- Efectivo");
			// Calculamos el largo de la cadena
			largoDeLaCadena = medioDePago.length - 1;

			// Usamos un if para manejar el error: si el ultimo numero de la cadena no es un numero
			if (medioDePago.length > 1) {

				if (isNaN(parseInt(medioDePago.charAt(largoDeLaCadena))) == true) {

					alert("ERROR, solo utilice los numeros del 1 al 3 para elegir el medio de pago.");
					medioDePago = "La opcion no existe";
				}
			}

			//Parseamos el valor del lugar del viaje
			medioDePago = parseInt(medioDePago);

			// Usamos un if para manejar el error de rango: Si es mayor que 4 o menor que cero enonces se ejecuta este bloque 
			if (medioDePago > 3 || medioDePago < 1) {

				alert("ERROR, solo utilice los numeros del 1 al 3 para elegir el medio de pago.");
				medioDePago = "La opcion no existe";

			}

			// isNan false = si es un numero / isNan true = no es un numero
		} while (isNaN(medioDePago) == true);

		// --------------------- Seleccionamos la opcion elegida por el usuario -------------------------------------------

		// LUGAR DEL VIAJE
		switch (lugarDelViaje) {
			case 1:

				lugarDelViaje = "Puerto Madryn";
				contadorPasajerosPuertoMadryn++;
				break;

			case 2:

				lugarDelViaje = "Villa Gessel";
				contadorPasajerosVillaGesell++;
				break;

			default:

				lugarDelViaje = "Córdoba";
				contadorPasajerosCordoba++;
				break;
		}































		// TEMPORADA DEL VIAJE
		if (temporadaDelViaje == "baja") {

			temporadaDelViaje = "Baja";
			contadorTemporadaBaja++;

		} else {
			temporadaDelViaje = "Alta";
			contadorTemporadaAlta++;
		}

		if (contadorTemporadaAlta > contadorTemporadaBaja) {

			temporadaConMasViajes = "Temporada Alta";

		} else {

			temporadaConMasViajes = "Temporada Baja";

		}

		// SEXO DEL PASAJERO 
		switch (sexoPasajero) {
			case "F":
				sexoPasajero = "Femenino";


				// Reconocer si estoy pidiendo por 1ra vez -> Inicializo max y min
				if (flagMujerAlta == 0) { // 1ra vez

					alturaMujerMasAlta = alturaPasajero;
					nombreMujerMasAlta = nombreDelTitular;

					// Dentro del if para que no se sobreescriba cada vez que se ejecute el while
					flagPesoMaxMin++;

				}

				// En caso contrario -> Si tengo un nuevo max o nuevo min los actualizo de ser necesario..
				if (alturaMujerMasAlta < alturaPasajero) { // Si esto se cumple pisamos el valor anterior

					alturaMujerMasAlta = alturaPasajero;
					nombreMujerMasAlta = nombreDelTitular;

				}

				break;
			case "M":
				sexoPasajero = "Masculino";
				break;
			default:
				sexoPasajero = "No Binario";
				break;
		}

		// VIAJA CON EQUIPAJE DE MANO?
		if (equipajeDeMano == "SI") {

			equipajeDeMano = "Si";

		} else {
			equipajeDeMano = "No";
		}

		// MEDIO DE PAGO
		switch (medioDePago) {
			case 1:

				medioDePago = "Mercado Pago";
				contadorMercadoPago++;
				break;

			case 2:

				medioDePago = "Tarjeta";
				contadorTarjeta++;
				break;

			default:

				medioDePago = "Efectivo";
				contadorEfectivo++;
				break;
		}

		if (contadorMercadoPago > contadorTarjeta) {

			if (contadorMercadoPago > contadorEfectivo) {

				medioDePagoMasUtilizado = "Mercado Pago";

			}

		} else if (contadorTarjeta > contadorMercadoPago) {

			if (contadorTarjeta > contadorEfectivo) {

				medioDePagoMasUtilizado = "Tarjeta";

			}

		} else if (contadorEfectivo > contadorMercadoPago) {

			if (contadorEfectivo > contadorTarjeta) {

				medioDePagoMasUtilizado = "Efectivo";

			}

		}

		// ----------------------------- Mostramos al usuario los datos ingresados --------------------------------------

		document.write(`<hr> <h2>Pasajero N° ${ingresarOtroPasajero} </h2>`);
		document.write(`<p> • Nombre del titular: <strong> ${nombreDelTitular}.</strong> </p>`);
		document.write(`<p> • Destino: <strong> ${lugarDelViaje}. </strong> </p>`);
		document.write(`<p> • Temporada: <strong> ${temporadaDelViaje}. </strong> </p>`);
		document.write(`<p> • Cantidad de dias que va a durar el viaje: <strong> ${cantidadDeDias}.</strong> </p>`);
		document.write(`<p> • Importe del viaje: <strong> ${importeDelViaje}. </strong> </p>`);
		document.write(`<p> • La altura del pasajero es: <strong> ${alturaPasajero}. </strong> </p>`);
		document.write(`<p> • El peso del pasajero es: <strong> ${pesoDelPasajero}. </strong> </p>`);
		document.write(`<p> • Sexo del pasajero: <strong> ${sexoPasajero}. </strong> </p>`);
		document.write(`<p> • Equipaje de mano: <strong> ${equipajeDeMano}. </strong> </p>`);
		document.write(`<p> • Medio de pago: <strong> ${medioDePago}. </strong> </p> <hr>`);

		// Preguntamos si quiere seguir cargando mas datos de pasajeros
		ingresarOtroPasajero = prompt("¿Quiere ingresar otro pasajero?: Responda SI o NO");
		ingresarOtroPasajero = ingresarOtroPasajero.toUpperCase();

		if (ingresarOtroPasajero == "SI") {
			contadorDePasajeros++;
		}

	} while (ingresarOtroPasajero == 'SI');


	// **********************************************************************************************
	// ************************************* EJERCICIO 2 ********************************************
	// **********************************************************************************************

	// --------------- • A • Cantidad de personas que viajan en cada temporada -----------------------------------------

	// Mostramos los resultados 
	document.write(`<hr> <h2> • A • Cantidad de personas que viajan en cada temporada </h2>`);
	document.write(`<p> -> Temporada baja: <strong> ${contadorTemporadaBaja} pasajeros. </strong> </p>`);
	document.write(`<p> -> Temporada alta: <strong> ${contadorTemporadaAlta} pasajeros. </strong> </p>`);


	// --------------- • B • El peso acumulado de todos los que viajan a Villa Gesell ------------------------------------

	// Mostramos los resultados 
	document.write(`<br> <hr> <h2> • B • El peso acumulado de todos los que viajan a Villa Gesell </h2>`);
	document.write(`<p> -> Peso acumulado pasajeros a Villa Gesell: <strong> ${acumuladorPesoPasajeros} kilogramos.</strong> </p>`);


	// ----------------- • C • El lugar con la mayor cantidad de dias acumulados -----------------------------------------

	// Mostramos los resultados 
	document.write(`<br> <hr> <h2> • C • El lugar con la mayor cantidad de dias acumulados </h2>`);
	document.write(`<p> -> Dias acumulados en Puerto Madryn: <strong> ${acumuladorDiasPuertoMadryn} dias. </strong> </p>`);
	document.write(`<p> -> Dias acumulados en Villa Gesell: <strong> ${acumuladorDiasVillaGesell} dias. </strong> </p>`);


	// ----------------------------- • D • La suma de todos los importes --------------------------------------------------

	// Mostramos los resultados
	document.write(`<br> <hr> <h2> • D • La suma de todos los importes </h2>`);
	document.write(`<p> -> Importe total acumulado: <strong> $ ${acumuladorDeImportes}.</strong> </p>`);


	// -------------------- • E • El nombre del mas pesado de los pasajeros y el del mas liviano ---------------------------

	// Mostramos los resultados 
	document.write(`<br> <hr> <h2> • E • El nombre del mas pesado de los pasajeros y el del mas liviano </h2>`);
	document.write(`<p> -> Pasajero mas pesado: <strong> Se llama ${nombrePasajeroPesado}, y pesa ${pasajeroMasPesado} kilogramos. </strong> </p>`);
	document.write(`<p> -> Pasajero mas liviano: <strong> Se llama ${nombrePasajeroLiviano}, y pesa ${pasajeroMasLiviano} kilogramos. </strong> </p>`);


	// --------------------------------- • F • El lugar donde se pago el mayor importe ---------------------------------------

	// Mostramos los resultados 
	document.write(`<br> <hr> <h2> • F • El lugar donde se pago el mayor importe </h2>`);
	document.write(`<p> -> Destino con mayor importe abonado: <strong> En ${nombreDestinoImporteMaximo} y fue de un valor de $ ${maximoImporteSegunDestino} . </strong> </p>`);


	// -------------------------------------- • G • El nombre de la mujer mas alta ---------------------------------------------

	// Mostrar los resultados
	document.write(`<h2> • F • El nombre de la mujer mas alta </h2>`);
	document.write(`<p> -> La mujer mas alta: <strong> Se llama ${nombreMujerMasAlta} y mide ${alturaMujerMasAlta} metros. </strong> </p>`);


	// -------------------------------------- • H • Cual fue la forma de pago mas utilizada -------------------------------------

	// Mostrar los resultados
	document.write(`<br> <hr> <h2> • G •  Cual fue la forma de pago mas utilizada </h2>`);
	document.write(`<p> -> Medio de pago: <strong> ${medioDePagoMasUtilizado}. </strong> </p>`);


	// -------------------------------------- • I • En que temporada se viajo mas -----------------------------------------------

	// Mostrar los resultados
	document.write(`<br> <hr> <h2> • I • En que temporada se viajo mas </h2>`);
	document.write(`<p> -> Temporada en que mas se viajo: <strong> ${temporadaConMasViajes}. </strong> </p>`);


	// -------------------------------------- • J • Que lugar tuvo mas pasajeros -------------------------------------------------

	// Mostrar los resultados

    */