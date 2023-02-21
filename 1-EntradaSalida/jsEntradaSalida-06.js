/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaramos las 3 variables
	var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resultadoDeLaSuma;

	//Le asignamos los valores obtenidos atraves de los IDs
	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	//Lo parseamos
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	//Realizamos la operacion de suma y se lo asignamos a la variable resultado
	resultadoDeLaSuma = primerNumeroIngresado + segundoNumeroIngresado;

	//Mostramos el resultado atraves del alert
	alert("El resultado de la suma es: " + resultadoDeLaSuma);
}

