
import $ from "jquery";


$.when( $.ready ).then(function() {


    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),//нашли инпут
        btnUp = spinner.find('.quantity-up'),//нашли кнопку плюс
        btnDown = spinner.find('.quantity-down'),//нашли кнопку минус
        min = input.attr('min'),//определили переменную с мин.значением
        max = input.attr('max');//определили переменную с макс.значением

      btnUp.on('click', function() {//нажали на плюс
        var oldValue = parseFloat(input.val());//берем у инпута value и превращаем в десятичное число
        if (oldValue >= max) { //если value >= max значения
          var newVal = oldValue;//записываем новую переменную, равную изначальному value
        } else {
          var newVal = oldValue + 1;//k value прибавляем один
        }
        spinner.find("input").val(newVal);//
        spinner.find("input").trigger("change");//Событие change предназначено для регистрации изменения значения элементов input; trigger выбирает именно событие change
      });

      btnDown.on('click', function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });





});
// $('.quantity-button').on('click', function() {
//  let summItem = $('.extras').val() * $('.value').data('price');
  //console.log(summItem)
  //$('.value').html(summItem + ' €');
//})




