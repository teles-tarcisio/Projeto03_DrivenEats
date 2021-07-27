function markChecked(element) {
   // if card is already selected, unselect it:
   if (element.classList.contains("selected-card")) {
      element.classList.remove("selected-card");
      element.querySelector("ion-icon").classList.add("hidden");
   }
   // proceeding:
   else {
      const father = element.parentNode; //get parent
      //checks if any is previously selected:
      const prevSelected = father.querySelector(".selected-card");
      if (prevSelected !== null) {
         prevSelected.classList.remove("selected-card");
         prevSelected.querySelector("ion-icon").classList.add("hidden");
      }
      //selecting clicked card:
      element.classList.add("selected-card");
      element.querySelector("ion-icon").classList.remove("hidden");
   }

   checkThreeSelected();      
}

function checkThreeSelected() {
   //booleans to test later
   const dishIsSelected = (document.querySelector(".dishes .selected-card") !== null);
   const beverageIsSelected = (document.querySelector(".beverages .selected-card") !== null);
   const dessertIsSelected = (document.querySelector(".desserts .selected-card") !== null);
   
   if (dishIsSelected && beverageIsSelected && dessertIsSelected) { //3 selected
      document.querySelector(".pending-choice").classList.add("hidden");
      document.querySelector(".place-order").classList.remove("hidden");
   }
   else { //less than 3 selected
      document.querySelector(".pending-choice").classList.remove("hidden");
      document.querySelector(".place-order").classList.add("hidden");
   }
}

/* button as html link:
<input type="button" onclick="location.href='https://google.com';" value="Go to Google" />
*/

function getItemName(itemCategory) {
   return document.querySelector(`${itemCategory} .selected-card h2`).innerHTML;
}

function getItemPrice(itemCategory) {
   let priceString = document.querySelector(`${itemCategory} .selected-card h4`).innerHTML;
   priceString = priceString.replaceAll("R$ ", "").replaceAll(",", ".");
   let priceAsNumber = parseFloat(priceString);
   return (priceAsNumber);

   /* !!! !!! !!!
   //const regex = /\D/g; //non-digit regex (nivea)
   */
}

/* TODO: break in smaller functions! */
function placeOrder() {
   const dishName = getItemName(".dishes");
   const beverageName = getItemName(".beverages");
   const dessertName = getItemName(".desserts");
   console.log("pratos: " + dishName + " + " + beverageName + " + " + dessertName);

   const dishPrice = getItemPrice(".dishes");
   const beveragePrice = getItemPrice(".beverages");
   const dessertPrice = getItemPrice(".desserts");
   console.log("preços: " + dishPrice + " + " + beveragePrice + " + " + dessertPrice);
     
   const finalPrice = (dishPrice + beveragePrice + dessertPrice);
   console.log("valor total " + finalPrice);

   const finalMessage = "Olá, gostaria de fazer o pedido:\n" +
   `- Prato: ${dishName}\n` +
   `- Bebida: ${beverageName}\n` +
   `- Sobremesa: ${dessertName}\n` +
   `Total: R$ ${finalPrice}`;
   console.log(finalMessage);
  
   orderConfirmation(dishName, dishPrice, beverageName, beveragePrice, dessertName, dessertPrice);
   /*
   finalMessage = "https://wa.me/5581991689732?text=" + finalMessage;
   location.href=encodeURI(finalMessage);
   */
}

function orderConfirmation(diName, diPrice, bevName, bevPrice, deName, dePrice) {
   let orderItems = document.querySelector(".confirmation-dialog");
   orderItems.parentElement.classList.remove("hidden");
   orderItems.querySelector(".dialog-dish").innerHTML = diName + diPrice;
   orderItems.querySelector(".dialog-beverage").innerHTML = bevName + bevPrice;
   orderItems.querySelector(".dialog-dessert").innerHTML = deName + dePrice;
   orderItems.querySelector(".dialog-total").innerHTML = "Total: " + (diPrice+bevPrice+dePrice);

}