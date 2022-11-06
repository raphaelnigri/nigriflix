document.addEventListener("DOMContentLoaded", ()=>{

    const loginForm = document.getElementById('loginForm');
    const newAccForm = document.getElementById('newAccForm');
    
    //Trocar formulários//
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

    //Configuraando os submit//
    loginForm.addEventListener("submit", (evento)=>{
        evento.preventDefault()
        if(autentica(evento.target.elements["email__login"].value , evento.target.elements["senha__login"].value)){
            window.location.href = "./index.html"
        } else {
            mostraMensagem("Senha incorreta, tente novamente");
        }
    })
})

function mostraMensagem(message){
    let error = document.getElementById('form__error__message');
    error.classList.remove('off')
    error.textContent = message
}

function autentica(x,y){
    if (x == "a@a" && y == "123"){
        return true;
    } else{
        return false;
    }
}