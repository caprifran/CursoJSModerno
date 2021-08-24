// Class declaration
class Cliente {
    constructor(pNombre, pSaldo) {
        this.nombre = pNombre;
        this.saldo = pSaldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`; 
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());

// Class expresion
const Cliente2 = class {
    constructor(pNombre, pSaldo) {
        this.nombre = pNombre;
        this.saldo = pSaldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`; 
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2.mostrarInformacion());
console.log(juan2);