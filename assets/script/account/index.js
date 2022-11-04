//é possivel criar uma função que instancie uma classe?
//como criar o nome de uma const com uma função?


//problema 1: preciso de um botão que quando eu clique nele eu crie uma account.
//problema 2: ser capaz de adicionar novos perfis a account.

import{Account} from "./Account.js"

console.log("Bem vindo");

const test = new Account('link@link', 123)
console.log(test)

console.log(test.perfil)
