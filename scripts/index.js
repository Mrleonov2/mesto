const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt:'Горы архыза'
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt:'Река в Челябинске'
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt:'Панельки Иваново'
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt:'Плоскогорье на Камчатке'
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt:'Железная дорога в Холмогорске'
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt:'Скала на Байкале'
  },
];
const cards = document.querySelector(".cards");
const formAddCard = document.querySelector(".popup__form_type_new-card");
const inputLink = formAddCard.querySelector(".popup__input_type_image");
const inputPlace = formAddCard.querySelector(".popup__input_type_place-name");
const formAddSubmit = formAddCard.querySelector(".popup__submit");
const popupImage = document.querySelector(".popup_type_image");
const modalImage = popupImage.querySelector(".popup__image");
const capture = popupImage.querySelector(".popup__image-caption");
const cardTemplate = document.querySelector(".template-card").content;

const createCard = (item) => {
  const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
  const cardTitle = card.querySelector(".cards__title");

  const cardImage = card.querySelector(".cards__image");
  cardImage.src = item.link;
  cardTitle.textContent = item.name;
  cardImage.alt = item.alt
  const textCapture = cardTitle.textContent;
  cardImage.setAttribute("data-title", `${textCapture}`);
  card.querySelector(".cards__delete").addEventListener("click", (event) => {
    const cardItem = event.target.closest(".cards__item");
    cardItem.remove();
  });
  cardImage.addEventListener("click", (event) => {
    openPopup(popupImage);

    modalImage.src = event.target.getAttribute("src");
    modalImage.alt = event.target.getAttribute("alt");
    capture.textContent = cardImage.getAttribute("data-title");
  });
  return card;
};

const renderedCards = initialCards.map((item) => {
  return createCard(item);
});
cards.prepend(...renderedCards);
function handleSubmitAddForm(event) {
  event.preventDefault();
  const placeValue = inputPlace.value;
  const srcValue = inputLink.value;
  const newCard = createCard({ name: placeValue, link: srcValue });
  cards.prepend(newCard);
  formAddCard.reset();
  formAddSubmit.classList.add("popup__submit_disabled");
  formAddSubmit.disabled = true;
  closePopup(popupAdd);
}
formAddCard.addEventListener("submit", handleSubmitAddForm);

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
}
formEdit.addEventListener("submit", handleEditForm);
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
const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");

popupAddOpenBtn.addEventListener("click", () => openPopup(popupAdd));

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__button-close")
    ) {
      closePopup(popup);
    }
  });
});

function pressEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("cards__like")) {
    event.target.classList.toggle("cards__like_active");
  }
});
