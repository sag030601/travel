// toogle hero carousel navigation button

var next = document.getElementById("heroNext");
var prev = document.getElementById("heroPrev");
var hero = document.getElementById("hero");

hero.addEventListener("mouseover", () => {
  setTimeout(() => {
    next.style.opacity = "1";
    prev.style.opacity = "1";
  }, 1000);
});

hero.addEventListener("mouseout", () => {
  setTimeout(() => {
    next.style.opacity = "0";
    prev.style.opacity = "0";
  }, 1000);
});

// toogle hero carousel navigation button

// add items to wishList

let cart = [];

function addItem(location, package, price, img) {
  const itemIndex = cart.findIndex((item) => item.name === location);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  } else {
    cart.push({
      name: location,
      pack: package,
      rate: price,
      path: img,
    });
  }
  updateCart();
}

function updateCart() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";
  for (const item of cart) {
    const listItem = document.createElement("li");
    listItem.classList.add("cartItem");
    listItem.innerHTML = `<h1>${item.name}</h1>  <h1>${item.pack}</h1>  <h1>${item.rate}</h1>  <div class="imgWrapper"><img src="${item.path}"> </div> `;
    itemList.appendChild(listItem);
  }
}

// add items to wishList

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// change heart icon color

function productId(productId) {
  let heartIcon = document.getElementById(productId).querySelector(".fa-heart");
  heartIcon.classList.toggle("itemSelected");
}

// change heart icon color

let cartList = document.getElementById("cartList");
let Total = document.getElementById('total')
let cart1 = [];
let Totalprice = 0;

function addToCart(location, pack, price, img) {
  cart1.push({
    name: location,
    package: pack,
    price: price,
    image: img,
  });

  let priceNumber = parseInt(price.replace('$',''),10);
  Totalprice+= priceNumber
  updateShoppingCart();
}

function updateShoppingCart() {
  cartList.innerHTML = "";
  for (const items of cart1) {
    let cartItem = document.createElement("li");
    cartItem.innerHTML = `<h1>${items.name}</h1> <h1>${items.package}</h1> <h1>${items.price}</h1>  <div class="imgWrapper"> <img src='${items.image}'></div>`;
    cartList.appendChild(cartItem);
  }

  Total.textContent=`$${Totalprice}`
}
