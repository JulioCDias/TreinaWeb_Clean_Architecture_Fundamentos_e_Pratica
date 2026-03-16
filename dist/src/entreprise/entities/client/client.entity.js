export class Client {
    _firtsName;
    _lastName;
    _email;
    _cpf;
    constructor(firtsName, lastName, email, cpf) {
        this._firtsName = firtsName;
        this._lastName = lastName;
        this._email = email;
        this._cpf = cpf;
    }
    get firtsName() {
        return this._firtsName;
    }
    get lastName() {
        return this._lastName;
    }
    get email() {
        return this._email;
    }
    get cpf() {
        return this._cpf;
    }
}
//# sourceMappingURL=client.entity.js.map