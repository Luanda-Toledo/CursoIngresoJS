/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//Declaramos las variables
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    //Extraemos el valor del cuadro a traves del id
    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;

    //Parseamos el valor a numero flotante
    temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

    //Conversion de F a C
    temperaturaCentigrados = (temperaturaFahrenheit - 32) / 1.8;

    //Mostramos el valor atraves de un alert y redondeando a dos decimales los centigrados
    alert(`La temperatura es ${temperaturaCentigrados.toFixed(2)} grados centigrados`);
}

function CentigradosFahrenheit () 
{
	//Declaramos las variables
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    //Extraemos el valor del cuadro a traves del id
    temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;

    //Parseamos el valor a numero flotante
    temperaturaCentigrados = parseFloat(temperaturaCentigrados);

    //Conversion de C a F
    temperaturaFahrenheit = (temperaturaCentigrados * 1.8) + 32;

    //Mostramos el valor atraves de un alert y redondeamos a dos decimales los fahrenheit
    alert(`La temperatura es ${temperaturaFahrenheit.toFixed(2)} grados Fahrenheit`);
}
