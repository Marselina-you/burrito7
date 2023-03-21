import Swiper, { Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);
import SwiperCore, { Autoplay, EffectFade  } from 'swiper';
SwiperCore.use([Autoplay, EffectFade ]);

const mainSlider = document.querySelector(".mainSlider");

if(mainSlider) {
  const swiper = new Swiper(mainSlider, {
    effect: 'fade',
    loop: true,

    navigation: {
      nextEl: ".hero__nav--left",
      prevEl: ".hero__nav--right",
      //clickable: true,
    },
   // autoplay: {
  //delay: 2500,
  //disableOnInteraction: false,
//},
    speed: 1000,


    //effect: "fade",
    //fadeEffect: {
      //crossFade: true
    //},

    mousewheel: true,
    keyboard: true,
  });

}
