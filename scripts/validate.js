const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  { errorClass, inputErrorClass, errorInput }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorInput);
  errorElement.textContent = errorMessage;
};

const hideInputError = (
  formElement,
  inputElement,
  { errorClass, inputErrorClass, errorInput }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorInput);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formElement,
  inputElement,
  { errorClass, inputErrorClass, errorInput }
) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, {
      errorClass,
      inputErrorClass,
      errorInput
    });
  } else {
    hideInputError(formElement, inputElement, {
      errorClass,
      inputErrorClass,
      errorInput
    });
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const toggleButtonState = (
  inputList,
  submitButton,
  { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute("disabled", true);
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute("disabled", false);
  }
};
const setEventListeners = (
  formElement,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
    errorInput
  }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, submitButton,{inactiveButtonClass});

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement,inputElement, {
        errorClass,
        inputErrorClass,
        errorInput
      });
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, submitButton, {inactiveButtonClass});
    });
  });
};

const enableValidation = (config) => {
  const {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
    errorInput,
  } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
      errorInput
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "`.${inputElement.id}-error`",
  errorInput: "popup__input-error_active"
});
