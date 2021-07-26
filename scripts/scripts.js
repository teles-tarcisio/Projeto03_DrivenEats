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

   let dish = (document.querySelector(".dishes .selected-card") !== null);
   let beverage = (document.querySelector(".beverages .selected-card") !== null);
   let dessert = (document.querySelector(".desserts .selected-card") !== null);

   if (dish && beverage && dessert) {
      alert("3 ITENS OK");
   }

   }