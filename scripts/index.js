import {
  initialCards,
  config,
  cardTemplate,
  popups,
  cardsContainer,
  formAddCard,
  inputLink,
  inputPlace,
  formAddSubmit,
  popupImage,
  modalImage,
  capture,
  popupEdit,
  popupEditOpenBtn,
  formEdit,
  inputName,
  inputJob,
  profileName,
  profileJob,
} from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

function handleEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
}

function handleAddForm(event) {
  event.preventDefault();
  const data = { name: inputPlace.value, link: inputLink.value };
  renderedCards(data);
  formAddCard.reset();
  formAddSubmit.classList.add("popup__submit_disabled");
  formAddSubmit.disabled = true;
  closePopup(popupAdd);
}
popupEditOpenBtn.addEventListener("click", getProfileValues);
function getProfileValues() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupEdit);
}
function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", pressEscape);
}
function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", pressEscape);
}
function pressEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
popupAddOpenBtn.addEventListener("click", () => openPopup(popupAdd));
formAddCard.addEventListener("submit", handleAddForm);
formEdit.addEventListener("submit", handleEditForm);
//
const renderedCards = (data) => {
  const newCard = new Card(data, cardTemplate);
  const CardElement = newCard.generateCard();
  cardsContainer.prepend(CardElement);
};

initialCards.forEach((item) => {
  renderedCards(item);
});
const onValidFormAdd = new FormValidator(config, ".popup__form_type_edit");
onValidFormAdd.enableValidation();
const onValidFormEdit = new FormValidator(config, ".popup__form_type_new-card");
onValidFormEdit.enableValidation();
//
popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popup_opened") ||
      event.target.classList.contains("popup__button-close")
    ) {
      closePopup(popup);
    }
  });
});

export { capture, openPopup, modalImage, popupImage };
