const carrito = [
    { nombre : "Monitor 27 pulgadas", precio: 500 },
    { nombre : "Monitor 20 pulgadas", precio: 600 },
    { nombre : "Monitor 25 pulgadas", precio: 700 },
    { nombre : "Monitor 26 pulgadas", precio: 800 },
    { nombre : "Monitor 16 pulgadas", precio: 900 },
    { nombre : "Monitor 21 pulgadas", precio: 200 },
]



for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);   
}

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )