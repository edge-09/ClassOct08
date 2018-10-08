//"use strict";

var ShoppingCart = function () {
  "use strict";

  var productsEl = document.querySelector(".products"),
      cartEl = document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");

  //JSON data array
  


  var products = [{
    id: 0,
    name: "HTML5",
    description: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.",
    imageUrl: "img/html5.jpg",
    price: 35.00
  }, {
    id: 1,
    name: "CSS3",
    description: "Cascading Style Sheets (CSS3) is a style sheet language used for describing the presentation of a document written in a markup language",
    imageUrl: "img/css3.jpg",
    price: 26.00
  }, {
    id: 2,
    name: "Angular 4",
    description: "Angular is a JavaScript-based open-source front-end web application framework to develop single-page applications.",
    imageUrl: "img/angular4.jpg",
    price: 59.00
  }];

  var productsInCart = [];

  //ES6 template strings
  var generateProductList = function generateProductList() {
    products.forEach(function (item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = "<div class=\"product-image\">\n                                <img src=\"" + item.imageUrl + "\" alt=\"" + item.name + "\">\n                             </div>\n                             <div class=\"product-name\"><span>Product: </span>" + item.name + "</div>\n                             <div class=\"product-description\"><span>Description:</span> " + item.description + "</div>\n                             <div class=\"product-price\"><span>Price: $</span>" + item.price + " </div>\n                             <div class=\"product-add-to-cart\">\n                               <a href=\"#0\" class=\"button add-to-cart\" data-id=" + item.id + ">Add to Cart</a>\n                             </div>\n                          </div>\n";

      productsEl.appendChild(productEl);
    });
  };

  var generateCartList = function generateCartList() {

    cartEl.innerHTML = "";

    productsInCart.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = item.quantity + " " + item.product.name + " - $" + item.product.price * item.quantity;
      cartEl.appendChild(li);
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons();
  };

  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  var generateCartButtons = function generateCartButtons() {
    if (productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block";
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  };

  // Setting up listeners for click event on all products and Empty Cart button
  var setupListeners = function setupListeners() {
    productsEl.addEventListener("click", function (event) {
      var el = event.target;
      if (el.classList.contains("add-to-cart")) {
        var elId = el.dataset.id;
        addToCart(elId);
      }
    });

    emptyCartEl.addEventListener("click", function (event) {
      if (confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  };

  // Adds new items or updates existing one in productsInCart array
  var addToCart = function addToCart(id) {
    var obj = products[id];
    if (productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({ product: obj, quantity: 1 });
    } else {
      productsInCart.forEach(function (item) {
        if (item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  };

  // This function checks if product is already in productsInCart array
  var productFound = function productFound(productId) {
    return productsInCart.find(function (item) {
      return item.product.id === productId;
    });
  };

  var calculateTotalPrice = function calculateTotalPrice() {
    return productsInCart.reduce(function (total, item) {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  // This functon starts the whole application
  var init = function init() {
    generateProductList();
    setupListeners();
  };

  // Exposes just init function to public, everything else is private
  return {
    init: init
  };
}();

ShoppingCart.init();
//ES6 version
/*
let ShoppingCart = (function() {
  "use strict";
  
 
  let productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
  //JSON data array
  
  let products = [
    {
      id: 0,
      name: "HTML5",
      description: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.",
      imageUrl: "img/html5.jpg",
      price: 35.00
    },
    {
      id: 1,
      name: "CSS3",
      description: "Cascading Style Sheets (CSS3) is a style sheet language used for describing the presentation of a document written in a markup language",
      imageUrl: "img/css3.jpg",
      price: 26.00,
    },

    {
      id: 2,
      name: "Angular 4",
      description: "Angular is a JavaScript-based open-source front-end web application framework to develop single-page applications.",
      imageUrl: "img/angular4.jpg",
      price: 59.00
    }
  ]
  
   let productsInCart = [];
  
  //ES6 template strings
  let generateProductList = function() {
    products.forEach(function(item) {
      let productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product: </span>${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price: $</span>${item.price} </div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;
                             
productsEl.appendChild(productEl);
    });
  }
  
  let generateCartList = function() {
    
    cartEl.innerHTML = "";
    
    productsInCart.forEach(function(item) {
      let li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });
    
    productQuantityEl.innerHTML = productsInCart.length;
    
    generateCartButtons()
  }
  
  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  let generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }
  
  // Setting up listeners for click event on all products and Empty Cart button
  let setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      let el = event.target;
      if(el.classList.contains("add-to-cart")) {
       let elId = el.dataset.id;
       addToCart(elId);
      }
    });
    
    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }
  
  // Adds new items or updates existing one in productsInCart array
  let addToCart = function(id) {
    let obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }
  
  
  // This function checks if product is already in productsInCart array
  let productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  let calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }
  
  // This functon starts the whole application
  let init = function() {
    generateProductList();
    setupListeners();
  }
  
  // Exposes just init function to public, everything else is private
  return {
    init: init
  };
  
  
})();

ShoppingCart.init();
*/