export class Client {
    private _firtsName: string;
    private _lastName: string;
    private _email: string;
    private _cpf: string;
    
    constructor(firtsName: string, lastName: string, email: string, cpf: string) {
        this._firtsName = firtsName;
        this._lastName = lastName;
        this._email = email;
        this._cpf = cpf;
        this.validate();
    }

    get firtsName(): string {
        return this._firtsName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }

    get cpf(): string {
        return this._cpf;
    }

    private validate(){
        if (!this._firtsName|| this._firtsName.length < 3) {
            throw new Error("O nome é obrigatório e deve ter pelo menos 3 caracteres");
        }
        if (!this._lastName|| this._lastName.length < 3) {
            throw new Error("O sobrenome é obrigatório e deve ter pelo menos 3 caracteres");
        }
        if (!this._email|| !this._email.includes("@") || this._email.length < 3) {
            throw new Error("O email é obrigatório e deve ter pelo menos 3 caracteres e conter '@'");
        }
        if (!this._cpf|| this._cpf.length < 11) {
            throw new Error("O cpf é obrigatório e deve ter pelo menos 11 caracteres");
        }
    }
}