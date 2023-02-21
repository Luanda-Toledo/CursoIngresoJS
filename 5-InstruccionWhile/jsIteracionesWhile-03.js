/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	// Declaro variable
	var contrasena;

	// Pedimos la contraseña al usuario 
	contrasena = prompt("ingrese la contraseña"); //contraseña = utn750
	
	// Validacion de contraseña
	while ( contrasena != "utn750") {
		
		contrasena = prompt("ERROR, reingrese la contraseña").toLowerCase();

	}

	alert("Bienvenido");

	/* 

	Ej de como hacer la validacion con do while

	do {
		contrasena = prompt("ingrese la contraseña").toLowerCase();
	} while (contrasena != "utn750");


	*/ 


}//FIN DE LA FUNCIÓN

// utn750 != UTN750 != UtN750 != uTN750 -> case sensitive -> No son lo mismo.
// toLowerCase(); -> Convierte todas las letras a minisculas
// toUpperCase(); -> Convierte todas las letras a mayusculas

