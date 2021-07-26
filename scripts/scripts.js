function markChecked(element) {
   if (element.classList.contains("selected-card")) {
      element.classList.remove("selected-card");
      element.querySelector("ion-icon").classList.add("hidden");
   }
   else {
      let father = element.parentNode;
      let marcadoAntes = father.querySelector(".selected-card");

      if (marcadoAntes !== null) {
         marcadoAntes.classList.remove("selected-card");
         marcadoAntes.querySelector("ion-icon").classList.add("hidden");
      }
      element.classList.add("selected-card");
      element.querySelector("ion-icon").classList.remove("hidden");
   }
   
   /* TODO: divide in more functions! */

   let dish = (document.querySelector(".dishes .selected-card") !== null);
   let beverage = (document.querySelector(".beverages .selected-card") !== null);
   let dessert = (document.querySelector(".desserts .selected-card") !== null);
   
   if (dish && beverage && dessert) { //3 selected
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
function placeOrder() {
   //encodeURI("https://wa.me/5581991689732?text=TESTING_MSG");
   location.href=encodeURI("https://wa.me/5581992521151?text=MSG_DE_TESTE_DrivenEats(pode apagar)");
}