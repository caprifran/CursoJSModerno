class Cliente {

    #nombre; // private 

    setNombre(pNombre){
        this.#nombre = pNombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());