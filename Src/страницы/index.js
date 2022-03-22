import "./index.css";
import {
  initialCards,
  config,
  cardTemplate,
  cardsContainer,
  formEdit,
  formAddCard,
  inputLink,
  inputPlace,
  formAddSubmit,
  popupImage,
  popupAdd,
  popupEdit,
  popupEditOpenBtn,
  popupAddOpenBtn,
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
import { PopupWithForm } from "../components/PopupWithForm.js";
import { WebpackError } from "webpack";

const profileInfo = new UserInfo({ profileName, profileJob });
popupAddOpenBtn.addEventListener("click", () => {
  validAdd.resetValidatiton();
  formCardPopup.open();
});
popupEditOpenBtn.addEventListener("click", () => {
  validEdit.resetValidatiton();
  formUserPopup.open();
  const user = profileInfo.getUserInfo();
  inputName.value = user.Name;
  inputJob.value = user.Job;
});

const createCard = (data) => {
  const newCard = new Card(
    {
      item: data,
      handleCardClick: (evt) => {
        imagePopup.open(evt);
      },
    },
    cardTemplate
  );
  const cardElement = newCard.generateCard();
  cardsList.addItem(cardElement);
};

const cardsList = new Section(
  {
    data: initialCards,
    renderer: (data) => {
      createCard(data);
    },
  },
  cardsContainer
);
cardsList.renderItems();

const formCardPopup = new PopupWithForm({
  popup: popupAdd,
  handleFormSubmit: (formData) => {
    createCard(formData);
    formAddSubmit.classList.add("popup__submit_disabled");
    formAddSubmit.disabled = true;
    formCardPopup.close();
  },
});
const formUserPopup = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: () => {
    profileInfo.setUserInfo();
    formUserPopup.close();
  },
});
const imagePopup = new PopupWithImage(popupImage);
formCardPopup.setEventListeners();
formUserPopup.setEventListeners();
imagePopup.setEventListeners();
const validEdit = new FormValidator(config, ".popup__form_type_edit");
const validAdd = new FormValidator(config, ".popup__form_type_new-card");
validEdit.enableValidation();
validAdd.enableValidation();

export { popupImage };

