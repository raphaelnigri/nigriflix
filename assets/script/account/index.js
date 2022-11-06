//problema 3: criar autenticação
//problema 4: preciso de um botão que quando eu clique nele eu crie uma account.
//problema 5: autenticação em 2 fatores.

import{Account} from "./Account.js"

const contas = [];

function criaConta(login,senha){
    contas.push(new Account (login, senha))
}

function validaLogin(login, senha){
    for(let i of contas) {  
        console.log(i.autentica(login,senha));
    }
}

criaConta('link@link',321)
criaConta('test@test',423)
criaConta('bobo@bobo',321)
validaLogin('link@link',321)