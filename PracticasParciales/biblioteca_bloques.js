/* 
 * Apellido: Toledo Viera
 * Nombre: Luanda Gisel
 * Comisión: K
*/

function mostrar() {

	// Declaramos variables
	var nombre;
	var peso;
	var respuestaContinuar;
	var acumulador1;
	var contador1;
	var contadorDeIngresados;
	var flag;
	var mensaje;

	// Asignamos valores
	flag = true;
	contadorDeIngresados = 0;
	acumulador1 = 0;
	contador1 = 0;
}
// ----------------------------- Validamos Nombre ---------------------------------------
do {
	nombreIngresado = prompt("Ingrese el nombre: ");
	nombreIngresado = nombreIngresado.toLowerCase();

} while (!isNaN(nombreIngresado));
// ----------------------------------------------------------------------------------------
// ----------------------- Validamos entre tres opciones ----------------------------------
do {
	algo = prompt("Ingrese una de las opciones: UNO, DOS o TRES ");
	algo = algo.toLowerCase();

} while (!isNaN(algo) || (algo != "UNO" && algo != "DOS" && algo != "TRES"));

// validamos dos opciones
do {
	tipoDeVenta = prompt("Ingrese el tipo de venta: online o local");
	tipoDeVenta = tipoDeVenta.toLowerCase();

} while (!isNaN(tipoDeVenta) || (tipoDeVenta == "online" && tipoDeVenta == "local"));

// Validamos 5 opciones
do {
	tipoDee = prompt("Ingrese una de las opciones: UNO, DOS, TRES, CUATRO o CINCO ");
	tipoDee = tipoDee.toLowerCase();

} while (!isNaN(tipoDee) || (tipoDee != "UNO" && tipoDee != "DOS" && tipoDee != "TRES" && tipoDee != "CUATRO" && tipoDee != "CINCO"));

// -----------------------------------------------------------------------------------------	
// ---------------------------------- Validamos Edad --------------------------------------
do {

	edad = prompt("Ingrese la edad: ");
	edad = parseInt(edad);

	// isNan false = si es un numero / isNan true = no es un numero(letras)
} while (isNaN(edad) || (edad < 17 || edad > 110));

// --------------------------------------------------------------------------------
// -------------------------------- VALIDAR SEXO ----------------------------------
do {
	sexoIngresado = prompt("Sexo, “M” para masculino y “F” para femenino");

} while (!(sexoIngresado == "F" || sexoIngresado == "M"));

// --------------------------------------------------------------------------------
// -------------------------- VALIDAR QUE SEA UN NUMERO ---------------------------

do {
	numero = prompt("Ingrese ");
	numero = parseInt(numero);

} while (isNaN(numero) == true);

// ----------------------------------------------------------------------------------
// --------------------------------------- Peso ------------------------------------
do {

	peso = prompt("Ingrese la peso: ");
	peso = parseFloat(peso);

	// isNan false = si es un numero / isNan true = no es un numero(letras)
} while (isNaN(peso) || (peso < 20 || peso > 300));

// ---------------------------------------------------------------------------------
// ------------------------------ VALIDAR PRECIO INGRESADO --------------------------
do {

	precioIngresado = prompt("Ingrese el importe: ");
	precioIngresado = parseInt(precioIngresado);

} while (isNaN(precioIngresado) || precioIngresado < 0);

// -----------------------------------------------------------------------------------
//------------------------------VALIDAMOS CANTIDAD INGRESADA -------------------------
do {

	cantidad = prompt("Ingrese la cantidad: ");
	cantidad = parseInt(cantidad);

} while (isNaN(cantidad) || cantidad < 0);

// -----------------------------------------------------------------------------------
// -> Preguntamos si quiere seguir cargando mas datos --------------------------------
do {

	contadorDeIngresados++;

	respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
	respuestaContinuar = respuestaContinuar.toUpperCase();

} while (respuestaContinuar == 'SI');

//Si necesitamos ingresar si o si mas de 6
do {
	contadorIngresados++;

	respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
	respuestaContinuar = respuestaContinuar.toUpperCase();

} while (contadorIngresados > 6 || respuestaContinuar == 'SI');

// Si tienen que ingresar una cantidad exacta usamos un for
for (var i = 0; i < 11; i++) {
}

// -----------------------------------------------------------------------------------
// -------------  Acumulador de precios: ---------------------------------------------
acumuladorDePreciosIngresados += precioIngresado;

//PORCENTAJES

porcentaje1 = contador1 * 100 / contadorPrincipal;
porcentaje2 = contador3 * 100 / contadorPrincipal;
porcentaje3 = contador2 * 100 / contadorPrincipal;

//PROMEDIO

contadorDeAlgo += cantidadEseAlgoIngresado; //adentro del for/while
promedio = contadorDeAlgo / contadorPrincipal; //afuerta del for/while
// -----------------------------------------------------------------------------------
// ---------------------- ESTRUCTURA DE BANDERA ------------------------------------

if (flag == false) {

	flag = true;
} else {
	if (condicionMaxima < condicion) {

	} else {
		if (condicionMinima > condicion) {

		}
	}
}
// --------------------------------------------------------------------------------
// ------------------------------- Descuento segun tipo -------------------------------
// Dentro de do while principal
precioBase = precioPorUnidad * cantidad;
if (tipo == "ejecutiva") {
	porcentaje = 1.20;
}
else {
	if (tipo == "primera clase") {
		porcentaje = 1.35;
	}
	else {
		porcentaje = 1;
	}
}
precioBase = precioPorUnidad * cantidad;
precioFinal = precioBase * porcentaje;
alert("El precio segun el tipo es de: " + precioFinal);
// ---------------------------------------------------------------------------------------
//------------------------- El total acumulado por persona. -------------------------------
// Dentro del do while principal
switch (nombre) {
	case "nombre1":
		acumulador1 = acumulador1 + precioFinal;
		break;
	case "nombre2":
		acumulador2 = acumulador2 + precioFinal;
		break;
	case "nombre3":
		acumulador3 = acumulador3 + precioFinal;
		break;
}
// ------------------------------------------------------------------------------------------
// ------- El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. --------
// Dentro del do while principal
if (tipoDeViaje == "Internacional") {
	contadorViajesInternacionales++;
}
else {
	contadorViajesNacionales++;
}


// Fuera del do while principal
porcentajeInternacional = contadorViajesInternacionales / cantidadDeIngresados * 100;
porcentajeNacional = contadorViajesNacionales / cantidadDeIngresados * 100;
// -------------------------------------------------------------------------------------------
//CUAL ES EL MAYOR ENTRE 3 CONDICIONES

if (condicion1 > condicion2 && condicion1 > condicion3) {
	elQueTieneMayorCantidadEs = condicion1;
} else {
	if (condicion2 > condicion3) {
		elQueTieneMayorCantidadEs = condicion2;
	} else {
		elQueTieneMayorCantidadEs = condicion3;
	}
}

// ------ El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. ----
// Comparaciones fuera del do while principal

if (acumulador1 > acumulador2 && acumulador1 > acumulador3) {
	vendedorConMayorRecaudacion = "nombre1";
	vendedorConMayorRecaudacionEnPesos = acumulador1;
}
else {
	if (acumulador2 > acumulador3) {
		vendedorConMayorRecaudacion = "nombre2";
		vendedorConMayorRecaudacionEnPesos = acumulador2;
	}
	else {
		vendedorConMayorRecaudacion = "nombre3";
		vendedorConMayorRecaudacionEnPesos = acumulador2;
	}
}
// -------------------------------------------------------------------------------------------
//  El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
// Dentro del do while principal
switch (tipoDeComida) {
	case "dulce":
		contadorDulce++; // +8
		break;
	case "salado":
		contadorSalado++; // +6
		break;
	case "agridulce":
		contador3++; // 0
		break;
}

// Fuera del do while principal
//Calculo el promedio
promedioDulce = cantidadTotalDeComidas / contadorDulce;
//     total      =       14      /    8; -> 1.5% de las personas que completaron el formulario les gusta lo dulce

promedio2 = cantidadTotal / contador2;
promedio3 = cantidadTotal / contador3;

//  -------------------------------------------------------------------------------------------
// ----------- En caso de haber excedido el monto de $1 sumarle un 10% de impuestos. ---------------------
if (precio < 1) {

	precio = precio * 1.10;

}

// aumento va 1.algo //  descuento va 0.algo
//  --------------------------------------------------------------------------------------------------------
// --------------------------- Descuento segun cantidad ------------------------------------------------

if (cantidad1 == 1 || cantidad2 == 1) {
	descuento = 0;
} else if (cantidad1 == 1 || cantidad2 == 1) {
	descuento = 0;
} else if (cantidad1 == 1 || cantidad2 == 1) {
	descuento = 0;
} else if (cantidad1 == 1 || cantidad2 == 1 && cantidadDeCafe == 1) {
	descuento = 0;
} else {
	descuento = 0;
}
// -------------------------------------------------------------------------------------------------------------
// ------------------------- MOSTRAR MENSAJE --------------------------------------------------------------------------
//Fuera del do while

mensaje = "\n  " + A;
mensaje += "\n  " + B;
mensaje += "\n  " + C;
mensaje += "\n  " + D;
mensaje += "\n  " + E;
mensaje += "\n  " + F;
mensaje += "\n  " + G;
mensaje += "\n  " + H;
mensaje += "\n  " + I;

alert(mensaje);

// Usando document.write
document.write("\n : " + A);
document.write("\n : " + B);
document.write("\n : " + C);
document.write("\n : " + D);
document.write("\n : " + E);


// --------------------------------------------------------------------------------------------------------------------------
// ----------------------------------- OTRAS VALIDACIONES ---------------------------------------
//VALIDAR UN NUMERO ENTRE "A" Y "B"

do {
	numero = prompt("Ingrese ");
	numero = parseInt(numero);

} while (isNaN(numero) == true || (numero < a || numero > b));

//VALIDAR UN NUMERO MAYOR A "A"

do {
	numero = prompt("Ingrese ");
	numero = parseInt(numero);
} while (isNaN(numero) == true || (numero < a));

//VALIDAR UN NUMERO MENOR A "A"

do {
	numero = prompt("Ingrese ");
	numero = parseInt(numero);
} while (isNaN(numero) == true || (numero > a));

// ------------------------------------------------------------------------------------------------

