//<menu lateral>//
const botaoMenu = document.querySelector('.botao__menu-lateral')
const menu = document.querySelector('.menu-lateral__content')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral__content--ativo')
})


//drag scroll on carousel//
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX)*3; //scroll-fast
  slider.scrollLeft = scrollLeft - (walk+2);
});


//*custom progress bar on carousel//
const progressBar = document.querySelectorAll('.progress');

function limpaProgresso(){
  if(window.innerWidth < 1024){
    for(let i of progressBar) {  
      if(i.classList.contains("active")) i.classList.remove('active');
    }
  }
  else{
    for(let i of progressBar) {  
      if(!i.classList.contains("active")) i.classList.add('active');
    }
  }
 }

function marcaProgresso(){
  if(window.innerWidth < 1024){
    if (slider.scrollLeft / (slider.offsetWidth * 4) < 0.25) {
      limpaProgresso();
      progressBar[0].classList.add("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.25 && slider.scrollLeft / (slider.offsetWidth * 4) < 0.5) {
      limpaProgresso();
      progressBar[1].classList.add("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.5 && slider.scrollLeft / (slider.offsetWidth * 4) < 0.75) {
      limpaProgresso();
      progressBar[2].classList.add("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.75) {
      limpaProgresso();
      progressBar[3].classList.add("active");
    };
  }
  else{
    if ((slider.scrollLeft*3) / (slider.offsetWidth) < 0.75) {
      limpaProgresso();
      progressBar[3].classList.remove("active");
    }
    else {
      limpaProgresso();
      progressBar[0].classList.remove("active");
    }
  }
}

slider.addEventListener("scroll", event => {
  marcaProgresso()
});

document.addEventListener("DOMContentLoaded", function(){
  marcaProgresso();
});
