function markChecked(element) {
   element.classList.toggle("checked-card");
   console.log(element);
   console.log(element.querySelector("ion-icon"));
   element.querySelector("ion-icon").style.display = 'initial';
   

}