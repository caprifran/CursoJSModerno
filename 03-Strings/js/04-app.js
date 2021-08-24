const producto = '              Monitor 20 pulgadas            ';

console.log(producto);
console.log(producto.length);



// Eliminar espacio del inicio
console.log(producto.trimStart());

// Eliminar espacio del final
console.log(producto.trimEnd());

// Usar mas de un metodo a la vez (Chaining)
console.log(producto.trimStart().trimStart());

// Elimina de ambos lados
console.log(producto.trim());