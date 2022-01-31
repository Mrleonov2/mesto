import {Popup} from "../components/Popup.js"
class PopupWithForm extends Popup {
  constructor({popup, handleFormSubmit}){
    this._popup = super(popup);
    this._submitForm = handleFormSubmit;
  }
  close(){
    super.close(this._popup);
    this._popup.querySelector(".popup__form").reset();

  }
  _getInputValues(){
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }
  setEventListeners(){
    super.setEventListeners();
    this._handleFormSubmit(this._getInputValues());

  }

}
export {PopupWithForm}