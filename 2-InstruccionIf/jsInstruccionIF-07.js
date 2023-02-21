/*
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/ 

function mostrar()
{
	// Declaro las variables
	var edad;
	var estadoCivil;
	var mensaje;

	// Extraemos los valores y los guardamos en variables
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	// Asignamos el valor a la variable mensaje 
	mensaje = "Es muy pequeño para NO ser soltero";

	// CONDICION 
	if ( edad < 18 && estadoCivil != "Soltero"){
		alert(mensaje);
	}
	


} //FIN DE LA FUNCIÓN