/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	// Declaramos las variables
	var respuesta;
	var numeroIngresado;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;

	// Inicializamos los contadores y acumuladores
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	acumuladorNegativos = 0;
	acumuladorPositivos = 0;

	// Generar un bucle del tipo mientras el usuario quiera (do while)
	do {

		// Solicito los numeros al usuario
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		// Analizamos el signo del numero y colocar en negativos, positivos y ceros.
		if ( numeroIngresado < 0 ){ // Negativos

			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			contadorNegativos++;

		} else if ( numeroIngresado == 0 ) { // Ceros

			contadorCeros++;

		} else { // Positivos

			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;

		}

		// Analizamos si el numero es par
		if ( numeroIngresado % 2 == 0){
			contadorPares++;
		}

		respuesta=prompt("desea continuar ingresando numeros?: si / no");

	} while( respuesta == "si" );

	// Hacemos los calculos que necesitan los datos obtenidos en el bucle
	// Calculamos los promedios
	if ( contadorPositivos != 0){

		promedioNegativos = acumuladorNegativos / contadorNegativos;

	} else {

		promedioPositivos = 0;

	}

	if ( contadorPositivos != 0){

		promedioPositivos = acumuladorPositivos / contadorPositivos;

	} else {

		promedioNegativos = 0;

	}

	// Calculamos la diferencia
	diferencia = contadorPositivos - contadorNegativos;

	document.write("\n 2- La suma de positivos es :" + acumuladorPositivos);
	document.write("\n 1- La suma de negativos es :" + acumuladorNegativos);
	document.write("\n 3- Cantidad de positivos :" + contadorPositivos);
	document.write("\n 4- Cantidad de negativos :" + contadorNegativos);
	document.write("\n 5- Cantidad de ceros :" + contadorCeros);
	document.write("\n 6- Cantidad de números pares :" + contadorPares);
	document.write("\n 7- El promedio de positivos es :" + promedioPositivos);
	document.write("\n 8- El promedio de negativos es :" + promedioNegativos);
	document.write("\n 9- La diferencia entre positivos y negativos es :" + diferencia);

}//FIN DE LA FUNCIÓN

/* 
El doWhile se ejecuta al menos una vez.
El while cuando no sabemos cuantas veces tendremos que iterar.
El for cuando sabemos la cantidad de veces que debemos iterar.
*/

// Declaro variables
// Inicializo las variables
// Generar un bucle del tipo mientras el usuario quiera (do while)
// Dentro del bucle:
// Solicito los numeros al usuario
// Realizamos la operacion correspondiente
// Analizamos el signo del numero y asignar donde corresponde
// Analizamos si el numero es par
// Fuera del bucle:
// Hacemos los calculos que necesitan los datos obtenidos en el bucle

// \n -> Salto de linea