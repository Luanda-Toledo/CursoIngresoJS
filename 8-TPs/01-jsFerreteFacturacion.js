/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	// Declaramos las variables 
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultadoSuma;

    //Extraemos los valores de los cuadros
    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    //Parseamos los valores para que sean flotantes
    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    //Sumados los tres valores y los guardamos en la variable resultado
    resultadoSuma = primerPrecio + segundoPrecio + tercerPrecio;

    //Mostramos el resultado de la suma atraves de un alert
    alert("El resultado de la suma de los precios es: " + resultadoSuma);
}
function Promedio () 
{
	//Declaramos variables 
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultadoSuma;
    var promedioDePrecios;

    //Extraemos los valores de los cuadros
    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    //Parseamos los valores a numeros flotantes
    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    //Sumamos los tres valores y los asignamos a la variable resultadoSuma
    resultadoSuma = primerPrecio + segundoPrecio + tercerPrecio;

    //Sacamos el promedio de los tres precios dividiendo por tres
    promedioDePrecios = resultadoSuma / 3;

    //Mostramos el promedio de los precios por medio del alert
    alert("El promedio de los precios es: " + promedioDePrecios);
}
function PrecioFinal () 
{
	//Declaramos variables 
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultadoSuma;
    var ivaDeProductos;
    var importeTotalMasIva;

    //Extraemos los valores de los cuadros
    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    //Parseamos los valores a numeros flotantes
    primerPrecio = parseFloat(primerPrecio);
    segundoPrecio = parseFloat(segundoPrecio);
    tercerPrecio = parseFloat(tercerPrecio);

    //Sumamos los tres valores y los asignamos a la variable resultadoSuma
    resultadoSuma = primerPrecio + segundoPrecio + tercerPrecio;

    //Obtenemos el valor del iva y lo guardamos en la variable
    ivaDeProductos = (resultadoSuma * 21) / 100;

    //Sumamos el valor del iva mas el precio de todos los productos
    importeTotalMasIva = resultadoSuma + ivaDeProductos;

    //Mostramos el promedio de los precios por medio del alert
    alert("El precio final + iva es: " + importeTotalMasIva);
}