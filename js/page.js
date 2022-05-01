// Variables del DOM
const d = document;
const img = d.querySelector('.img1');
const show = d.querySelector('.btn');
const img2 = d.querySelector('.img2');
const show2 = d.querySelector('.btn2');
const img3 = d.querySelector('.img3');
const show3 = d.querySelector('.btn3');
const img4 = d.querySelector('.img4');
const show4 = d.querySelector('.btn4');

// funciones mouseover y mouseout

show.addEventListener('mouseover',() => img.classList.toggle('show'));
show.addEventListener('mouseout', () =>img.classList.toggle('show'));
show2.addEventListener('mouseover',() => img2.classList.toggle('show'));
show2.addEventListener('mouseout', () =>img2.classList.toggle('show'));
show3.addEventListener('mouseover',() => img3.classList.toggle('show'));
show3.addEventListener('mouseout', () =>img3.classList.toggle('show'));
show4.addEventListener('mouseover',() => img4.classList.toggle('show'));
show4.addEventListener('mouseout', () =>img4.classList.toggle('show'));