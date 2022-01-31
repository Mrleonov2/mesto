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
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const ProfileInfo = new UserInfo({ profileName, profileJob });
function handleEditForm(evt) {
  evt.preventDefault();
  /*
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  */
  ProfileInfo.setUserInfo();
  closePopup(popupEdit);
}

function handleAddForm(event) {
  event.preventDefault();
  const dataCard = { name: inputPlace.value, link: inputLink.value };
  /*
  renderedCards(dataCard);
  */
  formAddCard.reset();
  formAddSubmit.classList.add("popup__submit_disabled");
  formAddSubmit.disabled = true;
  closePopup(popupAdd);
}
popupEditOpenBtn.addEventListener("click", getUserInfo);
function getUserInfo() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupEdit);
}
/*
function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}
function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}
function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
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
*/

const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
popupAddOpenBtn.addEventListener("click", () => openPopup(popupAdd));
formAddCard.addEventListener("submit", handleAddForm);
formEdit.addEventListener("submit", handleEditForm);
/*

const renderedCards = (data) => {
  const newCard = new Card({item: data, handleCardClick:(evt)=>{
    openPopup(popupImage);
    //
    modalImage.src = evt.target.getAttribute("src");
    modalImage.alt = evt.target.getAttribute("alt");
    capture.textContent = evt.target.getAttribute("data-title");
    //
  }}, cardTemplate);
  const CardElement = newCard.generateCard();
  cardsContainer.prepend(CardElement);
};

initialCards.forEach((item) => {
  renderedCards(item);
});
*/
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();
const cardsList = new Section(
  {
    data: initialCards,
    renderer: (data) => {
      const newCard = new Card(
        {
          item: data,
          handleCardClick: (evt) => {
            imagePopup.open(evt);
            
          },
        },
        cardTemplate
      );
      const CardElement = newCard.generateCard();
      cardsList.addItem(CardElement);
    },
  },
  cardsContainer
);
cardsList.renderItems();

const onValidFormAdd = new FormValidator(config, ".popup__form_type_edit");
onValidFormAdd.enableValidation();
const onValidFormEdit = new FormValidator(config, ".popup__form_type_new-card");
onValidFormEdit.enableValidation();
//

export { capture, modalImage, popupImage };
