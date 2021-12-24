
class FormValidator {
  constructor(config, validFormSelector) {
    this._config = config;
    this._validFormSelector = validFormSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorInput = config.errorInput;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorInput);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorInput);
    errorElement.textContent = "";
  }

  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(inputList, submitButton) {
    if (this._hasInvalidInput(inputList)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.setAttribute("disabled", true);
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.removeAttribute("disabled", false);
    }
  }
  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const submitButton = formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, submitButton);
        
      });
    });
  }
  

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      )
    } else {
      this._hideInputError(formElement, inputElement);
    }
     
  }
  enableValidation(){
    const formElement = document.querySelector(this._validFormSelector)
            this._setEventListeners(formElement);
  };
}
const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_invalid",
  errorInput: "popup__input-error_active",
};


export {FormValidator ,config};


