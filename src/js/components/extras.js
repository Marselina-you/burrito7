const menuDopList = document.querySelector('.menu-dop__list');

let prodQuantity = 8;

if (menuDopList) {

  const loadProducts = (quantity = 5 ) => {
  fetch('../data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);

      dataLength = data.length;

      menuDopList.innerHTML = '';

      for (let i = 0; i < dataLength; i++ ) {
        if (i < quantity) {
        let item = data[i];
        //console.log(item)
let valIn = 0;
menuDopList.innerHTML += `
        <li class="menu-dop__item">
        <div class="menu-dop__top">
          <div class="menu-dop__name-wrap">
            <div class="menu-dop__name">${item.title}</div>
          </div>

          <div class="quantity">
            <input class="extras" type="number" min="0" max="9" data-id="${item.id}" step="1" value="${valIn}">
            <div class="quantity-nav">
            <div class="quantity-button quantity-up">
            <img src="img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="minus"></div></div>
          </div>
        </div>

      </li>
`;
}
}
})
};






  loadProducts(prodQuantity);





}
//конец вывода товаров

