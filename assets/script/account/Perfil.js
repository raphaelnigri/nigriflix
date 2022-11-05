export class Perfil {
    static numeroDePerfis = 0;
    #nome;
    #foto;

    constructor(nome){
        this.#nome = nome;
        this.#foto = 'foto';
        Perfil.numeroDePerfis += 1;
    }

    trocaNome(novoNome){
        this.#nome = novoNome;
    }

    trocaFoto(novaFoto){
        this.#foto = novaFoto;
    }

    get foto(){
        return this.#foto;
    }

    get nome(){
        return this.#nome;
    }
}
