//problema 8: autenticação em 2 fatores.

import{Account} from "./Account.js"
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
        apagaMensagem(newAccForm);
    });
    
    document.getElementById('link__to__newAcc').addEventListener("click", (evento)=>{
        evento.preventDefault();
        loginForm.classList.toggle("off");
        newAccForm.classList.toggle("off");
        apagaMensagem(loginForm);
    });

    document.getElementById('link__contaCriada').addEventListener("click", (evento)=>{
        evento.preventDefault();
        loginForm.classList.remove("off");
        contaCriada.classList.add("off");
        apagaMensagem(newAccForm);
    });

    //Login//
    loginForm.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        let login = evento.target.elements["email__login"];
        let senha = evento.target.elements["senha__login"];        
        if(validaLogin(login.value,senha.value) == 'valid'){
            sessionStorage.setItem('status','logged'); // Por favor, leia o arquivo loginValidation.js antes de usar essa linha. Read the loginValidation.js file before using this line.
            window.location.href = "./videos.html";
        } else {
            mostraMensagem(loginForm,"Senha incorreta, tente novamente");
            senha.value = '';
        }
    })

    //Criação de Conta//
    newAccForm.addEventListener("submit", (evento)=>{
        evento.preventDefault();
        let login = evento.target.elements["email__newACC"];
        let confirmado = evento.target.elements["confirma__email"];
        let senha = evento.target.elements["senha__newACC"];

        if(login.value == confirmado.value){
            if(login.value != validaNovaConta(login.value)){
                criaConta(login.value,senha.value);
                login.value = '';
                senha.value = '';
                confirmado.value = '';
                newAccForm.classList.add("off");
                contaCriada.classList.remove("off");
            } else{
                mostraMensagem(newAccForm,"Conta já cadastrada");
                senha.value = '';
                confirmado.value = '';
            }
        } else{
            mostraMensagem(newAccForm,"Email e Confirmação de email são diferentes.");
            confirmado.value = '';
        }
    })
})

function mostraMensagem(form, message){
    let error = form.querySelector('.form__error__message');
    error.classList.remove('off');
    error.textContent = message;
}

function apagaMensagem(form){
    let error = form.querySelector('.form__error__message');
    error.classList.remove('off');
    error.textContent = '';
}

function validaLogin(login, senha){
    for(let i of contas){  
        if(i.autentica(login,senha)){
            //console.log(i.perfis[0].nome);
            //console.log(i.perfis[0].foto);
            return 'valid';
        }
    }
}

function validaNovaConta(login){
    for(let i of contas){
        if(i.checaCadastroRepetido(login)){
            return i.login;
        }
    }
}

function criaConta(login,senha){
    contas.push(new Account (login, senha));
}
