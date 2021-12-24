import {cardTemplate,capture, popups, closePopup, openPopup, modalImage, popupImage} from "./index.js"
 class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = item.name;
    this._image = item.link;
    this._alt = item.alt;
  }
  _handleClickImage(evt){
    openPopup(popupImage);
      modalImage.src = evt.target.getAttribute("src");
      modalImage.alt = evt.target.getAttribute("alt");
      capture.textContent = evt.target.getAttribute("data-title");
  }
  _getTemplate() {
    const card = cardTemplate.querySelector(".cards__item").cloneNode(true);
    return card;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardTitle = this._element.querySelector(".cards__title");
   const CardImage = this._element.querySelector(".cards__image");
    CardImage.src = this._image;
    cardTitle.textContent = this._title;
    CardImage.alt = this._alt;
    const textCapture = cardTitle.textContent;
    CardImage.setAttribute("data-title", `${textCapture}`);
    return this._element;
  }
  _likeCard(event){
    event.target.classList.toggle("cards__like_active");
  }
_removeCard(){
  this._element.remove();
}
  _setEventListeners() {
    this._element.querySelector('.cards__image').addEventListener("click", (evt) => {this._handleClickImage(evt)});
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", (event) => {this._likeCard(event)});
      
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._removeCard()
      });
    popups.forEach((popup) => {
      popup.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("popup_opened") ||
          event.target.classList.contains("popup__button-close")
        ) {
          closePopup(popup);
        }
      });
    });
  }
}
export {Card};



