/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	// Declaro la variable
	var sexoIngresado;

	// Pedimos el valor al usuario
	sexoIngresado = prompt("ingrese f ó m .");

	// Validamos usando un while
	while (!( sexoIngresado == "f" || sexoIngresado == "m")) {
		
		sexoIngresado = prompt("ERROR, ingrese f ó m .");

	}

	// Mostramos el valor al usuario en el cuadro de texto
	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN