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

        menuDopList.innerHTML += `
        <li class="menu-dop__item">
        <div class="menu-dop__top">
          <div class="menu-dop__name-wrap">
            <div class="menu-dop__name">${item.title}</div>
          </div>

          <div class="quantity">
            <input class="extras" type="number" min="1" max="9" step="1" value="0">
            <div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>
          </div>
        </div>
        <div class="menu-dop__value"><span class="value" data-price="${item.price}">${item.price}<span>  €</span></div>
      </li>
`;
        }

      }
    })

};






  loadProducts(prodQuantity);





}
