//problema 4: preciso de um botão que quando eu clique nele eu crie uma account.
//problema 5: autenticação em 2 fatores.

import{Account} from "./Account.js"


console.log("Bem vindo");

const test = new Account('link@link', 123)
console.log(test)
console.log(test.perfis)

test.addPerfil('batata')
console.log(test.perfis)


console.log(test.perfis[0].nome)