const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_invalid",
  errorInput: "popup__input-error_active",
};
const cardTemplate = ".template-card";
const cardsContainer = document.querySelector(".cards");
const popupImage = document.querySelector(".popup_type_image");
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditOpenBtn = document.querySelector(".profile__button-edit");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
const inputName = popupEdit.querySelector(".popup__input_type_name");
const inputJob = popupEdit.querySelector(".popup__input_type_job");
const popupAvatar = document.querySelector(".popup_type_avatar");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__job");
const avatarElement = document.querySelector(".profile__avatar");
const popupEditAvatarBtn = document.querySelector(".profile__avatar-overlay");
const deletePopup = document.querySelector(".popup_confirmation-of-deletion");

export {
  config,
  cardTemplate,
  cardsContainer,
  popupImage,
  popupAdd,
  popupEdit,
  popupEditOpenBtn,
  popupAddOpenBtn,
  inputName,
  inputJob,
  nameElement,
  jobElement,
  avatarElement,
  popupEditAvatarBtn,
  popupAvatar,
  deletePopup,
};
