const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_invalid",
  errorInput: "popup__input-error_active",
};
const cardTemplate = ".template-card";
const cardsContainer = document.querySelector(".cards");
const formAddCard = document.querySelector(".popup__form_type_new-card");
const inputLink = formAddCard.querySelector(".popup__input_type_image");
const inputPlace = formAddCard.querySelector(".popup__input_type_place-name");
const formAddSubmit = formAddCard.querySelector(".popup__submit");
const popupImage = document.querySelector(".popup_type_image");

const popupEdit = document.querySelector(".popup_type_edit");
const popupEditOpenBtn = document.querySelector(".profile__button-edit");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
// Находим форму в DOM
const formEdit = document.querySelector(".popup__form_type_edit");
// Находим поля формы в DOM
const inputName = popupEdit.querySelector(".popup__input_type_name");
const inputJob = popupEdit.querySelector(".popup__input_type_job");
const popupAvatar = document.querySelector(".popup_type_avatar");
const inputAvatar = popupAvatar.querySelector(".popup__input");
// Выберите элементы, куда должны быть вставлены значения полей
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__job");
const avatarElement = document.querySelector(".profile__avatar"); 
const PopupEditAvatarBtn = document.querySelector(".profile__avatar-overlay");
const deletePopup = document.querySelector(".popup_confirmation-of-deletion");
const popupAvatarSubmit = popupAvatar.querySelector('.popup__submit')
export {
  config,
  cardTemplate,
  cardsContainer,
  formAddCard,
  formAddSubmit,
  popupImage,
  popupEdit,
  popupEditOpenBtn,
  formEdit,
  inputName,
  inputJob,
  inputLink,
  inputPlace,
  nameElement,
  jobElement,
  avatarElement,
  popupAdd,
  popupAddOpenBtn,
  PopupEditAvatarBtn,
  popupAvatar,
  inputAvatar,
  deletePopup,
  popupAvatarSubmit
};
