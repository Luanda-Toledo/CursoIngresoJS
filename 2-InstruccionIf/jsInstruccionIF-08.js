/* 
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	// Declaramos las variables
	var edad;
	var estadoCivil;
	var mensaje;

	// Les asignamos valores
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	mensaje = "Es soltero y no es menor";

	// CONDICION
	if (edad > 17 && estadoCivil == "Soltero"){ 
		alert(mensaje);
	}
	
	/*
		Otra forma de escribir la condicion seria:
		( !(edad < 18 || estadoCivil != "Soltero") )
		Si alguna de las dos o las dos son verdaderas
		como necesitamos en este caso, nos va a salir TRUE, 
		ya que el unico caso en el que un or nos de FALSE, 
		es que sean ambas condiciones falsas.
		En este caso, si la condicion nos devuelve false al estar siendo 
		negada nos devuelva TRUE y entraria a ejecutar el mensaje que se
		encuentra dentro del bloque if.
	*/

	/* 
		a | b | OR | AND
		-----------------
		F | F | F |    F
		F | V | V |    F
		V | F | V |    F
		V | V | V |    V
	*/


}//FIN DE LA FUNCIÓN