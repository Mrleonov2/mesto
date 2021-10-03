let popup = document.querySelector(".popup"),
  popupOpenBtn = document.querySelector(".profile__editButton"),
  popupCloseBtn = popup.querySelector(".popup__close");
// Находим форму в DOM
let formElement = document.querySelector(".form");
// Находим поля формы в DOM
let nameInput = popup.querySelector("popup__user_name"),
  jobInput = popup.querySelector("popup__user_job");
// Получите значение полей jobInput и nameInput из свойства value

// Выберите элементы, куда должны быть вставлены значения полей
let profileName = document.querySelector("profile__name"),
  profileJob = document.querySelector("profile__job");
// Вставьте новые значения с помощью textContent

function popupToggle() {
  popup.classList.toggle("popup_opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    popupToggle();
  }
}
popup.addEventListener("click", clickOverlay);
popupOpenBtn.addEventListener("click", popupToggle);
popupCloseBtn.addEventListener("click", popupToggle);

function formSubmitHandler(evt) {
  evt.preventDefault();
} // Эта строчка отменяет стандартную отправку формы.
formElement.addEventListener("submit", formSubmitHandler);

(nameInput.value = profileName), (jobInput.value = profileJob);
