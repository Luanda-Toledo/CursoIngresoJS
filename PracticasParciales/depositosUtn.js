/*
function mostrar() {
	var totalAvellaneda = 20000;
	var totalCaba = 25000;
	var totalLanus = 15000;

	var pesoAvellaneda;
	var pesoCaba;
	var pesoLanus;
	var pesoProducto;
	var descripcionProducto;
	var deposito;
	var banderaPrimerPesoIngresado;
	var pesoMaximo;
	var productoMaximo;
	var ingresosCaba;
	var ingresosAvellaneda;
	var ingresosLanus;
	var mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCaba = 0;
	pesoLanus = 0;
	ingresosCaba = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do {

		do {

			deposito = prompt("Ingrese el deposito");
			deposito = deposito.toLowerCase();

		} while (deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do {

			descripcionProducto = prompt("Ingrese la descripcion del producto");

		} while (!isNaN(descripcionProducto));

		do {

			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);

		} while (isNaN(pesoProducto));

		if (banderaPrimerPesoIngresado || pesoProducto > pesoMaximo) {

			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if (deposito == "caba") {

			if ((pesoCaba + pesoProducto) > totalCaba) {
				alert("Deposito lleno");
				continue;
			}
			else {

				pesoCaba += pesoProducto;
				ingresosCaba++;
			}

		} else {

			if (deposito == "avellaneda") {

				if ((pesoAvellaneda + pesoProducto) > totalAvellaneda) {

					alert("Deposito lleno");
					continue;

				} else {

					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;

				}
			}
			else {
				if ((pesoLanus + pesoProducto) > TOTAL_LANUS) {

					alert("Deposito lleno");
					continue;

				} else {

					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}

		}

	} while (confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCaba + pesoLanus);

	//B:
	if (ingresosAvellaneda > ingresosCaba && ingresosAvellaneda > ingresosLanus) {
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else {
		if (ingresosCaba > ingresosLanus) {
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else {
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if (pesoAvellaneda > pesoCaba && pesoAvellaneda > pesoLanus) {
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else {
		if (pesoCaba > pesoLanus) {
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else {
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / totalAvellaneda + "\nCABA: % " + pesoCaba * 100 / totalCaba + "\nLanus: % " + pesoLanus * 100 / totalLanus;

	alert(mensajeDeSalida);
}

referencia vista en clase

*/