const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('Escribiendo...');
// })

// busqueda.addEventListener('keyup', () => {
//     console.log('Solto la tecla');
// })

// busqueda.addEventListener('blur', () => {
//     console.log('Salio del formulario');
// })
// busqueda.addEventListener('copy', () => {
//     console.log('Copio el contenido');
// })

// busqueda.addEventListener('paste', () => {
//     console.log('Pego algo');
// })

// busqueda.addEventListener('cut', () => {
//     console.log('corto el contenido');
// })

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Fallo la validacion');
    }    
})