import {cardTemplate,capture, popups, closePopup, openPopup, modalImage, popupImage} from "./index.js"
 class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = item.name;
    this._image = item.link;
    this._alt = item.alt;
  }
  _getTemplate() {
    const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
    return card;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardTitle = this._element.querySelector(".cards__title");
    const cardImage = this._element.querySelector(".cards__image");
    cardImage.src = this._image;
    cardTitle.textContent = this._title;
    cardImage.alt = this._alt;
    const textCapture = cardTitle.textContent;
    cardImage.setAttribute("data-title", `${textCapture}`);
    cardImage.addEventListener("click", (event) => {
      openPopup(popupImage);
      modalImage.src = event.target.getAttribute("src");
      modalImage.alt = event.target.getAttribute("alt");
      capture.textContent = cardImage.getAttribute("data-title");
    });
    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("cards__like_active");
      });
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._element.remove();
      });
    popups.forEach((popup) => {
      popup.addEventListener("click", (evt) => {
        if (
          evt.target.classList.contains("popup_opened") ||
          evt.target.classList.contains("popup__button-close")
        ) {
          closePopup(popup);
        }
      });
    });
  }
}
export {Card};



