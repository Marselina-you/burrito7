
const burger = document?.querySelector('[data-burger]');//знак "?" прверяет существует ли этот элемент
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const wrap = document?.querySelector('.burger-wrap');
const body = document.body;

console.log(burger);
console.log(nav);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  wrap?.classList.toggle('burger-wrap--close');
  burger?.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
});
navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    wrap?.classList.remove('burger-wrap--close');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  })
})
