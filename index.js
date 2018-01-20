var cart = [];

function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
   
  var itemPrice = Math.floor(Math.random()*100)
  var newItem = {}
  newItem[itemName]=itemPrice
cart.push(newItem)
console.log (`${itemName} has been added to your cart.`)
return cart
}

function viewCart() {
  if (cart.length===0){
    console.log (`Your shopping cart is empty.`)
  }else if(cart.length===1){
    for(var i=0; i<cart.length; i++)
    console.log(`In your cart, ${cart[i]} you have  at ${cart.i}.`)
  }else if (cart.length===2){
    for (i=0; i<cart.length; i++)
    console.log(`In your cart, you have ${Object.keys(cart)} at $${Object.entries(cart)} and ${Object.keys(cart)} at ${Object.values(cart)}`)
  }else (cart.lenghth>2);{
    for (i=0; i<cart.length; i++)
    console.log(`In your cart, you have ${Object.keys(cart)} at $${Object.entries(cart)}, ${Object.keys(cart)}at $${Object.entries(cart)}, and ${Object.keys(cart)} at $${Object.entries(cart)}.`) 
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
