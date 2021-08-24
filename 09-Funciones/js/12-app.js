const carrito = [
    { nombre : "Monitor 27 pulgadas", precio: 500 },
    { nombre : "Monitor 20 pulgadas", precio: 600 },
    { nombre : "Monitor 25 pulgadas", precio: 700 },
    { nombre : "Monitor 26 pulgadas", precio: 800 },
    { nombre : "Monitor 16 pulgadas", precio: 900 },
    { nombre : "Monitor 21 pulgadas", precio: 200 },
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));



console.log(nuevoArreglo);