const popupEdit = document.querySelector(".popup_type_edit");
const popupOpenBtn = document.querySelector(".profile__button-edit");
const popupCloseBtn = popupEdit.querySelector(".popup__button-close");
// Находим форму в DOM
const formEdit = document.querySelector(".popup__form_type_edit");
// Находим поля формы в DOM
const inputName = popupEdit.querySelector(".popup__input_type_name");
const inputJob = popupEdit.querySelector(".popup__input_type_job");
// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

function toggleEditPopup() {
  popupEdit.classList.toggle("popup_opened");
}

function handleSubmitForm(evt) {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  toggleEditPopup();
  evt.preventDefault();
}
formEdit.addEventListener("submit", handleSubmitForm);
popupOpenBtn.addEventListener("click", toggleEditPopup);

popupCloseBtn.addEventListener("click", toggleEditPopup);


