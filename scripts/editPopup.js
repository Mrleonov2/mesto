const popupEdit = document.querySelector(".popup_type_edit");
const popupOpenBtn = document.querySelector(".profile__button-edit");
const popupCloseBtn = popupEdit.querySelector(".popup__button-close");
// Находим форму в DOM
const formElement = document.querySelector(".popup__form_type_edit");
// Находим поля формы в DOM
const inputName = popupEdit.querySelector(".popup__input_type_name");
const inputJob = popupEdit.querySelector(".popup__input_type_job");
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");


inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function popupToggle() {
  popupEdit.classList.toggle("popup_opened");
}

function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}
popupOpenBtn.addEventListener("click", popupToggle);
popupEdit.addEventListener("click", clickOverlay);
popupCloseBtn.addEventListener("click", popupToggle);

function formSubmitHandler(evt) { 
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value; 
  popupToggle();
  evt.preventDefault();
}
// Эта строчка отменяет стандартную отправку формы.
formElement.addEventListener("submit", formSubmitHandler);




