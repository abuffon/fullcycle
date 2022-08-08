/*
Complexidade de negócio
Domain
- Entity
    - Customer.ts (regra de negócio)

Complexidade acidental
infra - Mundo externo
- Entity / Model
    - Customer.ts (get, set)
*/

class Custumer {

    _id: string;
    _name: string;
    _address: string;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name= name;
        this._address = address;
    }
    
    //getters and setters
    //essa é uma entidade anêmica (só carrega dados)

    //Entidade por padrão deve sempre se autovalidar
}