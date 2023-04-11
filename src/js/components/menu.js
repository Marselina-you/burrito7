const buttons = document.querySelectorAll('.menu-content-text__btn');
const adds = document.querySelectorAll('.add-plus');
const plus = document.querySelectorAll('.add-plus__plus');
const minus = document.querySelectorAll('.add-plus__minus');
const inputs = document.querySelectorAll('.add-plus__input');


buttons.forEach(el => {



  el.addEventListener('click', (e) => {

    let btn = e.currentTarget;
    //console.log(btn)
    let ad = btn.nextElementSibling;
    //console.log(ad)
    let plus = ad.getElementsByClassName('add-plus__plus');
    let minus = ad.getElementsByClassName('add-plus__minus');
    let result = ad.getElementsByClassName('add-plus__input');

    //Array.prototype.forEach.call(result, function(el) {

    //})


    Array.prototype.forEach.call(plus, function(element) {
      let plus = element;
      plus.addEventListener('click', (e) => {
        let span = plus.previousElementSibling;
        let oldValue = Number(span.value);

        let newVal = oldValue + 1;
        //span.value = newVal;
        span.setAttribute('value', newVal);


      })
      //console.log(plus)
    })
    Array.prototype.forEach.call(minus, function(element) {
      let minus = element;
      minus.addEventListener('click', (e) => {
        let span = minus.nextElementSibling;


        let oldValue = Number(span.value);


          let newVal = oldValue - 1;

            span.setAttribute('value', newVal);





      });



    })



    ad.classList.toggle('add-plus--active');
    btn.classList.toggle('btn-order--none');
    Array.prototype.forEach.call(result, function(el) {
      let input = el;
      let res = input.value;
      console.log(res)

    })


});





//plus.forEach((el) => {
  //el.addEventListener('click', (e) => {
    //console.log(plus)
  //})
//})


});

