import { initialCards } from "./data.js";
import {cards, cardTemplate,capture, popups, closePopup, openPopup, modalImage, popupImage} from './index.js'

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
    cards.addEventListener("click", (event) => {
      if (event.target.classList.contains("cards__like")) {
        event.target.classList.toggle("cards__like_active");
      }
    });
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", (event) => {
        const cardItem = event.target.closest(".cards__item");
        cardItem.remove();
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
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", (event) => {
        const cardItem = event.target.closest(".cards__item");
        cardItem.remove();
      });
  }
}

const renderedCards = () => {
  initialCards.map((item) => {
    const newCard = new Card(item, ".template-card");
    const CardElement = newCard.generateCard();
    cards.prepend(CardElement);
  });
};
renderedCards();
export {Card};