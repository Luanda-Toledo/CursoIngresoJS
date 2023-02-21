/*
	Al presionar el Botón, mostrar un número
	 Random del 1 al 10 inclusive.
*/
function mostrar()
{
	// Declaro la variable
	var numeroAleatorio;
	var rango;
	var numeroMaximo;
	var numeroMinimo;

	// Asignamos valores a las variables
	numeroMaximo = 10;
	numeroMinimo = 1;
	rango = (numeroMaximo - numeroMinimo) + numeroMinimo;

	// Pedimos un numero aleatorio y lo redondeamos
	numeroAleatorio = Math.round(Math.random() * rango);

	// Mostramos el numero aleatorio en pantalla
	alert(numeroAleatorio);

	/*
		Como Math.random nos devuelve valores entre 0 y 0.999,
		lo que vamos a hacer es que cuando random nos devuelva 
		el valor mas chico que es el cero yo pueda mostrar el 
		valor mas chico de mi rango que es 1 en este caso, y que 
		cuando me devuelva los valores mas grandes como 0.999 quiero 
		mostrar el valor mas grande de mi rango que es 10, y en el
		medio quiero mostrar los valores que estan entre 1 y 10.
		Para ello la funcion round necesita que le indiquemos dentro
		del parentesis lo que va a redondear, por lo cual primero
		se van a ejecutar las operaciones que se encuentran dentro 
		del parentesis ya que eso es lo que redondea.
		Por lo cual, primero se ejcuta la resta del maximo y el minimo, 
		luego se multiplica por un numero aleatorio, y luego se le suma 
		el minimo para que en caso de que sea 0 el resultado del num
		aleatorio y sea multiplicado por cualquier numero nos de 0 y el 
		minimo es 1, es decir para que se mantenga dentro del rango.
		En este caso las operaciones para definir dentro de que rango 
		se van a mantener los numeros aleatorios, estan guardados dentro
		de la variable rango.
	*/

}//FIN DE LA FUNCIÓN

/*
	Para crear un numero random podemos usar:
	Biblioteca: Math -> js nos provee muchas constantes 
	y funciones matematicas agrupadas como propiedades y
	metodos de esa clase 
	Clase: .random -> Esta clase nos da un numero aleatorio,
	pero no es cualquier num aleatorio, lo que me ofrece js
	es un valor aleatorio ente 0 y 0.999999
	Ejemplo: Match.Random()
	Consola: 0.645256869536515
*/
/* 
	Manipular los valores para que nos tire valores aleatorios
	redondeados:

	Math.round() -> Lo redondea al entero mas cercano, 
	por ej: si era 8.5 lo redondea a 9, si era 8.49 lo redondea a 8

	Math.ceil() -> por mas que tengamos 8.1 ; 8.2 ; 8.8 
	lo redondea al ceil (al techo), es decir lo redondea para 
	arriba siempre, y nos quedarian cualquiera de esos tres ejemplos
	redondeados a 9

	Math.floor() -> floor significa piso en ingles, y lo que hace
	es redondear el dato ya sea 8.1 ; 8.2 ; 8.8 a 8, 
	es decir redondea para abajo siempre.
*/
