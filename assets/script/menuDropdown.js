const gerenciarConta = document.querySelector('.icon__dropdown--conta');
const gerenciarPerfis = document.querySelector('.icon__dropdown--perfil');
const sair = document.querySelector('.icon__dropdown--sair');


document.addEventListener("DOMContentLoaded", ()=>{
    sair.addEventListener("click", ()=>{
        sessionStorage.removeItem('status'); //Por favor, leia o arquivo loginValidation.js antes de usar essa linha. Read the loginValidation.js file before using this line.
        window.location.href = "./index.html";
    })
})
