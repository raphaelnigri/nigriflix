const gerenciarConta = document.querySelector('.icon__dropdown--conta');
const gerenciarPerfis = document.querySelector('.icon__dropdown--perfil');
const sair = document.querySelector('.icon__dropdown--sair');


document.addEventListener("DOMContentLoaded", ()=>{
    sair.addEventListener("click", ()=>{
        window.location.href = "./index.html";
    })
})
