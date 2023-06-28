/*
El equipo de E-Sports de la UTN precisa registrar los resultados de los 5 jugadores titulares que jugaron en contra de UADE E-Sports en el Torneo “Valorant Universidades CABA”.
Para esto en el programa se debe ingresar.
Los jugadores realizan asesinatos normales (Tiros a cualquier parte del cuerpo) y Asesinatos especiales (Tiros únicamente a la cabeza) estos deben estar separados dado que los especiales son más valiosos y hablan de una mayor habilidad.

	A) Nombre del jugador.
	B) Rol dentro del juego (Validar [Iniciador, Centinela, Duelista])
	B) Cantidad de asesinatos generales (No puede ser negativo ni mayor a 100)
	C) Cantidad de asesinatos especiales (No puede ser negativo ni mayor a 100)
	D) Cantidad de muertes (No puede ser negativo ni mayor a 24)
	E) Cantidad de habilidades Definitivas usadas (No puede ser negativo ni mayor a 8)
	F) Cantidad de asistencias en asesinatos. 

Luego del ingreso de los respectivos datos se debe mostrar los resultados de los siguientes puntos:

Nombre, Muertes, Cantidad de habilidades definitivas, y cantidad de asesinatos especiales (con tiros a la cabeza) del jugador con la mayor cantidad de asesinatos generales.
Nombre, Muertes, del jugador con la menor cantidad de asesinatos generales.
Porcentaje de asesinatos especiales sobre el total de asesinatos.
Cuál fue el rol que tuvo más cantidad de asesinatos especiales.
Encontrar el jugador y obtener el NOMBRE y ROL, del MVP (Most Valuable Player), para esto dicho jugador tiene que ser de los roles (Iniciador o Duelista) tener al menos: 20 Asesinatos generales, 8 Asesinatos especiales, y 3 habilidades definitivas usadas.
*/
function mostrar() {

	// Declaramos variables
	var contadorIniciador;
	var contadorCentinela;
	var contadorDuelista;
	var nombreDelJugador;
	var rolDentroDelJuego;
	var cantidadDeAsesinatosEspeciales;
	var cantidadDeAsesinatosGenerales;
	var cantidadDeAsistencias;
	var cantidadHabilidadesDefinitivasUsadas;
	var cantidadDeMuertes;
	var nombreJugadorConMayorCantidadDeAsesinatosGenerales;
	var muertesJugadorConMayorCantidadDeAsesinatosGenerales;
	var cantidadHabilidadesDefinitivasJugadorConMayorCantidadDeAsesinatosGenerales;
	var cantidadDeAsesinatosEspecialesJugadorConMayorCantidadDeAsesinatosGenerales;
	var cantidadAsesinatosGeneralesJugadorConMayorCantidadDeAsesinatosGenerales;
	var nombreJugadorConMenorCantidadDeAsesinatosGenerales;
	var muertesJugadorConMenorCantidadDeAsesinatosGenerales;
	var menorCantidadDeAsesinatosGenerales;
	var acumuladorDeAsesinatos;
	var acumuladorAsesinatosEspeciales;
	var porcentajeDeAsesinatosEspecialesSobreElTotalDeAsesinatos;
	var rolConMayorCantidadDeAsesinatos;
	var nombreJugadorMvp;
	var rolJugadorMvp;

	// Asignamos valores
	acumuladorDeAsesinatos = 0;
	acumuladorAsesinatosEspeciales = 0;
	contadorCentinela = 0;
	contadorDuelista = 0;
	contadorIniciador = 0;



	for (var i = 0; i < 5; i++) {

		// VALIDAMOS nombreDelJugador
		do {
			nombreDelJugador = prompt("Ingrese el nombreDelJugador: ");
			nombreDelJugador = nombreDelJugador.toLowerCase();

		} while (!isNaN(nombreDelJugador));

		// VALIDAMOS Rol dentro del juego (Validar [Iniciador, Centinela, Duelista]) 
		do {
			rolDentroDelJuego = prompt("Ingrese una de las opciones: iniciador, centinela o duelista ");
			rolDentroDelJuego = rolDentroDelJuego.toLowerCase();

		} while (!isNaN(rolDentroDelJuego) || (rolDentroDelJuego != "iniciador" && rolDentroDelJuego != "centinela" && rolDentroDelJuego != "duelista"));

		// VALIDAMOS Cantidad de asesinatos generales (No puede ser negativo ni mayor a 100)
		do {
			cantidadDeAsesinatosGenerales = prompt("Ingrese la cantidad De Asesinatos Generales: ");
			cantidadDeAsesinatosGenerales = parseInt(cantidadDeAsesinatosGenerales);

		} while (isNaN(cantidadDeAsesinatosGenerales) || (cantidadDeAsesinatosGenerales < 0 && cantidadDeAsesinatosGenerales > 100));

		// Cantidad de asesinatos especiales (No puede ser negativo ni mayor a 100)
		do {
			cantidadDeAsesinatosEspeciales = prompt("Ingrese la cantidad De Asesinatos Especiales: ");
			cantidadDeAsesinatosEspeciales = parseInt(cantidadDeAsesinatosEspeciales);

		} while (isNaN(cantidadDeAsesinatosEspeciales) || (cantidadDeAsesinatosEspeciales < 0 && cantidadDeAsesinatosEspeciales > 100));

		// Cantidad de muertes (No puede ser negativo ni mayor a 24)
		do {
			cantidadDeMuertes = prompt("Ingrese la cantidad De Muertes: ");
			cantidadDeMuertes = parseInt(cantidadDeMuertes);

		} while (isNaN(cantidadDeMuertes) || (cantidadDeMuertes < 0 && cantidadDeMuertes > 24));

		// Cantidad de habilidades Definitivas usadas (No puede ser negativo ni mayor a 8)
		do {
			cantidadHabilidadesDefinitivasUsadas = prompt("Ingrese la cantidad Habilidades Definitivas Usadas: ");
			cantidadHabilidadesDefinitivasUsadas = parseInt(cantidadHabilidadesDefinitivasUsadas);

		} while (isNaN(cantidadHabilidadesDefinitivasUsadas) || (cantidadHabilidadesDefinitivasUsadas < 0 && cantidadHabilidadesDefinitivasUsadas > 8));

		// Cantidad de asistencias en asesinatos. 
		do {
			cantidadDeAsistencias = prompt("Ingrese la cantidad De Asistencias: ");
			cantidadDeAsistencias = parseInt(cantidadDeAsistencias);

		} while (isNaN(cantidadDeAsistencias) || cantidadDeAsistencias < 0);

		// C
		acumuladorDeAsesinatos = acumuladorDeAsesinatos + cantidadDeAsesinatosEspeciales + cantidadDeAsesinatosGenerales;
		acumuladorAsesinatosEspeciales += cantidadDeAsesinatosEspeciales;

		//Nombre, Muertes, Cantidad de habilidades definitivas,
		// y cantidad de asesinatos especiales (con tiros a la cabeza) del 
		// jugador con la mayor cantidad de asesinatos generales.
		if (i == 0) {

			// A
			nombreJugadorConMayorCantidadDeAsesinatosGenerales = nombreDelJugador;
			muertesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeMuertes;
			cantidadHabilidadesDefinitivasJugadorConMayorCantidadDeAsesinatosGenerales = cantidadHabilidadesDefinitivasUsadas;
			cantidadDeAsesinatosEspecialesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosEspeciales;
			cantidadAsesinatosGeneralesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosGenerales;

			// B - Nombre, Muertes, del jugador con la menor cantidad de asesinatos generales.
			nombreJugadorConMenorCantidadDeAsesinatosGenerales = nombreDelJugador;
			muertesJugadorConMenorCantidadDeAsesinatosGenerales = cantidadDeMuertes;
			menorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosGenerales;

		} else {

			if (cantidadAsesinatosGeneralesJugadorConMayorCantidadDeAsesinatosGenerales < cantidadDeAsesinatosGenerales) { // A

				nombreJugadorConMayorCantidadDeAsesinatosGenerales = nombreDelJugador;
				muertesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeMuertes;
				cantidadHabilidadesDefinitivasJugadorConMayorCantidadDeAsesinatosGenerales = cantidadHabilidadesDefinitivasUsadas;
				cantidadDeAsesinatosEspecialesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosEspeciales;
				cantidadAsesinatosGeneralesJugadorConMayorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosGenerales;

			}

			if (menorCantidadDeAsesinatosGenerales > cantidadDeAsesinatosGenerales) { // B

				nombreJugadorConMenorCantidadDeAsesinatosGenerales = nombreDelJugador;
				muertesJugadorConMenorCantidadDeAsesinatosGenerales = cantidadDeMuertes;
				menorCantidadDeAsesinatosGenerales = cantidadDeAsesinatosGenerales;
			}

		}

		// D- Cuál fue el rol que tuvo más cantidad de asesinatos especiales.
		switch (rolDentroDelJuego) {
			case "centinela":
				contadorCentinela++;
				break;
			case "duelista":
				contadorDuelista++;
				break;
			case "iniciador":
				contadorIniciador++;
				break;
		}
		if (contadorCentinela > contadorDuelista && contadorCentinela > contadorIniciador) {

			rolConMayorCantidadDeAsesinatos = "Centinela";

		} else {

			if (contadorDuelista > contadorIniciador) {

				rolConMayorCantidadDeAsesinatos = "Duelista";

			} else {

				rolConMayorCantidadDeAsesinatos = "Iniciador";
			}
		}

		// Encontrar el jugador y obtener el NOMBRE y ROL, del MVP (Most Valuable Player), para esto dicho jugador tiene 
		// que ser de los roles (Iniciador o Duelista) tener al menos: 20 Asesinatos generales, 8 Asesinatos especiales, 
		// y 3 habilidades definitivas usadas.
		if (rolDentroDelJuego == "iniciador" || rolDentroDelJuego == "duelista") {

			if (cantidadDeAsesinatosGenerales > 19 && cantidadDeAsesinatosEspeciales > 7 && cantidadHabilidadesDefinitivasUsadas > 3) {

				nombreJugadorMvp = nombreDelJugador;
				rolJugadorMvp = rolDentroDelJuego
			}

		}

	}

	// C-  Porcentaje de asesinatos especiales sobre el total de asesinatos.
	porcentajeDeAsesinatosEspecialesSobreElTotalDeAsesinatos = acumuladorAsesinatosEspeciales * 100 / acumuladorDeAsesinatos;



	// MOSTRAR RESPUESTAS
	document.write("\n Nombre, Muertes, Cantidad de habilidades definitivas, y cantidad de asesinatos especiales (con tiros a la cabeza) del jugador con la mayor cantidad de asesinatos generales: "
		+ nombreJugadorConMayorCantidadDeAsesinatosGenerales + muertesJugadorConMayorCantidadDeAsesinatosGenerales +
		cantidadDeAsesinatosEspecialesJugadorConMayorCantidadDeAsesinatosGenerales + cantidadAsesinatosGeneralesJugadorConMayorCantidadDeAsesinatosGenerales);
	document.write("\n Nombre, Muertes, del jugador con la menor cantidad de asesinatos generales: " + nombreJugadorConMenorCantidadDeAsesinatosGenerales + muertesJugadorConMenorCantidadDeAsesinatosGenerales + menorCantidadDeAsesinatosGenerales);
	document.write("\n Porcentaje de asesinatos especiales sobre el total de asesinatos: " + porcentajeDeAsesinatosEspecialesSobreElTotalDeAsesinatos);
	document.write("\n Cuál fue el rol que tuvo más cantidad de asesinatos especiales: " + rolConMayorCantidadDeAsesinatos);
	document.write("\n Encontrar el jugador y obtener el NOMBRE y ROL, del MVP (Most Valuable Player), para esto dicho jugador tiene que ser de los roles (Iniciador o Duelista) tener al menos: 20 Asesinatos generales, 8 Asesinatos especiales, y 3 habilidades definitivas usadas: "
		+ nombreJugadorMvp + rolJugadorMvp);

}
