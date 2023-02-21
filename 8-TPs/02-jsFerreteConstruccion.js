/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaro las variables
    var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var totalAlambre;

    //Extraemos los valores ingresados en los cuadros
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    //Parseamos los valores a numeros flotantes
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    //Calculamos el perimetro y lo almacenamos en una variable
    perimetro = (largoTerreno + anchoTerreno) * 2;

    //Multiplicamos el perimetro por la cantidad de alambre solicitado
    totalAlambre = perimetro * 3;

    //Mostramos el resultado por medio de un alert
    alert("Cantidad de alambre necesario: " + totalAlambre);

}
function Circulo () 
{
    //Declaramos las variables 
    var radioDelTerreno;
    var perimetro;
    var totalDeAlambre;
    var valorDePi;

    //Inicializamos la variable pi asignandole su valor
    valorDePi = 3.14;
	
    //Extraemos los valores ingresados en los cuadros
    radioDelTerreno = document.getElementById("txtIdRadio").value;

    //Parseamos el valor del radio a numero flotante 
    radioDelTerreno = parseFloat(radioDelTerreno)

    //Calculamos el perimetro del circulo = 2*pi*radio
    perimetro = 2 * valorDePi * radioDelTerreno;

    //Multiplicamos el perimetro por la cantidad de alambre solicitado
    totalDeAlambre = perimetro * 3;

    //Mostramos el resultado por medio de un alert
    alert("Cantidad de alambre necesario: " + totalDeAlambre)

}
function Materiales () 
{
    /*
    Por cada 1m*1m = 2 bolsas de cemento + 3 bolsas de cal
    cuantas bolsas por cada rectangulo?
    area del rectangulo =  largo * ancho = resultado total del area
    resultado * 2 = bolsas de cemento
    resultado * 3 = bolsas de cal
    */

	//Declaro las variables
    var largoTerreno;
    var anchoTerreno;
    var areaDelrectangulo;
    var bolsasDeCemento;
    var bolsasDeCal;

    //Extraemos los valores ingresados en los cuadros
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    //Parseamos los valores a numeros flotantes
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    
    //Calculamos el area del rectangulo
    areaDelrectangulo = largoTerreno * anchoTerreno;

    //Calculamos la cantidad de bolsas de cemento necesarias
    bolsasDeCemento = areaDelrectangulo * 2;

    //Calculamos la cantidad de bolsas de cal necesarias
    bolsasDeCal = areaDelrectangulo * 3;

    //Mostramos el resultado en un alert concatenados
    alert("La cantidad de bolsas de cemento necesarias son " + bolsasDeCemento +
    " y la cantidad de bolsas de cal necesarias son " + bolsasDeCal);
}