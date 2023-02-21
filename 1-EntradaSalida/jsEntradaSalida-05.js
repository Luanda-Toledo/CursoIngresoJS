/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaramos las variables nombre y edad
	var nombreIngresado;
	var edadIngresada;

	//Le asignamos con el metodo los valores que nos pase el usuario atraves del campo donde se encuentre el
	//id especificado
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//Mostramos los datos obtenidos atraves del alert concatenandolos
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");
	
}

