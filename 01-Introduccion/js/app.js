//  Pregunta al usuario su nombre
const nombre = prompt("Cual es tu nombre?");

//  Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;

//  Asigna el valor hacia la variable producto
const producto = "Monitor 25 pulgadas";

// Verifico el tiempo de ejecucion de un bloque de codigo
console.time();

console.warn("Eso no esta permitido");  // Advertencias
console.error("Eso no esta permitido"); // Error
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");

console.timeEnd();

// Identacion
function hola() {
    console.log("Hola");
    console.log("Mundo");
}