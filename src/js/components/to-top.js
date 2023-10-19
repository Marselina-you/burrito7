import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');
let heroHeight;
const dev = document.querySelector('.dev');
let windowHeight = window.innerHeight;
const footer = document.querySelector('footer');

if (document.querySelector('.hero')) {
  heroHeight = document.querySelector('.hero').offsetHeight;
}
console.log(heroHeight)

if (document.querySelector('.page-hero')) {
  heroHeight = document.querySelector('.page-hero').offsetHeight;
}//для многостраничников

const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}

isVisibleToTop(window.scrollY);

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});


if( dev ){
  footer.classList.toggle("fixed-bottom");
}
