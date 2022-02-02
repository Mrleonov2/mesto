import '../src/index.css';
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
  popupAdd,
  popupEdit,
  popupEditOpenBtn,
  formEdit,
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
const ProfileInfo = new UserInfo({ profileName, profileJob });
popupAddOpenBtn.addEventListener("click", () => formCardPopup.open());
popupEditOpenBtn.addEventListener("click", () => {
  formUserPopup.open();

  const user = ProfileInfo.getUserInfo();

  inputName.value = user.Name;
  inputJob.value = user.Job;
});

const imagePopup = new PopupWithImage(popupImage);

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

const formCardPopup = new PopupWithForm({
  popup: popupAdd,
  handleFormSubmit: (formData) => {
    const newCard = new Card(
      {
        item: formData,
        handleCardClick: (evt) => {
          imagePopup.open(evt);
        },
      },
      cardTemplate
    );
    const CardElement = newCard.generateCard();
    cardsList.addItem(CardElement);
    formAddSubmit.classList.add("popup__submit_disabled");
    formAddSubmit.disabled = true;
    formCardPopup.close();
  },
});
const formUserPopup = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: () => {
    ProfileInfo.setUserInfo();
    formUserPopup.close();
  },
});

formCardPopup.setEventListeners();
formUserPopup.setEventListeners();
imagePopup.setEventListeners();
const onValidFormAdd = new FormValidator(config, ".popup__form_type_edit");
const onValidFormEdit = new FormValidator(config, ".popup__form_type_new-card");
onValidFormEdit.enableValidation();
onValidFormAdd.enableValidation();
export { capture, modalImage, popupImage, onValidFormAdd, onValidFormEdit };
