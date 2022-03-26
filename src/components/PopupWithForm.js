import { Popup } from "../components/Popup.js";
class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._popup = popup;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._formSubmit = this._form.querySelector(".popup__submit");
  }
  close() {
    super.close();
    this._form.reset();
  }
  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  renderLoading(isLoading, buttonText) {
    if (isLoading) {
      this._formSubmit.textContent = "Сохранение...";
    } else {
      this._formSubmit.textContent = buttonText;
    }
  }
}
export { PopupWithForm };
