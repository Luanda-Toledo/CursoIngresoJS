function mostrar()
{

	// Declaro variables
	var numero;
	var acumulador;
	var promedio;
	var i;

	// Les asignamos valores iniciales
	contador = 0;
	acumulador = 0;
	i = 0;

	// Se repite 5 veces
	while ( i < 5 ) {

		// Solicitamos los valores al usuario
		numero = parseInt(prompt("Ingrese un numero: "));

		// Guardamos los valores y los vamos sumando en cada iteracion
		// Acumulador valores variables
		acumulador = acumulador + numero;
		// Acumulador de valor fijo de 1 en 1
		i++;
	}
	
	// Calculamos en promedio
	promedio = acumulador / 5;

	// Mostramos los valores en los cuadros
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	
}//FIN DE LA FUNCIÓN

/* 
• La diferencia entre un acumulador y un contador:
la variable se incrementa o decrementa en valores variables
y el contador en valores fijos o constantes.

• Los acumuladores y contadores siempre deben ser inicializados
con algun valor antes de poder utilizarlos.
*/