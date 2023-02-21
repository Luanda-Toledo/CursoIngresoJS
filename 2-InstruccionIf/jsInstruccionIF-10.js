/*
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4.
*/

function mostrar() {

	// Declaro la variable
	var calificacionDelExamen;
	var rango;
	var numeroMaximo;
	var numeroMinimo;
	var mensajeExelente;
	var mensajeAprobado;
	var mensajeDesaprobado;
	var mensajeConNota;

	// Asignamos valores a las variables
	mensajeDesaprobado = "¡Vamos, la proxima se puede!"; 
	mensajeAprobado = "APROBO"; 
	mensajeExelente = "EXELENTE"; 
	numeroMaximo = 10;
	numeroMinimo = 1;
	rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

	// Pedimos un numero aleatorio y lo redondeamos
	calificacionDelExamen = Math.round(Math.random() * rango); //CALIFICACION DEL EXAMEN ALEATORIA

	// Una vez obtenida la nota la guardamos en la variable:
	mensajeConNota = `Su calificacion fue un ${calificacionDelExamen}. `;

	// CONDICION para mostrar mensajes segun la nota
	if ( calificacionDelExamen > 8){

		alert(mensajeConNota + mensajeExelente); // 9 - 10

	} else if ( calificacionDelExamen > 3){

		alert(mensajeConNota + mensajeAprobado); // mayor a 4

	} else {

		alert(mensajeConNota + mensajeDesaprobado); // menor a 4

	}

}//FIN DE LA FUNCIÓN