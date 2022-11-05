document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById('login');
    const newAccForm = document.getElementById('newACC');
    
    document.getElementById('link__to__login').addEventListener("click", ()=>{
        loginForm.classList.toggle("off")
        newAccForm.classList.toggle("off")
    });
    
    document.getElementById('link__to__newAcc').addEventListener("click", ()=>{
        loginForm.classList.toggle("off")
        newAccForm.classList.toggle("off")
    })
})
