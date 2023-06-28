/*

 1- Un local de computación que se especializa en venta de insumos importados desea calcular ciertas métricas 
 en base a las ventas de sus productos.

Se ingresa de cada venta: (Ingresa mínimo 6 ventas)
-nombreDelProducto del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los $45500)


Se pide:
A- La más barata de las “Motherboards” con su importe .
B- De la venta más cara, el nombreDelProducto del producto.
C- El importe promedio del total.
D- La cantidad de ventas online que sean de “Discos” y cuesten menos de $945.
*/

function mostrar() {

	// DECLARAMOS VARIABLES
	var nombreDelProducto;//
	var generoDeProducto;//
	var tipoDeVenta;//
	var importeIngresado;//
	var contadorIngresados;//
	var banderaMotherboardMasBarata;//
	var banderaPrecioMasCaro;//
	var nombreProductoMasCaro;//
	var precioVentaaMasCaro;//
	var nombreMOtherboardMasBarata;//
	var precioMotherboardMasBarata;//
	var importePromedioTotal;
	var aculadorDePreciosProductosIngresados;//
	var contadorDiscosOnline;//
	var respuestaContinuar;//

	// ASIGNAMOS VALORES
	contadorIngresados = 0;
	banderaMotherboardMasBarata = true;
	banderaPrecioMasCaro = true;
	aculadorDePreciosProductosIngresados = 0;
	contadorDiscosOnline = 0;

	do {

		// VALIDACIONES
		do {
			nombreDelProducto = prompt("Ingrese el nombre: ");
			nombreDelProducto = nombreDelProducto.toLowerCase();

		} while (!isNaN(nombreDelProducto));

		do {
			generoDeProducto = prompt("Ingrese una de las opciones: memorias, discos o matherboard ");
			generoDeProducto = generoDeProducto.toLowerCase();

		} while (!isNaN(generoDeProducto) || (generoDeProducto != "memorias" && generoDeProducto != "discos" && generoDeProducto != "matherboard"));

		do {
			tipoDeVenta = prompt("Ingrese el tipo de venta: online o local");
			tipoDeVenta = tipoDeVenta.toLowerCase();

		} while (!isNaN(tipoDeVenta) || (tipoDeVenta == "online" && tipoDeVenta == "local"));

		do {

			precioIngresado = prompt("Ingrese el importe: ");
			precioIngresado = parseInt(precioIngresado);

		} while (isNaN(precioIngresado) || (precioIngresado < 0 || importeIngresado > 45500));

		// C
		aculadorDePreciosProductosIngresados += aculadorDePreciosProductosIngresados;

		switch (generoDeProducto) {
			case "motherboard":
				// A - La más BARATA de las “Motherboards” con su importe .
				if (banderaMotherboardMasBarata == true) {

					nombreMOtherboardMasBarata = nombreDelProducto;
					precioMotherboardMasBarata = precioIngresado;
					banderaMotherboardMasBarata = false;

				} else {

					if (precioMotherboardMasBarata > importeIngresado) {

						nombreMOtherboardMasBarata = nombreDelProducto;
						precioMotherboardMasBarata = importeIngresado;

					}

				}

				break;
			case "discos":

				// D - La cantidad de ventas online que sean de “Discos” y cuesten menos de $945.
				if (tipoDeVenta == "online" && importeIngresado < 945) {
					contadorDiscosOnline++;
				}

				break;
		}

		// B - De la venta más CARA, el nombreDelProducto del producto.
		if (banderaPrecioMasCaro == true) {

			nombreProductoMasCaro = nombreDelProducto;
			precioVentaaMasCaro = precioIngresado;
			banderaPrecioMasCaro = false;
			
		} else {

			if (precioVentaaMasCaro < importeIngresado) {

				nombreProductoMasCaro = nombreDelProducto;
				precioVentaaMasCaro = precioIngresado;

			}
			
		}

		contadorIngresados++;

		respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (contadorIngresados > 6 || respuestaContinuar == 'SI');

	// C - El importe promedio del total.
	if (contadorIngresados > 0) {
		
		importePromedioTotal = aculadorDePreciosProductosIngresados / contadorIngresados;
		document.write("El resultado del promedio es: " + imptePromedioTotal);

	} else {
		
		document.write("No se pudo realizar dicho calculo");

	}

	// Mostramos las respuestas
	document.write("La mas barata de las Matherboard con su importe:" + nombreMOtherboardMasBarata + precioMotherboardMasBarata);
	document.write("De la venta mas cara, el nombre del producto: " + precioVentaaMasCaro + nombreProductoMasCaro);
	document.write("La cantidad de ventas online que sean discos y cuesten menos de $945: " + contadorDiscosOnline);



}