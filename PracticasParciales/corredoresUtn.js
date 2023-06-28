
/*
EJERCICIO 2
De 10 corredores de atletismo se deben ingresar y validar los sig datos:
Nombre
Edad
Tiempo (Dato entero expresado en segundos)
Sexo

Informar:
a) El nombre del hombre con mas tiempo (si lo hay)
b) El promedio de la edad de todos los participantes
c) La cantidad de corredores de sexo femenino
*/


// Plantilla generica basica

function mostrar() {

	// Declaramos variables
	var nombre;
	var sexo;
	var tiempo;
	var edad;
	var cantidadDeIngresados;
	var nombreMayorTiempo;
	var mayorTiempo;
	var flag;
	var acumuladorEdad;
	var promedioEdad;
	var contadorFemeninos;
	var mensaje;

	// Asignamos valores
	flag = true;
	cantidadDeIngresados = 0;
	mayorTiempo = 0;
	acumuladorEdad = 0;
	contadorFemeninos = 0;


	do {

		// VALIDAMOS NOMBRE
		do {
			nombre = prompt("Ingrese el nombre: ");
			nombre = nombre.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombre));

		// VALIDAMOS EDAD
		do {

			edad = prompt("Ingrese la edad: ");
			edad = parseInt(peso);
	
			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(edad) || (edad < 17 || edad > 110));

		// VALIDAMOS SEXO
		do {
			tipoDe = prompt("Ingrese una de las opciones: f o m");
			tipoDe = tipoDe.toLowerCase();

		} while (!isNaN(tipoDe) || (tipoDe != "f" && tipoDe != "m"));

		// VALIDAMOS TIEMPO
		do {
			// Solicitamos los valores al usuario atraves de promp
			tiempo = prompt("Ingrese el tiempo en segundos: ");
			tiempo = parseInt(tiempo);

		} while (isNaN(tiempo) || tiempo < 0);

		if (sexo == "f") {
			sexo = "Femenino";
			contadorFemeninos++;
		} else {
			sexo = "Masculino";
		}

		// A) El nombre del hombre con mas tiempo (si lo hay)
		if (sexo == "Masculino") {
		
			if (mayorTiempo < tiempo) {
				
				mayorTiempo = tiempo;
				nombreMayorTiempo = nombre;

			} else {
				
				mayorTiempo = mayorTiempo;
				nombreMayorTiempo = nombreMayorTiempo;

			}
			
		}

		// B
		if (flag == true) {
			
			acumuladorEdad = edad;
			flag = false;

		} else {

			acumuladorEdad = acumuladorEdad + edad;

		}




		cantidadDeIngresados++;

	} while (cantidadDeIngresados == 10);

	// B) El promedio de la edad de todos los participantes
	promedioEdad = cantidadDeIngresados / acumuladorEdad;

	// c) La cantidad de corredores de sexo femenino ok -> contadorFemeninos



	// MOSTRAR RESPUESTAS

	// 1 
	mensaje = "\n El nombre del hombre con mas tiempo: " + nombreMayorTiempo; 

	// 2
	mensaje += "\n El promedio de edad de los participantes: " + promedioEdad;

	// 3
	mensaje += "\n Cantidad de corredoras femeninas: " + contadorFemeninos;


alert(mensaje);


}