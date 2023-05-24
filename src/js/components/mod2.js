import GraphModal from 'graph-modal';
import Swiper, { Navigation, Thumbs} from 'swiper';
Swiper.use([Navigation, Thumbs]);

 //const modal = new GraphModal();
//const modalSlider = document.querySelector(".modalSwiper");
//const modalSlider2 = document.querySelector(".modalSwiper2");
const imgList = document.querySelector('.about-interior__images');
const myModal = document.querySelector('[data-graph-target ="modal-first"] .modal-content');
const myModalSlider = document.querySelector('.mySwiper2 .swiper-wrapper');
const myModalSliderThumb = document.querySelector('.mySwiper .swiper-wrapper');
//console.log(myModalSliderThumb)

let prodQuantity = 3;
let dataLength = null;
let modal = null;
const idImg = document.querySelectorAll('.about-interior__img');

const modalSliderThumb = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});
const modalSlider = new Swiper('.mySwiper2', {
  spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: modalSliderThumb,
    },




});





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

          //console.log(id);
          imgList.innerHTML += `<li class="${id === 1 ? 'about-interior__img-left animate__fadeInLeft' : 'animate__fadeInRight'} about-interior-img about-interior__img wow   btnModalFirst"  data-wow-offset="200" data-wow-delay=".1s" >
          <img src="${item.mainImage}" alt="interior">
          <button class="btn-reset about__overlay" data-graph-path="modal-first" data-id="${item.id}"></button>
        </li>`;}

      }
      modal = new GraphModal({

        isOpen: (modal) => {

          if (modal.modalContainer.classList.contains('modal-first')) {
            const openBtnId = modal.previousActiveElement.dataset.id;
            console.log(openBtnId);
            loadModalData(openBtnId);
            modalSlider.update();
            modalSliderThumb.update();

          }
        },

      });
       //let w = modal.modalContainer();



      //if (modal.modalContainer.classList.contains('modal-first')) {

      //  const openBtnId = modal.previousActiveElement.dataset.id;
       // console.log(openBtnId);
        //loadModalData(openBtnId);
        //prodSlider.update();
      //}
    });//end .then((data)


  };//end const loadImg =(quantity = 3)
  loadImg(prodQuantity);

  const loadModalData = (id = 1) => {
    fetch(`../data/gallery.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myModalSlider.innerHTML = '';
      myModalSliderThumb.innerHTML = '';

      for (let dataItem of data) {
        if(dataItem.id == id) {
          console.log(dataItem);

          const slides = dataItem.gallery.map((image, idx) => {
            return `
            <div class="my-swiper-slide swiper-slide" data-index="${idx}">
              <img src="${image}" alt=""/>
            </div>`;
          });
          const preview = dataItem.gallery.map((image, idx) => {
            return `
            <div class="my-swiper-slide swiper-slide" data-index="${idx}">
            <img src="${image}" alt="">
          </div>`;
          });
          myModalSlider.innerHTML = slides.join('');
          myModalSliderThumb.innerHTML = preview.join('');
        }

      }

    })

.then(() => {
  modalSlider.update();
  modalSliderThumb.update();
    })

  }
}
