import {Perfil} from "./Perfil.js"

export class Account{
    static numeroDeContas = 0;

    constructor(email,senha){
        const emailFormatado = email.replace(/@.*$/g, '')
        this._login = email;
        this._senha = senha;
        this._perfil = new Perfil(emailFormatado);
        Account.numeroDeContas += 1;
    }

    trocaSenha(novoValor){
        this._senha = novoValor;
    }

    trocaLogin(novoValor){
        this._login = novoValor;
    }

    set perfil(novoValor){
        if(novoValor instanceof Perfil){
            this._perfil = novoValor;
        }
    }

    get perfil(){
        return this._perfil;
    }

    addPerfil(nome){

    }

    removePerfil(nome){

    }
}
