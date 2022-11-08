const botaoMenu = document.querySelector('.botao__menu-lateral')
const menu = document.querySelector('.menu-lateral__content')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral__content--ativo')
    botaoMenu.classList.toggle('botao__menu-lateral--ativo')
})