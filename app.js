//Variables iniciales
let resultado = 0;
let ticket = "Detalle de la compra:\n";
let cantidadProductos = 0; // Variable para contar la cantidad de productos agregados

// Función para calcular el precio con IVA
function calcularPrecioConIVA(precio) {
  return precio * 1.21;
}

// Iteración del do-while para añadir productos
do {
  let producto = prompt("Ingrese el nombre del producto (o escriba 'salir' para terminar)").toLowerCase();

  if (producto === "salir") {
    break; // Salir del bucle si el usuario escribe 'salir'
  }

  let precio = Number(prompt("Ingrese el valor del producto"));

  let precioConIVA = calcularPrecioConIVA(precio);
  resultado += precioConIVA;
  cantidadProductos++;

  ticket += "\n" + producto + "\t$" + precioConIVA.toFixed(2) + " (IVA incluido)";

} while (true);

// Verificar si se aplica descuento por precio o por si supera la cantidad de 3 productos
if (resultado >= 150000 || cantidadProductos >= 3) {
  // Calcular precio con descuento del 15%
  let resultadoConDescuento = resultado * 0.85;

  // Mostrar ticket con información de compra + descuento
  alert(
    ticket +
      "\n\nTotal: $" +
      resultado.toFixed(2) +
      "\nTotal con descuento: $" +
      resultadoConDescuento.toFixed(2)
  );
} else {
  // Mostrar ticket con información de compra sin descuento
  alert(ticket + "\n\nTotal: $" + resultado.toFixed(2));
}