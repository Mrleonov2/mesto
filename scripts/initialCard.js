const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const cards = document.querySelector(".cards");
const formAddElement = document.querySelector(".popup__form_type__new-card");
const inputLink = formAddElement.querySelector(".popup__input_type_image");
const inputPlace = formAddElement.querySelector(
  ".popup__input_type_place-name"
);
const createCard = (item) => {
  const cardTemplate = document.querySelector(".template-card").content;
  const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
  card.querySelector(".cards__title").textContent = item.name;
  card.querySelector(".cards__image").src = item.link;
  card.querySelector(".cards__like").addEventListener("click", (event) => {
    event.target.classList.toggle("cards__like_active");
  });
  card.querySelector(".cards__delete").addEventListener("click", (event) => {
    const cardItem = event.target.closest(".cards__item");
    cardItem.remove();
  });
  return card;
};

const complCard = initialCards.map((item) => {
  return createCard(item);
});
cards.prepend(...complCard);
function formAddSubmitHandler(evt) {
  const PlaceValue = inputPlace.value;
  const SrcValue = inputLink.value;
  const newCard = createCard({ name: PlaceValue, link: SrcValue });
  cards.prepend(newCard);
  inputPlace.value = "";
  inputLink.value = "";
  popupAddToggle();
  evt.preventDefault();
}
formAddElement.addEventListener("submit", formAddSubmitHandler);
