const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})



//<drag scroll on carousel//
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
  slider.scrollLeft = scrollLeft - (walk+5);
});


//*custom progress bar on carousel//
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');

function marcaProgresso(){
  if(window.innerWidth < 1024){
    if (slider.scrollLeft / (slider.offsetWidth * 4) < 0.25) {
      if(!dot1.classList.contains("active")) dot1.classList.add("active");
      if(dot2.classList.contains("active")) dot2.classList.remove("active");
      if(dot3.classList.contains("active")) dot3.classList.remove("active");
      if(dot4.classList.contains("active")) dot4.classList.remove("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.25 && slider.scrollLeft / (slider.offsetWidth * 4) < 0.5) {
      if(dot1.classList.contains("active")) dot1.classList.remove("active");
      if(!dot2.classList.contains("active")) dot2.classList.add("active");
      if(dot3.classList.contains("active")) dot3.classList.remove("active");
      if(dot4.classList.contains("active")) dot4.classList.remove("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.5 && slider.scrollLeft / (slider.offsetWidth * 4) < 0.75) {
      if(dot1.classList.contains("active")) dot1.classList.remove("active");
      if(dot2.classList.contains("active")) dot2.classList.remove("active");
      if(!dot3.classList.contains("active")) dot3.classList.add("active");
      if(dot4.classList.contains("active")) dot4.classList.remove("active");
    };
    if (slider.scrollLeft / (slider.offsetWidth * 4) >= 0.75) {
      if(dot1.classList.contains("active")) dot1.classList.remove("active");
      if(dot2.classList.contains("active")) dot2.classList.remove("active");
      if(dot3.classList.contains("active")) dot3.classList.remove("active");
      if(!dot4.classList.contains("active")) dot4.classList.add("active");
    };
  } 
  else{
    if ((slider.scrollLeft*3) / (slider.offsetWidth) < 0.75) {
      if(!dot1.classList.contains("active")) dot1.classList.add("active");
      if(!dot2.classList.contains("active")) dot2.classList.add("active");
      if(!dot3.classList.contains("active")) dot3.classList.add("active");
      if(dot4.classList.contains("active")) dot4.classList.remove("active");
    }
    else {
      if(dot1.classList.contains("active")) dot1.classList.remove("active");
      if(!dot2.classList.contains("active")) dot2.classList.add("active");
      if(!dot3.classList.contains("active")) dot3.classList.add("active");
      if(!dot4.classList.contains("active")) dot4.classList.add("active");
    };
  }
}

slider.addEventListener("scroll", event => {
  marcaProgresso()
});

document.addEventListener("DOMContentLoaded", function(){
  marcaProgresso();
});

