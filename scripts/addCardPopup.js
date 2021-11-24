const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
const popupAddCloseBtn = popupAdd.querySelector(".popup__button-close");


function popupAddToggle() {
  popupAdd.classList.toggle("popup_opened");
}
function clickOverlay(event){
  if(event.target === event.currentTarget){
    popupAddToggle()
  }
}
popupAddOpenBtn.addEventListener("click", popupAddToggle);
popupAddCloseBtn.addEventListener("click", popupAddToggle);
popupAdd.addEventListener("click", clickOverlay);




