/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

// Declaro variables globales
var numeroSecreto;
var contadorIntentos;
var numeroAleatorio;

function comenzar() { //Genero el número RANDOM entre 1 y 100

	// Deeclaro variables locales
	var rango;
	var numeroMaximo;
	var numeroMinimo;

	// Asignamos valore
	numeroMaximo = 100;
	numeroMinimo = 1;

	// Calculamos el rango
	rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

	// Pedimos un numero aleatorio y lo redondeamos
	numeroAleatorio = Math.round(Math.random() * rango);

	console.log(numeroAleatorio);

}

// Le asigno el valor a la variable
contadorIntentos = 0;

function verificar() {

	// Declaramos las variables locales
	var numeroIngresado;

	// Aumentamos el contador cada vz que se llame esta funcion
	contadorIntentos++;

	// Solicitamos un un numero al usuario
	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	// numeroIngresado mayor que numero secreto
	if (numeroIngresado > numeroAleatorio && numeroIngresado < 100) {

		//Alerta si se paso
		alert("Se paso para llegar al numero secreto");

		// NumeroIngresado menor que numeroSecreto y no es cero
	} else if (numeroIngresado < numeroAleatorio && numeroIngresado > 0) {

		//Alerta si le falta 
		alert("Falta para llegar al numero secreto..");

	} else if (numeroIngresado == numeroAleatorio) {

		//Son iguales
		alert(`Usted es un ganador!!! Y en solo ${contadorIntentos}.`);

		// Segun la cantidad de intenos mostramos al ganador el mensaje
		switch (contadorIntentos) {
			case 1:
				alert("Usted es un Psiquico");
				break;
		
			case 2:
				alert("Excelente percepcion");
				break;
		
			case 3:
				alert("Esto es suerte");
				break;
		
			case 4:
				alert("Excelente tecnica");
				break;
		
			case 5:
				alert("Usted esta en la media");
				break;
		
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta tecnica");
				break;
		
			default:

				alert("Afortunaddo en el amor!");	
				break;
		}

	} else {

		// Respuesta a errores 
		alert("ERROR, ingrese un numero del 1 al 100!!");

	}

	//Mostrar en el cuadro de texto la cantidad de intentos
	document.getElementById("txtIdIntentos").value = contadorIntentos;

}




