/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, 
es necesario llevar un registro de la venta diaria de cafés, medialunas y churros, 
esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
-> Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
-> Informar cuál fue el producto menos vendido
*/


function mostrar() {


	// Declaramos variables
	var nombreCliente;
	var producto;
	var precioPorUnidad;
	var respuestaContinuar;
	var cantidadMedialunas;
	var cantidadChurros;
	var cantidadCafes;
	var productoMasVendido;
	var productoMenosVendido;
	var contadorMedialunas;
	var nombreClienteMasCompras;
	var mayorCantidadDeCompras;
	var precioBase;
	var precioFinal;
	var mensaje;

	// Asignamos valores
	mayorCantidadDeCompras = 0;
	cantidadDeIngresados = 0;
	cantidadMedialunas = 0;
	cantidadChurros = 0;
	cantidadCafes = 0;
	contador1 = 0;

	do {

		//Nombre del cliente a retirar
		do {
			nombreCliente = prompt("Ingrese el nombre: ");
			nombreCliente = nombreCliente.toLowerCase();

			// isNan false = si es un numero / isNan true = no es un numero
		} while (!isNaN(nombreCliente));

		//Tipo (Café / Medialunas /Churros)
		do {
			producto = prompt("Ingrese una de las opciones: Medialunas, Churros o Cafe ");
			producto = producto.toLowerCase();

		} while (!isNaN(producto) || (producto != "Medialunas" && producto != "Churros" && producto != "Cafe"));

		switch (producto) {
			case "Medialunas":

				cantidadMedialunas = cantidadMedialunas + cantidadProducto;
				precioPorUnidad = 60;
				break;

			case "Churros":

				cantidadChurros = cantidadChurros + cantidadProducto;
				precioPorUnidad = 50;
				break;

			default:

				cantidadCafes = cantidadCafes + cantidadProducto;
				precioPorUnidad = 100;
				break;
		}

		// Cantidad.
		do {

			cantidadProducto = prompt("Ingrese la cantidad: ");
			cantidadProducto = parseInt(cantidadProducto);

		} while (isNaN(cantidadProducto) || (cantidadProducto < 1 || cantidadProducto > 100));


		//Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
		//Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
		//Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
		//Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

		if (cantidadMedialunas == 24 || cantidadChurros == 24) {
			descuento = 0.30;
		} else if (cantidadMedialunas == 12 || cantidadChurros == 12) {
			descuento = 0.20;
		} else if (cantidadMedialunas == 10 || cantidadChurros == 10) {
			descuento = 0.1;
		} else if (cantidadMedialunas == 5 || cantidadChurros == 5 && cantidadCafes == 1) {
			descuento = 0.05;
		} else {
			descuento = 0;
		}


		// D
		precioBase = precioPorUnidad * cantidadProducto;
		precioFinal = precioBase * descuento;
		if (precio < 1) {

			precio = precio * 1.20;

		}

		// C 

		if (mayorCantidadDeCompras < cantidadProducto) {

			nombreClienteMasCompras = nombreCliente;
			mayorCantidadDeCompras = cantidadProducto;

		} else {

			nombreClienteMasCompras = nombreClienteMasCompras;
			mayorCantidadDeCompras = mayorCantidadDeCompras;

		}

		respuestaContinuar = prompt("¿Quiere ingresar otro jugador?: Responda SI o NO");
		respuestaContinuar = respuestaContinuar.toUpperCase();

	} while (respuestaContinuar == 'SI');



	// B
	if (cantidadMedialunas > cantidadChurros && cantidadMedialunas > cantidadCafes) {

		productoMasVendido = "Medialunas";
	}
	else {
		if (cantidadChurros > cantidadCafes) {
			productoMasVendido = "Churros";
		}
		else {
			productoMasVendido = "Cafes";
		}
	}

	// E
	if (cantidadMedialunas < cantidadChurros && cantidadMedialunas < cantidadCafes) {

		productoMenosVendido = "Medialunas";

	}
	else {
		if (cantidadChurros < cantidadCafes) {
			productoMenosVendido = "Churros";

		}
		else {
			productoMenosVendido = "Cafes";

		}
	}



	// A) Cuantas Medialunas se compraron durante toda la jornada.
	mensaje = "\n El total de medialunas compradas durante la jornada: " + cantidadMedialunas;

	// B) Cuál fue el producto con más unidades vendidas.
	mensaje += "\n El producto mas vendido: " + productoMasVendido;

	// C) -> Nombre del cliente, y tipo de producto con mayor cantidad de compras
	mensaje += "\n El nombre del cliente que mas compro: " + nombreClienteMasCompras + ", y el la cantidad que compro: " + mayorCantidadDeCompras;

	// D) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
	mensaje += "\n Precio final: " + precioFinal;

	// E) -> Informar cuál fue el producto menos vendido
	mensaje += "\n El producto menos vendido: " + productoMenosVendido;

}