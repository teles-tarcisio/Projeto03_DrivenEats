function markChecked(element) {
   if (element.classList.contains("selected-card")) {
      element.classList.remove("selected-card");
      element.querySelector("ion-icon").classList.add("hidden");
   }
   else {
      let father = element.parentNode;
      let marcadoAntes = father.querySelector(".selected-card");

      if (marcadoAntes !== null) {
         //contador--;
         //comida = "";
         //total -+ precoComida;
         marcadoAntes.classList.remove("selected-card");
         marcadoAntes.querySelector("ion-icon").classList.add("hidden");
      }
      //contador++;
      element.classList.add("selected-card");
      element.querySelector("ion-icon").classList.remove("hidden");
   }

   }