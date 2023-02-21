/*
	Al ingresar una edad debemos informar si la persona es adolescente,
	edad entre 13 y 17 años (inclusive) .
*/

function mostrar() {

	//Declaro varibles
	var edad;
	var mensajeParaAdolescente;
	var mensajeNoAdolescente;

	//Asignamos los mensajes
	mensajeParaAdolescente = "Usted si es un adolescente";
	mensajeNoAdolescente = "Usted no es un adolescente";

	//Extraemos el valor atraves del ID y lo guarddo en la variable edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseamos el valor de la edad
	edad = parseInt(edad);

	//Condicion
	if (edad >= 13 && edad <= 17) {
		// Si la condicion es TRUE se ejecuta este bloque de codigo
		alert(mensajeParaAdolescente);
	}
	else {
		// Si la condicion es FALSE se ejecuta este bloque de codigo
		alert(mensajeNoAdolescente);
	}


}//FIN DE LA FUNCIÓN