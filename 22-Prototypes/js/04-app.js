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



function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); // Copio el prototype

// Instanciarlo
const juan = new Persona('Juan', 5000, 10920192);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(juan.mostrarTelefono());