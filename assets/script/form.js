//problema 6: salvar contas no browser
//problema 7: autenticação em 2 fatores.

import{Account} from "./account/Account.js"
const contas = [];

document.addEventListener("DOMContentLoaded", ()=>{

    const loginForm = document.getElementById('loginForm');
    const newAccForm = document.getElementById('newAccForm');
    const contaCriada = document.getElementById('contaCriada');
    
    //Navegação entre formulários//
    document.getElementById('link__to__login').addEventListener("click", (evento)=>{
        evento.preventDefault();
        loginForm.classList.toggle("off");
        newAccForm.classList.toggle("off");
    });
    
    document.getElementById('link__to__newAcc').addEventListener("click", (evento)=>{
        evento.preventDefault();
        loginForm.classList.toggle("off");
        newAccForm.classList.toggle("off");
    });

    document.getElementById('link__contaCriada').addEventListener("click", (evento)=>{
        evento.preventDefault();
        loginForm.classList.remove("off");
        contaCriada.classList.add("off");
    });

    //Login//
    loginForm.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        if(validaLogin(evento.target.elements["email__login"].value , evento.target.elements["senha__login"].value)){
        } else {
            mostraMensagem(loginForm,"Senha incorreta, tente novamente");
        }
    })

    //Criação de Conta//
    newAccForm.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        let login = evento.target.elements["email__newACC"].value
        let senha = evento.target.elements["senha__newACC"].value
        if(login != validaConta(login)){
            criaConta(login,senha);
            newAccForm.classList.add("off");
            contaCriada.classList.remove("off");
        } else {
            mostraMensagem(newAccForm,"Conta já cadastrada");
        }
    })
})

function mostraMensagem(form, message){
    let error = form.querySelector('.form__error__message');
    error.classList.remove('off');
    error.textContent = message;
}

function validaLogin(login, senha){
    for(let i of contas){  
        if(i.autentica(login,senha)){
            //console.log(i.perfis[0].nome);
            //console.log(i.perfis[0].foto);
            return window.location.href = "./videos.html";
        }
    }
}

function validaConta(login){
    for(let i of contas){
        if(i.checaCadastroRepetido(login)){
            return i.login;
        }
    }
}

function criaConta(login,senha){
    contas.push(new Account (login, senha));
}
