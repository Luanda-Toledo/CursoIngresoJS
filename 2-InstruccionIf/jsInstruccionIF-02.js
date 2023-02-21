/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{
	//Declaro varibles
	var edad;
	var mensajeMayorDeEdad = "Usted es mayor de edad";

	//Extraemos el valor atraves del ID y lo guarddo en la variable edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseamos el valor de la edad
	edad = parseInt(edad);

	//Condicion
	if (edad >= 18){ // Si es mayor de 18 años se ejecuta este bloque 
		alert(mensajeMayorDeEdad);
	} 
	

}//FIN DE LA FUNCIÓN