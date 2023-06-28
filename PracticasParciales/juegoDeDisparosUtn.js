
/*

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
cantidadDePasajes del jugador - Mayor de cantidadDePasajes.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y cantidadDePasajes del jugador que más muertes tuvo.


function mostrar(){

	// Declaramos variables
	var nombreDelJugador;
	var cantidadDePasajesDelJugador;
	var cantidadDeMuertes; 
	var cantidadDeBajas;
	var respuestaContinuar;
	var flagcantidadDePasajes;
	var cantidadDePasajesDelMasJoven;
	var nombreJugadorJoven;
	var jugadorMasBajas;
	var nombreJugadorMasBajas;
	var jugadorMenosMuertes;
	var nombreJugadorMenosMuertes;
	var contadorJugadores;
	var promedioBajas;
	var acumuladorDeBajas;

	// Asignamos valores
	flagcantidadDePasajes == true;


do {
	// ----------------------------- Validamos Nombre ---------------------------------------
	do {
			nombreDelJugador= prompt("Ingrese el nombre: ")
			nombreDelJugador= nombreDelJugador.toLowerCase();

		// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreDelJugador)); 
	// ----------------------------------------------------------------------------------------	

	// ------------------------------- Validamos cantidadDePasajes -------------------------------
	do {

		cantidadDePasajesDelJugador = prompt("Ingrese la cantidadDePasajes: ");
		cantidadDePasajesDelJugador = parseInt(cantidadDePasajesDelJugador);

		// isNan false = si es un numero / isNan true = no es un numero
	} while (isNaN(cantidadDePasajesDelJugador) || (cantidadDePasajesDelJugador < 17 || cantidadDePasajesDelJugador > 140));


	// ----------------------- Cantidad de bajas  ----------------------------------------
	do {

		cantidadDeBajas = prompt("Ingrese la cantidad de bajas: ");
		cantidadDeBajas = parseInt(cantidadDeBajas);

	} while (isNaN(cantidadDeBajas) || (cantidadDeBajas < 0));

	//-----------------------------------------------------------------------------------------

	// ----------------------- Cantidad de Muertes  ------------------------------------------
	do {

		cantidadDeMuertes = prompt("Ingrese la cantidad de muertes ");
		cantidadDeMuertes = parseInt(cantidadDeMuertes);

	} while (isNaN(cantidadDeMuertes) || (cantidadDeMuertes < 0));

	//-----------------------------------------------------------------------------------------



	// A) Nombre del jugador más joven.
	if (flagcantidadDePasajes == false) {
		
		if (cantidadDePasajesDelMasJoven > cantidadDePasajesDelJugador) {
			
			cantidadDePasajesDelMasJoven = cantidadDePasajesDelJugador;
			nombreJugadorJoven = nombreDelJugador;

		} else {

			cantidadDePasajesDelMasJoven = cantidadDePasajesDelMasJoven;
			nombreJugadorJoven = nombreJugadorJoven;
			
		}

	} else {
		
		cantidadDePasajesDelMasJoven = cantidadDePasajesDelJugador;
		nombreJugadorJoven = nombreDelJugador;
		
	}

	// B) El jugador que más bajas tuvo.
	if (flagcantidadDePasajes == false) {
		
		if (jugadorMasBajas > cantidadDeBajas) {
			
			jugadorMasBajas = cantidadDeBajas;
			nombreJugadorMasBajas = nombreDelJugador;

		} else {

			jugadorMasBajas = jugadorMasBajas;
			nombreJugadorMasBajas = nombreJugadorMasBajas;
			
		}

	} else {
		
		jugadorMasBajas = cantidadDeBajas;
		nombreJugadorMasBajas = nombreDelJugador;
		
	}

	// C) El jugador que menos muertes tuvo.
	if (flagcantidadDePasajes == false) {
		
		if (jugadorMenosMuertes > cantidadDeMuertes) {
			
			jugadorMenosMuertes = cantidadDeMuertes;
			nombreJugadorMenosMuertes = nombreDelJugador;

		} else {

			jugadorMenosMuertes = jugadorMenosMuertes;
			nombreJugadorMenosMuertes = nombreJugadorMenosMuertes;
			
		}

	} else {
		
		jugadorMenosMuertes = cantidadDeMuertes;
		nombreJugadorMenosMuertes = nombreDelJugador;
		
	}















	// Preguntamos si quiere seguir cargando mas datos
	respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
	respuestaContinuar = respuestaContinuar.toUpperCase();

} while (respuestaContinuar == 'SI');


// D) El promedio de bajas.
	promedioBajas = contadorJugadores * cantidadDeBajas;



}


*/
