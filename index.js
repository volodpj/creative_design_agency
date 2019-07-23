'use strict'


let sliderLeft = document.getElementById('leftPlay');
let sliderRight = document.getElementById('rightPlay');

let left = 0;
sliderLeft.addEventListener('click', () => {
  let line = document.querySelector('.line');
  left = left - 725;
  if(left < -1450){
    left = 0;
  }
  line.style.left = left + 'px';
});

sliderRight.addEventListener('click', () => {
  let line = document.querySelector('.line');
  left = left + 725;
  if(left === 0){
    left = -1450;
  }
 
  line.style.left = left + 'px';
})