const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
const popupAddCloseBtn = popupAdd.querySelector(".popup__button-close");

function toggleAddPopup() {
  popupAdd.classList.toggle("popup_opened");
}
popupAddOpenBtn.addEventListener("click", toggleAddPopup);
popupAddCloseBtn.addEventListener("click", toggleAddPopup);
const modalsOverlay = document.querySelectorAll(".popup");
modalsOverlay.forEach((overlay) => {
  overlay.addEventListener("click", function handleClickOverlay(event) {
    if (event.target.classList.contains("popup")) {
      event.target.classList.toggle("popup_opened");
    }
  });
});
