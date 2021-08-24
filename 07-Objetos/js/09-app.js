// Modo estricto, exige que cumplas las reglas al codear
// Te brinda la posibilidad de acceder a otros metodos 
// Los Object Methods
"use strict"; 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// seal permite modificar las propiedades de un objeto
// Pero no puedes agregar ni eliminar propiedades
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));

