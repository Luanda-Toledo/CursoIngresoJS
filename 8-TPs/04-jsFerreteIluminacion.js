/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

// SWITCH / IF

function CalcularPrecio() {

    //Declaramos las variables
    var cantidadDeLamparas;
    var marcaLamparas;
    var descuento;
    var valorConDescuento; // precio con descuento por unidad
    var precioLampara; // precio por lampara
    var precioFinal; //precio final del total de las lamparas con descuento
    var ingresosBrutos;
    var precioConIibb; //precio final mas ingresos brutos

    //Le asignamos valores a las variables
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marcaLamparas = document.getElementById("Marca").value;
    precioLampara = 35;

    // Segun cantidad de lamparas..
    switch (cantidadDeLamparas) {

        case 1:
        case 2:

            descuento = 0; // 0%
            break;

        case 3:

            if (marcaLamparas == "ArgentinaLuz") { // Descuento segun marca

                descuento = 0.15; //15%

            } else if (marcaLamparas == "FelipeLamparas") {

                descuento = 0.1; //10%

            } else {

                descuento = 0.05; //5%

            }

            break;

        case 4:

            if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") { // Descuento segun marca

                descuento = 0.25; //25%

            } else {

                descuento = 0.2; //20%

            }

            break;

        case 5:

            if (marcaLamparas == "ArgentinaLuz") { // Descuento segun marca

                descuento = 0.4; //40%

            } else {

                descuento = 0.3; //30%

            }

            break;

        default:

            descuento = 0.5; // 50% si compra 6 o mas
            break;

    }

    //Calculamos el precio con descuento por unidad
    valorConDescuento = precioLampara - precioLampara * descuento;

    //Mostramos el decuento a traves del cuadro
    document.getElementById("txtIdprecioDescuento").value = valorConDescuento;

    //Calculamos el precio final con descuento
    precioFinal = valorConDescuento * cantidadDeLamparas;

    if (precioFinal > 120) {

        //Calculamos los ingresos Brutos 10%
        ingresosBrutos = precioFinal * 0.1;
        //Calculamos el precio final que quedaria con los ingresos brutos
        precioConIibb = precioFinal + ingresosBrutos;

        //Mostramos el mensaje del precio con iibb y el valor del iibb
        alert(`Total $ ${precioConIibb}. Usted pago $ ${ingresosBrutos} de Ingresos Brutos.`);

    } else {

        //Mostramos el mensaje con el precio final con desuento pero sin iibb
        alert(`Total $ ${precioFinal}.`);

    }

}

