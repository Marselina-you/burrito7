import Swiper, { Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);
import GraphModal from 'graph-modal';
 //const modal = new GraphModal();
const modalSlider = document.querySelector(".modalSwiper");
const modalSlider2 = document.querySelector(".modalSwiper2");
const imgList = document.querySelector('.about-interior__images');
let prodQuantity = 3;
let dataLength = null;
let modal = null;
const idImg = document.querySelectorAll('.about-interior__img');





if(imgList) {
  const loadImg =(quantity = 3) => {
    fetch('../data/gallery.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      dataLength = data.length;
      imgList.innerHTML = '';
      //console.log(imgList);
      for (let i = 0; i< dataLength; i++) {
        if (i < quantity) {
          let item = data[i];
          let id = item.id;
          if (id == 1)
        console.log(id)
          //console.log(id);
          imgList.innerHTML += `<li class="${id === 1 ? 'about-interior__img-left' : ''} about-interior-img about-interior__img wow animate__fadeInLeft btnModalFirst" data-graph-path="modal-first" data-wow-offset="300" data-wow-delay=".1s" data-id="${item.id}">
          <img src="${item.mainImage}" alt="interior">
          <div class="about__overlay"></div>
        </li>`;}

      }
       modal = new GraphModal;
       //let w = modal.modalContainer();
       //console.log(w)
       const openBtnId = modal.previousActiveElement;


      //if (modal.modalContainer.classList.contains('modal-first')) {
        console.log(openBtnId)
      //  const openBtnId = modal.previousActiveElement.dataset.id;
       // console.log(openBtnId);
        //loadModalData(openBtnId);
        //prodSlider.update();
      //}
    });//end .then((data)


  };//end const loadImg =(quantity = 3)
  loadImg(prodQuantity);
}















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
