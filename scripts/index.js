
import {initialCards} from "./data.js";
import { Card } from "./Card.js";
import { FormValidator, config } from "./FormValidator.js";
const popups = document.querySelectorAll(".popup");
const cards = document.querySelector(".cards");
const formAddCard = document.querySelector(".popup__form_type_new-card");
const inputLink = formAddCard.querySelector(".popup__input_type_image");
const inputPlace = formAddCard.querySelector(".popup__input_type_place-name");
const formAddSubmit = formAddCard.querySelector(".popup__submit");
const popupImage = document.querySelector(".popup_type_image");
const modalImage = popupImage.querySelector(".popup__image");
const capture = popupImage.querySelector(".popup__image-caption");
const cardTemplate = document.querySelector(".template-card").content;
const popupEdit = document.querySelector(".popup_type_edit");
const popupOpenBtn = document.querySelector(".profile__button-edit");
// Находим форму в DOM
const formEdit = document.querySelector(".popup__form_type_edit");
// Находим поля формы в DOM
const inputName = popupEdit.querySelector(".popup__input_type_name");
const inputJob = popupEdit.querySelector(".popup__input_type_job");
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function handleEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
};

function handleSubmitAddForm(event) {
  event.preventDefault();
  const data = {name:inputPlace.value,link:inputLink.value}
  renderedCards(data);
  
  formAddCard.reset();
  formAddSubmit.classList.add("popup__submit_disabled");
  formAddSubmit.disabled = true;
  closePopup(popupAdd);
}
popupOpenBtn.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupEdit);
});

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
formAddCard.addEventListener("submit", handleSubmitAddForm);
formEdit.addEventListener("submit", handleEditForm);
//
const renderedCards = (data) => {
  const newCard = new Card(data, ".template-card");
  const CardElement = newCard.generateCard();
  cards.prepend(CardElement);
};

initialCards.forEach((item) => {
  renderedCards(item);
});
const onValidFormAdd = new FormValidator(config,".popup__form_type_edit");
onValidFormAdd.enableValidation();
const onValidFormEdit = new FormValidator(config,".popup__form_type_new-card");
onValidFormEdit.enableValidation();
//
export {cards, cardTemplate,capture, popups, closePopup, openPopup, modalImage, popupImage};


