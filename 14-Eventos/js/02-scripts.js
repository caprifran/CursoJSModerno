const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('Click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', () => {
    console.log('Presionando navegacion');
})

nav.addEventListener('mouseup', () => {
    console.log('Dejando de presionar navegacion');
})

nav.addEventListener('dblclick', () => {
    console.log('Doble click en navegacion');
})

// mousedown - similar al click
// click 
// dblclick - doble click
// mouseup - cuando sueltas el mouse