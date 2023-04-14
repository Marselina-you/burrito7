import Swiper, { Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);
const modalSlider = document.querySelector(".modalSwiper");
const modalSlider2 = document.querySelector(".modalSwiper2");
console.log(modalSlider);
console.log(modalSlider2);

var swiper = new Swiper(modalSlider, {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(modalSlider2, {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
