// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log("CINCO");
//         // break; rompe el for
//         continue; // finaliza este ciclo y pasa el siguiente
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    { nombre : "Monitor 27 pulgadas", precio: 500 },
    { nombre : "Monitor 20 pulgadas", precio: 600 },
    { nombre : "Monitor 25 pulgadas", precio: 700 },
    { nombre : "Monitor 26 pulgadas", precio: 800, descuento: true },
    { nombre : "Monitor 16 pulgadas", precio: 900 },
    { nombre : "Monitor 21 pulgadas", precio: 200 },
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
    
}