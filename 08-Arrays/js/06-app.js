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

let resultado;
// Forma declarativa, no se modifica el original, usa otro
// Agrega al final
resultado = [...carrito, producto];

resultado = [...resultado, producto2];

// Envia producto3 al principio
resultado = [producto3, ...resultado];


console.table(resultado);