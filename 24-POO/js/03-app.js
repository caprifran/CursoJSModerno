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

// Herencia
class Empresa extends Cliente {
    constructor(pNombre, pSaldo, pTelefono, pCategoria){
        super(pNombre, pSaldo);
        this.telefono  = pTelefono;
        this.categoria = pCategoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}


const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con Juan', 500, 1091391, 'Categoria 1');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());