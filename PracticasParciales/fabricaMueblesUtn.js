/******************************************************************************
 * Apellido: Toledo Viera
 * Nombre: Luanda Gisel
 * Comisión: K
 * Tutor:
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.
*/
function mostrar(){

	// Declaramos variables
	var nombreDelMueble;
	var peso;
	var precio;
	var materialDelMueble;
	var respuestaContinuar;
	var acumuladorPrecios;
	var promedioVendidos;
	var contadorMueblesDeMadera;
	var contadorMueblesMetal;
	var contadorMueblesVidrio;
	var porcentajeMadera;
	var porcentajeMetal;
	var porcentajeVidrio;
	var masPesadoMadera;
	var masPesadoMetal;
	var masPesadoVidrio;
	var muebleMasLiviano;
	var acumuladorRecaudado;
	var altura;
	var aumento;
	var descuento; 
	var precioFinal;
	var cantidadDeIngresados;
	var acumuladorRecaudoMadera;
	var muebleMasAlto;
	var mensaje;

	// Asignamos valores

	cantidadDeIngresados = 0;
	acumuladorPrecios = 0;
	contadorMueblesDeMadera = 0;
	contadorMueblesMetal = 0;
	contadorMueblesVidrio = 0;
	acumuladorRecaudado = 0;
	acumuladorRecaudoMadera = 0;
	aumento = 1.15;
	descuento = 0.10;

	do {

		do {
			nombreDelMueble = prompt("Ingrese el nombre: ");
			nombreDelMueble = nombreDelMueble.toLowerCase();

		// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreDelMueble));

		do {
			materialDelMueble = prompt("Ingrese una de las opciones: Madera, Metal y Vidrio ");
			materialDelMueble = materialDelMueble.toLowerCase();

		// isNan false = si es un numero / isNan true = no es un numero
		// Que no sea un numero y que sea solo una de las tres opciones dadas
		} while (!isNaN(materialDelMueble) || (materialDelMueble!= "madera" && materialDelMueble != "metal" && materialDelMueble != "vidrio"));

		do {

			peso = prompt("Ingrese la peso: ");
			peso = parseFloat(peso);
	
			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(peso) || (peso < 17 || peso > 110));


		do {

			altura = prompt("Ingrese la altura: ");
			altura = parseFloat(altura);
	
			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(altura) || (altura < 0 || altura > 100)); 

		do {

			anchura = prompt("Ingrese la anchura: ");
			anchura = parsoFloat(peso);
	
			// isNan false = si es un numero / isNan true = no es un numero(letras)
		} while (isNaN(anchura) || (anchura < 17 || anchura > 110));

		do {
			// Solicitamos los valores al usuario atraves de promp
			precio = prompt("Igrese el precio");
			precio = parseInt(precio);
	
		} while (isNaN(peso) || precio < 1000);


		// Impuesto y descuento
	
			if (materialDelMueble == "madera") {
				precioFinal = precio * aumento;
				acumuladorPrecios = acumuladorPrecios + precioFinal;
			} else {
				precioFinal = precio * descuento;
				acumuladorPrecios = acumuladorPrecios + precioFinal;
			}

			switch (materialDelMueble) {
				case "madera":

					contadorMueblesDeMadera++;
					if (acumuladorRecaudoMadera < precio) {
						acumuladorRecaudoMadera = acumuladorRecaudoMadera + precio;
					}
					if (masPesadoMadera < peso) {
						masPesadoMadera = peso;
					} else {
						masPesadoMadera = masPesadoMadera;
					}

					break;
				case "metal":

					contadorMueblesMetal++;
					if (masPesadoMetal < peso) {
						masPesadoMetal = peso;
					} else {
						masPesadoMetal = masPesadoMetal;
					}

					break
				default:
					contadorMueblesVidrio++;
					if (masPesadoVidrio < peso) {
						masPesadoVidrio = peso;
					} else {
						masPesadoVidrio = masPesadoVidrio;
					}
					break;
			}


			if (acumuladorRecaudado < precio) {
				acumuladorRecaudado = acumuladorRecaudado + precio;
			} 

			if (materialDelMueble == "metal") {
				if (muebleMasAlto < altura) {
					muebleMasAlto = altura;
				} else {
					muebleMasAlto = muebleMasAlto;
				}
			} 

			if (masPesadoMadera < masPesadoMetal && masPesadoMadera < masPesadoVidrio) {
				muebleMasLiviano = "Madera";
			}
			else {
				if (masPesadoMetal < masPesadoVidrio) {
					muebleMasLiviano = "Metal";
				}
				else {
					muebleMasLiviano = "Vidrio";
				}
			}
	

		cantidadDeIngresados++;

		respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');


	// A) Precio promedio por mueble vendido
	promedioVendidos = acumuladorPrecios / cantidadDeIngresados;

	// B)  Cantidad total de muebles de madera ok

	// C)  El mueble de metal más alto ok

	// D)  El mueble más liviano ok

	// E) Porcentaje de muebles de cada tipo de material
	porcentajeMadera = cantidadDeIngresados / contadorMueblesDeMadera * 100;
	porcentajeMetal = cantidadDeIngresados / contadorMueblesMetal * 100;
	porcentajeVidrio = cantidadDeIngresados / contadorMueblesVidrio * 100;


	// F) Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos); ok

	// G) Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos) ok


}