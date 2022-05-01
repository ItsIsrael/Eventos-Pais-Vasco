
// Variables del DOM

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const show = document.querySelector('.btn');
const show2 = document.querySelector('.btn2');
const show3 = document.querySelector('.btn3');
const show4 = document.querySelector('.btn4');

// toggle

show.addEventListener('click',() => img1.classList.toggle('show'));
show2.addEventListener('click',() => img2.classList.toggle('show'));
show3.addEventListener('click',() => img3.classList.toggle('show'));
show4.addEventListener('click',() => img4.classList.contains('show') 
? img4.classList.remove('show') : img4.classList.add('show'));