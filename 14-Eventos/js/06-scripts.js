// Event Bubbling - Es cuando presionas en un evento pero ese evento se propaga 
// por muchos otros lugares dando resultados que no son los esperados

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita el event bubbling
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});