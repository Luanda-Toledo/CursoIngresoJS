/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declaro una variable 
	var nombreIngresado;

	// Le asignamos a la variable el valor que ingreso el usuario
	nombreIngresado = prompt("Ingrese su nombre");

	//Al metodo le asignamos el valor que se almaceno en la variable
	document.getElementById("txtIdNombre").value = nombreIngresado;
}

