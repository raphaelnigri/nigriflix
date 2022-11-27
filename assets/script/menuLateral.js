document.addEventListener('DOMContentLoaded',()=>{
    const botaoMenu = document.querySelector('.botao__menu-lateral');
    const menu = document.querySelector('.menu-lateral__content');
    const main = document.getElementsByTagName('main');

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-lateral__content--ativo');
        botaoMenu.classList.toggle('botao__menu-lateral--ativo');
    })

    main[0].addEventListener('click',()=>{
        if(menu.classList.contains('menu-lateral__content--ativo')){
            menu.classList.remove('menu-lateral__content--ativo');
            botaoMenu.classList.remove('botao__menu-lateral--ativo');
        }
    })
})
