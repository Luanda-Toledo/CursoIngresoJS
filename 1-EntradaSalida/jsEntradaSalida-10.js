
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

*/
function mostrarAumento()
{
	//Declaramos las variables
	var importeIngresado;
	var descuento;
	var importeConDescuento;
	var descuentoIngresado;

	//Traemos atraves del ID el importe
	importeIngresado = document.getElementById("txtIdImporte").value;

	//Solicitamos el importe de porcentaje a descontar al usuario
	descuentoIngresado = prompt("Ingrese el valor a descontar");

	//Lo parseamos a un entero
	importeIngresado = parseInt(importeIngresado);
	descuentoIngresado = parseInt(descuentoIngresado);

	//Calculamos el descuento
	descuento = (importeIngresado * descuentoIngresado) / 100;

	//Al importe ingresado le restamos el descuento
	importeConDescuento = importeIngresado - descuento;

	//Mostramos en el cuadro de resultado del importe con el descuento dell 25%
	document.getElementById("txtIdResultado").value = importeConDescuento;
}