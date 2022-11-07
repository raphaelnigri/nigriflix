import {Perfil} from "./Perfil.js"

export class Account{
    static numeroDeContas = 0;
    #login;
    #senha;
    #perfis;

    constructor(email,senha){
        const emailFormatado = email.replace(/@.*$/g, '')
        this.#login = email;
        this.#senha = senha;
        this.#perfis = [new Perfil(emailFormatado)];
        Account.numeroDeContas += 1;
    }

    trocaSenha(novoValor){
        this.#senha = novoValor;
    }

    trocaLogin(novoValor){
        this.#login = novoValor;
    }

    get perfis(){
        return this.#perfis;
    }

    addPerfil(nome){
        this.#perfis.push(new Perfil(nome));
        Perfil.numeroDePerfis += 1;
    }

    removePerfil(pos){
        this.#perfis.splice(pos, 1);
        Perfil.numeroDePerfis -= 1;
    }

    autentica(login,senha){
        if (login == this.#login && senha == this.#senha){
            return true;
        } else{
            return false;
        }
    }

    checaCadastroRepetido(login){
        if (login == this.#login){
            return true;
        } else{
            return false;
        }
    }

    get login(){
        return this.#login;
    }
}
