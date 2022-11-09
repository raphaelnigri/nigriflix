/*Esse tipo de validação deve ser feito dentro do servidor, no entanto,
como esse projeto não possui a intenção  de usar um banco de dados ou 
servidor optei por utilizar o section storage. Caso você precise de uma
validação de seção realmente segura, sugiro pesquisar sobre o Ajax*/

/*This kind of section validation is not safe, you should use
a server-side validation, I sugest you search about Ajax. 
I've opted for using the session storage because this project
does not intend to use a server.*/

document.addEventListener("DOMContentLoaded", ()=>{
    if (sessionStorage.getItem('status') == 'logged'){
        return;
    } else{
        window.location.href = "./index.html";
    }
})
