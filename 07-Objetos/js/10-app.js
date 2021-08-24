const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
// Toma una copia del segundo objeto y lo asigna dentro de la primera
const resultado2 = { ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);