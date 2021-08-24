const carrito = [
    { nombre : "Monitor 27 pulgadas", precio: 500 },
    { nombre : "Monitor 20 pulgadas", precio: 600 },
    { nombre : "Monitor 25 pulgadas", precio: 700 },
    { nombre : "Monitor 26 pulgadas", precio: 800 },
    { nombre : "Monitor 16 pulgadas", precio: 900 },
    { nombre : "Monitor 21 pulgadas", precio: 200 },
]
// No crea un arreglo nuevo
const nuevoArreglo = carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

// Crea un arreglo nuevo
const nuevoArreglo2 = carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);