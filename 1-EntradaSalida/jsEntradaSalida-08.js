
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
*/
function SacarResto()
{
	//Declaramos las 3 variables
	var dividendoIngresado;
	var divisorIngresado;
	var resultadoRestoDeLaDivision;
	
	//Tomamos los numeros atraves de los IDs
	dividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
	divisorIngresado = document.getElementById("txtIdNumeroDivisor").value;

	//Parseamos los valores obtenidos
	dividendoIngresado = parseInt(dividendoIngresado);
	divisorIngresado = parseInt(divisorIngresado);

	//Realizamos la operacion y se la asignamos a la variable
	resultadoRestoDeLaDivision = dividendoIngresado % divisorIngresado;

	//Mostramos el resultado atraves de un alert
	alert("El resto es " + resultadoRestoDeLaDivision);
}

