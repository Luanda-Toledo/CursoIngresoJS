/*Al ingresar una edad que sea igual a 15,
 mostrar el mensaje "niña bonita". */
function mostrar()
{
	//Declaro varibles
	var edad = 15;
	var mensaje = "Niña bonita";

	//Extraemos el valor atraves del ID y lo guarddo en la variable edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseamos el valor de la edad
	edad = parseInt(edad);

	/*
	SENTENCIA IF
	-> Si la condicion se cumple entonces el codigo que se enccuentra
	dentro del bloque se ejeccuta.
	*/

	/*
	OPERADORES DE COMPARACION:

	•) == igual a 
	ej: "15" == 15

	•) === igual estricto -> compara tambien el tipo de dato
	ej: 15 === 15 (bien)
	ej2: "15" === 15 (mal)

	•) != distinto a

	•) !=== distinto pero estricto

	•) < menor a 

	•) > mayor a 

	•) <= menor igual a

	•) >= mayor igual a

	*/

	// Condicional
	if (edad === 15){ 
		//Si se cumple (TRUE) la condicion, entonces se ejecuta:
		alert(mensaje);
	}

} //FIN DE LA FUNCIÓN