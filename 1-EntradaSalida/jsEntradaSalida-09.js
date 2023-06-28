
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/

function mostrarAumento() {

	//Declaramos las variables
	var sueldoIngresado;
	var aumento;
	var sueldoConAumento;
	var valorAumentoIngresado;

	//Traemos atraves del ID el valor del sueldo
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	//Pedimos al usuario que ingrese el valor del aumento
	valorAumentoIngresado = prompt("Ingrese el valor del aumento");

	//Parseamos los valores ingresados
	sueldoIngresado = parseInt(sueldoIngresado);
	valorAumentoIngresado = parseInt(valorAumentoIngresado);

	//Calculamos el 10%
	aumento = (sueldoIngresado * valorAumentoIngresado) / 100;

	//Sumamos ese valor del 10% al sueldo
	sueldoConAumento = sueldoIngresado + aumento;

	//Mostramos en el cuadro de resultado el valor con su aumento del 10%
	document.getElementById("txtIdResultado").value = sueldoConAumento;

}

