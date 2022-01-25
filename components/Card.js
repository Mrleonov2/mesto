import { openPopup, modalImage, popupImage, capture } from "../pages/index.js";
 class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = item.name;
    this._image = item.link;
    this._alt = item.alt;
  }

  _handleCardClick(evt) {
    openPopup(popupImage);
    modalImage.src = evt.target.getAttribute("src");
    modalImage.alt = evt.target.getAttribute("alt");
    capture.textContent = evt.target.getAttribute("data-title");
  }

  _getTemplate() {
    const card = this._cardSelector
      .querySelector(".cards__item")
      .cloneNode(true);
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
    return this._element;
  }
  _likeCard(event) {
    event.target.classList.toggle("cards__like_active");
  }
  _removeCard() {
    this._element.remove();
  }
  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", (evt) => {
        this._handleCardClick(evt);
      });
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", (event) => {
        this._likeCard(event);
      });

    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._removeCard();
      });
  }
}
export {Card}
