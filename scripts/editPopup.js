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
  togglePopup(0);
}
formEdit.addEventListener("submit", handleEditForm);
popupOpenBtn.addEventListener("click", () => togglePopup(0));

