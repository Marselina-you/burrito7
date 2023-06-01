import WOW from 'wowjs';
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

    $('.quantity-up').on('click', function() {
      let par = $(this).parent();
      let inp = par.prev();
      inp.removeClass('extras');

      //var quant = $(this);
      //console.log(inp)
      //input = quant.parent();//нашли инпут
      //console.log(input);
      //input.toggleClass('extras-visible');

    })
    $('.quantity-down').on('click', function() {
      let par = $(this).parent();
      let inp = par.prev();
      let valIn = parseFloat(inp.val());
      //console.log(valIn);
      if (valIn == 0) {
        inp.addClass('extras')
      }

      //var quant = $(this);
      //console.log(inp)
      //input = quant.parent();//нашли инпут
      //console.log(input);
      //input.toggleClass('extras-visible');

    })



    new WOW.WOW({
      live: false//чтобы не было ошибок в консоли
     //и любые другие параметры - это просто пример
    }).init();

});




