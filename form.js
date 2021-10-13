let popup = document.querySelector(".popup");
let popupOpenBtn = document.querySelector(".profile__button-edit");
let popupCloseBtn = popup.querySelector(".popup__button-close");
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
let page = document.querySelector(".page");

// Находим поля формы в DOM
let inputName = popup.querySelector(".popup__input_type_name");
let inputJob = popup.querySelector(".popup__input_type_job");
// Выберите элементы, куда должны быть вставлены значения полей
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

// Получите значение полей jobInput и nameInput из свойства value

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

// Вставьте новые значения с помощью textContent

function popupToggle() {
  popup.classList.toggle("popup_opened");
  page.classList.toggle("page_no-scroll");
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}
popupOpenBtn.addEventListener("click", popupToggle);
popup.addEventListener("click", clickOverlay);
popupCloseBtn.addEventListener("click", popupToggle);

function formSubmitHandler(evt) {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  evt.preventDefault();
}
// Эта строчка отменяет стандартную отправку формы.
formElement.addEventListener("submit", formSubmitHandler);
