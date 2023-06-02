import WOW from 'wowjs';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const navwrap = document.querySelector('.nav-wrap');
const list = document.querySelector('.nav__list');
const wrap = document?.querySelector('.burger-wrap');





burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
 // menu.classList.toggle('header__nav');
  navwrap.classList.toggle('nav-wrap--active');
  wrap?.classList.toggle('burger-wrap--close');
  list.classList.toggle('nav__list--tablet')


})
