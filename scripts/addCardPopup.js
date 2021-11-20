const popupAdd = document.querySelector(".popup_type_new-card");
const popupAddOpenBtn = document.querySelector(".profile__button-add");
const popupAddCloseBtn = popupAdd.querySelector(".popup__button-close");
const formAddElement = document.querySelector(".popup__form_type__new-card");
const cards = document.querySelector(".cards");
function popupAddToggle() {
  popupAdd.classList.toggle("popup_opened");
}
function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupAddToggle();
  }
}
popupAddOpenBtn.addEventListener("click", popupAddToggle);
popupAddCloseBtn.addEventListener("click", popupAddToggle);
popupAdd.addEventListener("click", clickOverlay);

function renderCard(name, link) {
  const cardTemplate = document.querySelector("#template-card");
  const cardElement = cardTemplate
    .querySelector(".cards__item")
    .cloneNode(true);
  cardElement.querySelector(".cards__title").textContent = name;
  cardElement.querySelector(".cards__image").src = link;
  cards.prepend(cardElement);
  cardElement
    .querySelector("cards__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("cards__like_active");
    });
}
const nameCard = formAddElement.querySelector(".popup__input_type_place-name");
const imageCard = formAddElement.querySelector(".popup__input_type_image");
function formAddSubmitHandler(e) {
  renderCard(nameCard.value, imageCard.value);
  popupAddToggle();
  e.preventDefault();
}

formAddElement.addEventListener("submit", formAddSubmitHandler);
