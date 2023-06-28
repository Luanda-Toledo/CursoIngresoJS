
/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'

*/
function mostrar()
{
	//Declaro una variable 
	var nombreIngresado;

	//Le asignamos el valor ingresado por el usuario a la variable
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//Pasamos el valor de la variable atraves del alert
	alert("Bienvenido " + nombreIngresado);

}


