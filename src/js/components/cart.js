import WOW from 'wowjs';

const cartBtn = document.querySelector('.btn-order');
const miniCart = document.querySelector('.mini-cart');
const btnModalFirst = document.querySelector('.mini-cart');
import GraphModal from 'graph-modal';
 const modal = new GraphModal();

 btnModalFirst.addEventListener('click', () => {
  new GraphModal().open('modal-first');
 });





cartBtn.addEventListener('click', () => {
  miniCart.classList.toggle('mini-cart--visible');
});

document.addEventListener('click', (e) => {

  if (!e.target.classList.contains('mini-cart') && !e.target.closest('.mini-cart') && !e.target.closest('.mini-cart') && !e.target.classList.contains('btn-order')) {
    miniCart.classList.remove('mini-cart--visible');
  }
});

