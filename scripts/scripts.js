function markChecked(element) {
   element.classList.toggle("selected-card");
   //element.querySelector("ion-icon").style.display='initial';
   element.querySelector("ion-icon").classList.toggle("hidden");

}