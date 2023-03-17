import Swiper, { Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);
import SwiperCore, { Autoplay, EffectFade  } from 'swiper';
SwiperCore.use([Autoplay, EffectFade ]);


var swiper = new Swiper(".mySwiper", {
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
delay: 2500,
disableOnInteraction: false,



      },
      speed: 10000,


  //effect: "fade",
  //fadeEffect: {
    //crossFade: true
  //},
  //speed: 10000,



  mousewheel: true,
  keyboard: true,
});
