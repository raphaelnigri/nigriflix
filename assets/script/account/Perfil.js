export class Perfil {
    static numeroDePerfis = 0;
 
    constructor(nome){
        this._nome = nome;
        this._foto = 'foto';
        Perfil.numeroDePerfis += 1;
    }

    trocaNome(novoNome){
        this._nome = novoNome;
    }

    trocaFoto(novaFoto){
        this._foto = novaFoto;
    }

    get foto(){
        return this._foto;
    }

    get nome(){
        return this._nome;
    }
}
