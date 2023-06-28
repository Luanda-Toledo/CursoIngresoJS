/* 
-> BTC o ETH

En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

D) Sabiendo que el coste de electricidad para: BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.

*/

function mostrar(){

	// Declaramos variables
	var respuestaContinuar; 
	var monedaIngresada;
	var contadorMonedaBtc;
	var contadorMonedaEth;
	var monedaMasMinada;
	var nombreMonedaMasMinada;
	var acumuladorBtc;
	var acumuladorEth;
	var cotizacionDiaria;
	var cantidadMonedaIngresada;
	var cantidadDeIngresados;
	var acumuladorCotizacionBtc;
	var acumuladorCotizacionEth;
	var nombreMonedaMasCotizada;
	var btcMasCosteElectricidad;
	var ethMasCosteElectricidad;
	var ingresoBrutoTotalBtc;
	var ingresoBrutoTotalEth;
	var btcEnPesos;
	var ethEnPesos;
	var mensaje;

	// Asignamos valores
	flag = true;
	cantidadDeIngresados;
	acumuladorBtc = 0;
	acumuladorEth = 0;
	contadorMonedaBtc = 0;
	contadorMonedaEth = 0;

	do {

		//Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
		do {
			
			monedaIngresada = prompt("Nombre de la criptomoneda, “BTC” para Bitcoin y “ETH” para Ethereum");
	
			
		} while (!(monedaIngresada == "BTC" || monedaIngresada == "ETH"));


		// Cantidad de BTC o ETH minado ese día - Número positivo.
		do {
			
			cantidadMonedaIngresada = prompt("Cantidad de BTC o ETH minado ese día - Número positivo.");
			cantidadMonedaIngresada = parseInt(cantidadMonedaIngresada);
	
			
		} while (cantidadMonedaIngresada < 0);

		// Cotización diaria en USD - Número positivo inclusive 0.
		do {

			cotizacionDiaria = prompt("Cotización diaria en USD - Número positivo inclusive 0.");
			cotizacionDiaria = parseInt(cotizacionDiaria);
	
		} while (cotizacionDiaria < 0);


		// A) y C)
		switch (monedaIngresada) {
			case "BTC":
				acumuladorBtc = acumuladorBtc + cantidadDeIngresados;
				acumuladorCotizacionBtc = acumuladorCotizacionBtc + cotizacionDiaria;
				contadorMonedaBtc++;
				break;
		
			default: // eth
				acumuladorEth = acumuladorEth + cantidadDeIngresados;
				acumuladorCotizacionEth = acumuladorCotizacionEth + cotizacionDiaria;
				contadorMonedaEth++;
				break;
		}


		cantidadDeIngresados++;

		respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	// -> Preguntamos si quiere seguir cargando mas datos
	} while (respuestaContinuar == 'SI'); 


	// A) Nombre y cantidad de la criptomoneda más minada.
	if (acumuladorBtc > acumuladorEth) {
			
		nombreMonedaMasMinada = "BTC";
		monedaMasMinada = acumuladorBtc;

	} else {

		nombreMonedaMasMinada = "ETH";
		monedaMasMinada = acumuladorEth;
		
	}

	// B) Nombre de la criptomoneda que mayor cotización tuvo.
	if (acumuladorCotizacionBtc > acumuladorCotizacionEth) {
			
		nombreMonedaMasCotizada = "BTC";

	} else {

		nombreMonedaMasCotizada = "ETH";
		
	}

	// C) Cantidad total de ingreso bruto en USD de cada criptomoneda.
	ingresoBrutoTotalBtc = acumuladorBtc * acumuladorCotizacionBtc;
	ingresoBrutoTotalEth = acumuladorEth * acumuladorCotizacionEth;

	// D) Sabiendo que el coste de electricidad para: BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
	btcMasCosteElectricidad = ingresoBrutoTotalBtc + (ingresoBrutoTotalBtc * 7 / 100);
	ethMasCosteElectricidad = ingresoBrutoTotalEth + (ingresoBrutoTotalEth * 4 / 100);

	// E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
	btcEnPesos = ingresoBrutoTotalBtc / 337;
	ethEnPesos = ingresoBrutoTotalEth / 337;


	// Mostramos los datos 
	mensaje = "\n Moneda mas minada";
	mensaje += "\n Nombre: $" + nombreMonedaMasMinada;
	mensaje += "\n Cantidad: $" + monedaMasMinada;

	mensaje += "\n : Nombre de la criptomoneda que mayor cotización tuvo: " + nombreMonedaMasCotizada;

	mensaje += "\n Cantidad total de ingreso bruto en USD de cada criptomoneda: ";
	mensaje += "\n BTC: " + ingresoBrutoTotalBtc;
	mensaje += "\n ETH: " + ingresoBrutoTotalEth;

	mensaje += "\n Total mas coste de electricidad: ";
	mensaje += "\n BTC: " + btcMasCosteElectricidad;
	mensaje += "\n ETH: " + ethMasCosteElectricidad;

	mensaje += "\n Total ingreso neto en pesos: ";
	mensaje += "\n BTC: " + btcEnPesos;
	mensaje += "\n ETH: " + ethEnPesos;

alert(mensaje);
}
