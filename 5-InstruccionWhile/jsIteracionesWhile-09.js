/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	
	
	// Declarar variables
	var flag;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	// Iniciar variables
	flag = 0;

	// Armo un bucle del tipo mientras el usuario quiera (do while)
	do {
		// Solicitamos un numero al usuario
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		// Reconocer si estoy pidiendo por 1ra vez -> Inicializo max y min
		if (flag == 0 ){ // 1ra vez

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = 1; // Dentro del if para que no se sobreescriba cada vez que se ejecute el while

		} 
		
		// En caso contrario -> Si tengo un nuevo max o nuevo min
		// Y los actualizo de ser necesario..
		if (numeroIngresado > numeroMaximo){ // Si entra al if entonces no entra al else if

			numeroMaximo = numeroIngresado;

		} else if (numeroIngresado < numeroMinimo){
			
			numeroMinimo = numeroIngresado;

		}

		respuesta = prompt("Desea continuar ingresando numeros?: si / no");

	} while (respuesta == "si");

	// Mostramos los valores de max y min
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN

// Armo un bucle del tipo mientras el usuario quiera (do while)
// Dentro del bucle:
// Solicitamos un numero al usuario
// Reconocer si estoy pidiendo por 1ra vez -> Inicializo max y min
// En caso contrario -> Si tengo un nuevo max o nuevo min
// Y los actualizo de ser necesario..
// Despues del bucle:
// Mostramos los valores de max y min
