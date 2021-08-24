// forEach

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    { nombre : "Monitor 27 pulgadas", precio: 500 },
    { nombre : "Monitor 20 pulgadas", precio: 600 },
    { nombre : "Monitor 25 pulgadas", precio: 700 },
    { nombre : "Monitor 26 pulgadas", precio: 800, descuento: true },
    { nombre : "Monitor 16 pulgadas", precio: 900 },
    { nombre : "Monitor 21 pulgadas", precio: 200 },
]

const nuevoArreglo = carrito.forEach( producto => producto.nombre);


const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);