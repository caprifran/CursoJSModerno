// Class declaration
class Cliente {
    constructor(pNombre, pSaldo) {
        this.nombre = pNombre;
        this.saldo = pSaldo;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);

// Class expresion
const Cliente2 = class {
    constructor(pNombre, pSaldo) {
        this.nombre = pNombre;
        this.saldo = pSaldo;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2);