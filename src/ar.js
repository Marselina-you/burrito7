plus.forEach(el => {
  el.addEventListener('click', (e) => {
    let btn = e.currentTarget;
    let span = btn.previousElementSibling;
    let oldValue = Number(span.value);
    let newVal = oldValue + 1;
    //span.value = newVal;

  })
});
adds.forEach(el => {
  let plus = document.querySelectorAll('.add-plus__plus');
  let minus = document.querySelectorAll('.add-plus__minus');
  let span =  document.querySelector('.add-plus__input');





   // console.log(plus)
plus.forEach((el) => {
  el.addEventListener('click', (e) => {
    let value = e.span;
    let oldValue = Number(span.value);
    console.log(value)
   // let oldValue = Number(span.value);
   // let newVal = oldValue + 1;
   // span.value = newVal;

  })
})



})

adds.forEach((el) => {
  let plus = document.querySelector('.add-plus__plus');
  //console.log(plus)
  el.addEventListener('click', (e) => {
let btn = e.currentTarget;
//let span = btn.previousElementSibling;
console.log(btn)
  })
})

