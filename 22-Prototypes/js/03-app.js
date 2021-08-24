function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// function busca en el objeto actual mientras que el arrow function busca en la ventana global
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(1000);
console.log(pedro);
console.log(pedro.nombreClienteSaldo());


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en linea');
console.log(CCJ);