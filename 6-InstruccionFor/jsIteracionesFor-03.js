/*
Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" 
*/
function mostrar()
{
	// Declaro la variable
	var repeticiones;

	// Asigno el valor que introdusca el usuario
	repeticiones = prompt("Ingrese el número de repeticiones: ");
	repeticiones = parseInt(repeticiones);
	
	for (let i = 0; i < repeticiones; i++) {
		
		console.log("Hola UTN-FRA");

	}


}//FIN DE LA FUNCIÓN