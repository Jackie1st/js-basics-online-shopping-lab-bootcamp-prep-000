var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
cart.push({itemName : item, itemPrice : price});
return (item + " has been added to your cart.");
}

function viewCart() {
  if (getCart().length === 0) {
      return "Your shopping cart is empty."}
  else {
    let items = []
    for (var i = 0; i < getCart().length; i++) {
      items = cart[i]
      let item = Object.keys(cart)
      let price = Object.keys(cart)
      
       items.push(`${item} at \$${price}`)
       }
       return "In your cart, you have " + items.join(", ") + "."
      }
  }


function total() {
  let t = 0;
  for (var i = 0; i < cart.length; i++) {
    t += cart[i][item];
  }
  return t;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}




