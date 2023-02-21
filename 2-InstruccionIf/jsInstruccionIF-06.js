/*
	Al ingresar una edad debemos informar si la persona es 
	mayor de edad (mas de 18 años) o 
	adolescente (entre 13 y 17 años) 
	o niño (menor a 13 años).
*/

function mostrar() {
	
	//Declaro varibles
	var edad;
	var mensajeMayorDeEdad;
	var mensajeAdolescente;
	var mensajeNiño;

	//Asignamos los mensajes
	mensajeMayorDeEdad = "Usted es mayor de edad";
	mensajeAdolescente = "Usted es un adolescente";
	mensajeNiño = "Usted es un niño";

	//Extraemos el valor atraves del ID y lo guarddo en la variable edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseamos el valor de la edad
	edad = parseInt(edad);

	//Condicion
	if (edad >= 13 && edad <= 17) {

		// Si la condicion es TRUE se ejecuta este bloque de codigo
		alert(mensajeAdolescente);

	}
	else if (edad >= 18) {

		//Si la primera condicion no se cumple, se pasa a ver esta segunda condicion
		//Si es true se ejecuta este bloque de codigo
		alert(mensajeMayorDeEdad);
		
	} else {

		// Si la primera y segunda condicion no se cumplen es FALSE
		// Se ejecuta este bloque de codigo
		alert(mensajeNiño);

	}

} //FIN DE LA FUNCIÓN