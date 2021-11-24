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
const formAddCard = document.querySelector(".popup__form_type__new-card");
const inputLink = formAddCard.querySelector(".popup__input_type_image");
const inputPlace = formAddCard.querySelector(
  ".popup__input_type_place-name"
);
//
const popupImage = document.querySelector(".popup_type_image");
const popupImageClose = popupImage.querySelector(".popup__button-close");
function popupImageToggle() {
  popupImage.classList.toggle("popup_opened");
}
popupImage.addEventListener('click',(event) => {
  if(event.target.classList.contains('popup_type_image')){
    popupImageToggle()
  }
})
popupImageClose.addEventListener('click',popupImageToggle)
//
const createCard = (item) => {
  const cardTemplate = document.querySelector(".template-card").content;
  const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
  card.querySelector(".cards__title").textContent = item.name;
  card.querySelector(".cards__image").src = item.link;
  card.querySelector(".cards__image").alt = item.name;
  card.querySelector(".cards__like").addEventListener("click", (event) => {
    event.target.classList.toggle("cards__like_active");
  });
  card.querySelector(".cards__delete").addEventListener("click", (event) => {
    const cardItem = event.target.closest(".cards__item");
    cardItem.remove();
  });
  card.querySelector(".cards__image").addEventListener('click',(event) =>{
    popupImageToggle()  
    const srcLink = event.target.getAttribute('src')
    const modalImage = popupImage.querySelector(".popup__image");
    const capture = popupImage.querySelector(".popup__image-caption");
      modalImage.src = srcLink
      capture.textContent = event.target.getAttribute('alt')
  })
  return card;
};

const complCard = initialCards.map((item) => {
  return createCard(item);
});
cards.prepend(...complCard);
function formAddSubmitHandler(event) {
  const placeValue = inputPlace.value;
  const srcValue = inputLink.value;
  const newCard = createCard({ name: placeValue, link: srcValue });
  cards.prepend(newCard);
  inputPlace.value = "";
  inputLink.value = "";
  popupAddToggle();
  event.preventDefault();
}
formAddCard.addEventListener("submit", formAddSubmitHandler);

