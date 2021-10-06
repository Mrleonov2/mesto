let popup = document.querySelector(".popup"),
  popupOpenBtn = document.querySelector(".profile__button-edit"),
  popupCloseBtn = popup.querySelector(".popup__button-close");
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let inputName = popup.querySelector(".popup__input_type_name"),
  inputJob = popup.querySelector(".popup__input_type_job");
// Выберите элементы, куда должны быть вставлены значения полей
let profileName = document.querySelector(".profile__name"),
  profileJob = document.querySelector(".profile__job");
// Получите значение полей jobInput и nameInput из свойства value
function getInputValue() {
  (inputName.value = profileName.textContent),
    (inputJob.value = profileJob.textContent);
}
// Вставьте новые значения с помощью textContent

function popupToggle() {
  popup.classList.toggle("popup_opened");
}
function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}
popupOpenBtn.addEventListener("click", popupToggle);
popupOpenBtn.addEventListener("click", getInputValue);
popup.addEventListener("click", clickOverlay);
popupCloseBtn.addEventListener("click", popupToggle);

let likeBtn = document.querySelectorAll(".cards__button-like");
function likeActive() {
  likeBtn.classList.toggle("cards__button-like_active");
}

likeBtn.addEventListener("click",likeActive);

function formSubmitHandler(evt) {
  evt.preventDefault();
}
// Эта строчка отменяет стандартную отправку формы.
formElement.addEventListener("submit", formSubmitHandler);
