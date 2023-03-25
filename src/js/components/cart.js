const cartBtn = document.querySelector('.btn-order');
const miniCart = document.querySelector('.mini-cart');

console.log(cartBtn)
console.log(miniCart)

cartBtn.addEventListener('click', () => {
  miniCart.classList.toggle('mini-cart--visible');
});

document.addEventListener('click', (e) => {
  //console.log(e.target)
  if (!e.target.classList.contains('mini-cart') && !e.target.closest('.mini-cart') && !e.target.closest('.mini-cart') && !e.target.classList.contains('btn-order')) {
    miniCart.classList.remove('mini-cart--visible');
  }
});

