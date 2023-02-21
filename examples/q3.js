[16\n16] Srinivas Kadiyala
The following code models a shopping cart that shows an alert to the user when the last item is removed:
const events = require("events");
const emitter = new events.EventEmitter();

let itemQuantities = []; 
const cartUpdateHandler = function(itemId, change){ 
     if(itemQuantities[itemId] === undefined)
     {    itemQuantities[itemId] = 0;  } 
      if(change + itemQuantities[itemId] >= 0) {    itemQuantities[itemId] += change;  }
    }
       const checkHandler = function(){  if(itemQuantities.every(quantity => quantity == 0))  
          showAlert("cart empty");} 
        emitter.on("cart_updated", cartUpdateHandler);
        emitter.on("check_cart", checkHandler);
         function addToCart(itemId, qty){  
            //called each time user adds item to cart  emitter.emit("cart_updated", itemId, qty);} function removeFromCart(itemId, qty){  //called each time user removes item from cart  emitter.emit("cart_updated", itemId, -1 * qty);  emitter.emit("check_cart");
        }
        emitter.emit("cart_updated", itemId, qty);} 
        function removeFromCart(itemId, qty)
        {  //called each time user removes item from cart  emitter.emit("cart_updated", itemId, -1 * qty); 
         emitter.emit("check_cart");}

         Select all the true statements.(Select all acceptable answers.)
          1) itemQuantites will not contain any negative number. 
         2) This code will also show an alert correctly if the "check_cart" event is emitted at the end of the cartUpdateHandler function instead of the removeFromCart function.
         3) Emitting the "cart_updated" event is not required in the removeFromCart function.
         4) The "check_cart" event should also be emitted at the end of the addToCart function.