const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// if (puntaje != 1000) { // != diferente == es igual
//     console.log("Si, es diferente...");
// } 

if (puntaje !== "1000") {
    console.log("Si, es diferente...");
} else {
    console.log("No no es diferente...");
}

// == Operador no estricto
// === Operador estricto