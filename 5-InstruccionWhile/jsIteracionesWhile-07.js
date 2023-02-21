/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	// Declaramos variables
	var numero;
	var acumulador;
	var respuesta;

	// Les asignamos valores
	acumulador = 0;
	i = 0;

	do {
		
		// Solicitamos los valores al usuario
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		// Guardamos los valores y los vamos sumando en cada iteracion
		// Acumulador valores variables
		acumulador = acumulador + numero;
		// Acumulador de valor fijo de 1 en 1
		i++;
		
		respuesta = prompt("Quiere ingresar otro numero? ");

	} while (respuesta == 'si');

	// Calculamos en promedio
	promedio = acumulador / i;

	// Mostramos los valores en los cuadros
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN

/*
El do while
Se va a ejecutar al menos una vez, idependiente mente de si la 
condicion al final sea verdadera o no.
Esto hace que no sea necesario inicializar la variable respuesta
con un si. 
*/ 