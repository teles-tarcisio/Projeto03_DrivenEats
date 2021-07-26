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
   
   /* TODO: divide in more functions! */

   checkThreeSelected();
      
}

function checkThreeSelected() {
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

/*//global variables:
let dishPrice, bevPrice, dessPrice;*/

/* button as html link:
<input type="button" onclick="location.href='https://google.com';" value="Go to Google" />
*/

function placeOrder() {
   //location.href=encodeURI("https://wa.me/5581991689732?text=MSG_DE_TESTE_DrivenEats");

   let chosenDish = document.querySelector(".dishes .selected-card h2").innerHTML;
   let chosenBeverage = document.querySelector(".beverages .selected-card h2").innerHTML;
   let chosenDessert = document.querySelector(".desserts .selected-card h2").innerHTML;
   console.log(chosenDish + "+" + chosenBeverage + "+" + chosenDessert);
   
}