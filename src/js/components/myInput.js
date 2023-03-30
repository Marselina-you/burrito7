let counter = document.querySelectorAll('.counter');
let calculate = document.querySelectorAll("calculation");
let count = document.querySelectorAll("buttonCountNumber");
let calculation = document.querySelectorAll("calculation").innerHTML;


counter.forEach(el => {
  let btn =el;

  //let plus = btn.querySelector('.buttonCountPlus');



document.querySelector('.buttonCauntPlus').addEventListener('click', (e) => {
let countPlus = count.innerHTML;

if(+countPlus <= 3) {
  count.innerHTML++;
  let countPlus = count.innerHTML;
  console.log(countPlus);
  //calculate.innerHTML = calculations(countPlus);
}
});

});
