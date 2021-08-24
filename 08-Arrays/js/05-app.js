const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 22 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "celular",
    precio: 800
}
const producto3 = {
    nombre: "Teclado",
    precio: 50
}
// .push agrega al final del arreglo
carrito.push(producto);
carrito.push(producto2);
//.unshift agrega al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);