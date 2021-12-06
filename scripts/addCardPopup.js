const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");

popupAddOpenBtn.addEventListener("click", () => togglePopup(1));

const popups = document.querySelectorAll(".popup");
popups.forEach((overlay,ind) => {
  //
    overlay.addEventListener("keydown", function PressEsc(event) {
      if (event.key === "Escape") {
        togglePopup(ind)
      }
      event.target.removeEventListener("keydown", PressEsc);
    });
//
  overlay.addEventListener("click", function handleClickOverlay(event) {
    if (event.target.classList.contains("popup")) {
      event.target.classList.remove("popup_opened");
    }
  });
});

function togglePopup(index) {
  popups[index].classList.toggle("popup_opened");
}
const popupCloseBtns = document.querySelectorAll(".popup__button-close");

popupCloseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => togglePopup(index));
});
