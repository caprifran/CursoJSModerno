const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM Dd YYYY h:mm:ss'));


console.log(moment().format('LLLL', diaHoy));

console.log( moment().add(3, 'days').calendar());