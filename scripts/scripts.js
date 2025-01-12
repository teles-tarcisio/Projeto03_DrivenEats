function markChecked(element) {
   // if card is already selected, unselect it:
   if (element.classList.contains("selected-card")) {
      element.classList.remove("selected-card");
      element.querySelector("ion-icon").classList.add("hidden");
   }
   // proceeding:
   else {
      let father = element.parentNode; //get parent
      //checks if any is previously selected:
      let prevSelected = father.querySelector(".selected-card");
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
   let dishIsSelected = (document.querySelector(".dishes .selected-card") !== null);
   let beverageIsSelected = (document.querySelector(".beverages .selected-card") !== null);
   let dessertIsSelected = (document.querySelector(".desserts .selected-card") !== null);
   
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


/* TODO: break in smaller functions! */
function placeOrder() {
   /*
   location.href=encodeURI("https://wa.me/5581991689732?text=MSG_DE_TESTE_DrivenEats");
   let chosenDish = document.querySelector(".dishes .selected-card");
   let chosenBeverage = document.querySelector(".beverages .selected-card");
   let chosenDessert = document.querySelector(".desserts .selected-card");
   */

   let dishName = document.querySelector(".dishes .selected-card h2").innerHTML;
   let beverageName = document.querySelector(".beverages .selected-card h2").innerHTML;
   let dessertName = document.querySelector(".desserts .selected-card h2").innerHTML;
   console.log(dishName + " + " + beverageName + " + " + dessertName);

   let dishPrice = document.querySelector(".dishes .selected-card h4").innerHTML;
   let beveragePrice = document.querySelector(".beverages .selected-card h4").innerHTML;
   let dessertPrice = document.querySelector(".desserts .selected-card h4").innerHTML;
   
   const regex = /\D/g; //non-digit regex (nivea)
   //overwriting strings, removing non-digits:
   dishPrice = dishPrice.replaceAll(regex, '');
   beveragePrice = beveragePrice.replaceAll(regex, '');
   dessertPrice = dessertPrice.replaceAll(regex, '');
   
   //getting correct decimals (not a nice way)
   let price1 = parseFloat(dishPrice)/100;
   let price2 = parseFloat(beveragePrice)/100;
   let price3 = parseFloat(dessertPrice)/100;
   console.log(price1 + " + " + price2 + " + " + price3);

   let finalPrice = (price1 + price2 + price3).toFixed(2);
   console.log("valor R$ " + finalPrice);

   let finalMessage = "Olá, gostaria de fazer o pedido:\n" +
   `- Prato: ${dishName}\n` +
   `- Bebida: ${beverageName}\n` +
   `- Sobremesa: ${dessertName}\n` +
   `Total: R$ ${finalPrice}`;

   //console.log(finalMessage);
   alert(finalMessage);
   finalMessage = "https://wa.me/5581991689732?text=" + finalMessage;
   location.href=encodeURI(finalMessage);
}