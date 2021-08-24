const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
// Si no le pasas un numero entero se redondea
const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a caminar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));