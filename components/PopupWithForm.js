import { Popup } from "../components/Popup.js";
class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._popup = popup;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }
  close() {
    super.close();
    this._form.reset();
    
    
  }
  _getInputValues() {
    this._inputList  = this._form.querySelectorAll('.popup__input');
    this._formValues = {name:this._inputList[0].value,link:this._inputList[1].value}

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
export { PopupWithForm };
