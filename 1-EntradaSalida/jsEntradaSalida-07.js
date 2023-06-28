
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
function sumar()

*/
{	
	//Declaramos las 3 variables
	var primerNumero;
	var segundoNumero;
	var resultadoSuma;
	
	//Tomamos los numeros atraves de los IDs
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseamos los valores obtenidos
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Realizamos la operacion y se la asignamos a la variable
	resultadoSuma = primerNumero + segundoNumero;

	//Mostramos el resultado atraves de un alert
	alert(resultadoSuma);

}

function restar()
{
	//Declaramos las 3 variables
	var primerNumero;
	var segundoNumero;
	var resultadoResta;
	
	//Tomamos los numeros atraves de los IDs
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseamos los valores obtenidos
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Realizamos la operacion y se la asignamos a la variable
	resultadoResta = primerNumero - segundoNumero;

	//Mostramos el resultado atraves de un alert
	alert(resultadoResta);
}

function multiplicar()
{
	//Declaramos las 3 variables
	var primerNumero;
	var segundoNumero;
	var resultadoMultiplicacion;
	
	//Tomamos los numeros atraves de los IDs
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseamos los valores obtenidos
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Realizamos la operacion y se la asignamos a la variable 
	resultadoMultiplicacion = primerNumero * segundoNumero;

	//Mostramos el resultado atraves de un alert
	alert(resultadoMultiplicacion); 
	
}

function dividir()
{
	//Declaramos las 3 variables
	var primerNumero;
	var segundoNumero;
	var resultadoDividicion;
	
	//Tomamos los numeros atraves de los IDs
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	//Parseamos los valores obtenidos
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	//Realizamos la operacion y se la asignamos a la variable 
	resultadoDividicion = primerNumero / segundoNumero;

	//Mostramos el resultado atraves de un alert
	alert(resultadoDividicion);
}
