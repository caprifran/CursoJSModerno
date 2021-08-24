localStorage.setItem('nombre','Juan');

const producto = {
    nombre : 'Monitor 24 Pulgadas',
    precio: 300
}
localStorage.setItem('producto',JSON.stringify( producto ));

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));