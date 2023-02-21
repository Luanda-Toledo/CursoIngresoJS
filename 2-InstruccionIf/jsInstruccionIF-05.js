/*
	Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//Declaro varibles
	var edad;
	var mensaje;

	//Asignamos los mensajes
	mensaje = "Usted no es un adolescente";

	//Extraemos el valor atraves del ID y lo guarddo en la variable edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseamos el valor de la edad
	edad = parseInt(edad);

	//Condicion
	if (!(edad >= 13 && edad <= 17)) {
		// Si la condicion es TRUE se ejecuta este bloque de codigo
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN