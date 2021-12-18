const cross = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.navbar');
  
bars.addEventListener('click', ()=>{
   menu.classList.toggle('active');
})

