document.plus.onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.minus.onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}




const myQuantity = document.querySelectorAll('.myQuantity');
console.log(myQuantity)


myQuantity.forEach(e => {
let btn = e;
let p = document.createElement('div');
p.classList.add('quantity-nav');
let input = btn.querySelector('.myQuantity input');

p.innerHTML = '<div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div>';
input.insertAdjacentElement('beforeBegin', p);

btnUp = e.querySelector('.quantity-up');
btnDown = e.querySelector('.quantity-down');
min = input.getAttribute('min');
max = input.getAttribute('max');

console.log(min);
console.log(max);

btnUp.addEventListener('click', () => {
  let oldValue = parseFloat(input.getAttribute('value'));
  console.log(oldValue);
  if (oldValue >= max) {
    let newVal = oldValue;
  }
  else {
    let newVal = oldValue +;
    console.log(newValue);
  }
})
//input.setAttribute('value', newVal)
//element.appendChild('#quantity-nav');('click', () => {




});




