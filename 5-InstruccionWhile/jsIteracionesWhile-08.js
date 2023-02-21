/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// Declaro las variables
	var numero;
	var flag;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	// Les asignamos valores
	flag = 0;
	sumaPositivos = 0;
	// Se inicializa en 1 por que una multiplicacion por cero te va a dar cero 
	// y se pierde el numero que ingreso el usuario. Ademas ->  + * - = - 
	multiplicacionNegativos = 1; 

	// Bucle del tipo mientras el usuario quiera (do while).
	do {

		// Pedir los numeros -> dentro del bucle
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		respuesta = prompt("Quiere ingresar otro numero?: si / no");

		// Analizar el signo de cada numero -> dentro de bucle
		if ( numero > -1){ // Positivos

			// Acumulamos el numero en el acumulador correspondiente -> dentro del bucle
			sumaPositivos = sumaPositivos + numero;	

		} else { // Negativos

			flag = 1;

			// Realizar las operaciones correspondientes
			multiplicacionNegativos = multiplicacionNegativos * numero; 

		}

	} while (respuesta == "si");

	// Preguntamos si el usuario ingreso o no un num negativo
	if(flag == 0){
		//En caso de que no se ingresara un num negativo entonces el valor va a ser cero
		multiplicacionNegativos = 0;
	}

	// Mostrar los resultados
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	document.getElementById("txtIdSuma").value = sumaPositivos;
	
}//FIN DE LA FUNCIÓN

/* 
En principio el problema que nos plantea es que en caso de que el usuario no ingrese ningun
numero negativo el cuadro de texto de la pag va a mostrar el numero 1 y deberia mostrar
el numero 0. La solucion seria:
Ponemos un flag inicializado en 0 y cuando entre al else de los negativos lo vamos
a inicializar en uno para que cuando salga del while, es decir, cuando el usuario deje de ingresar numeros, 
le preguntemos con un if si ingreso un numero negativo. Vamos a poder hacerlo ya que si no ingreso un numero negativo 
el valor de flag va a seguir siendo cero ya que nunca entro a el else de los negativos, en caso
contrario el valor de flag va a ser mayor a cero.

*/