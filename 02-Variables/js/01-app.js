// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
HTMLFormControlsCollection.log(producto);

// Las variables se pueden reasignar
producto = 'Monitor de 19 pulgadas';
HTMLFormControlsCollection.log(producto);

// JS es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
HTMLFormControlsCollection.log(producto);

// Se puede inicializar sin un valor y asignarlo despues
var disponible;
disponible = true;

disponible = false;

// Inicializar multiples variables
var categoria = "Computadoras",
    marca = "Marca famosa",
    calificacion = 5;

// Las variables no pueden iniciar con numeros
//var 99dias;
var dias99;

//var 01_;
var _01;
var _usuario;
var __usuario;


var nombreProductoCategoriaPrecio; // Camel Case
var nombre_producto_categoria_precio; // Under Score o Snake
var NombreProducto; //Pascal Case (Se usa en clases mas que nada)
