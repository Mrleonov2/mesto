
class Card {
  constructor({ item, handleCardClick }, cardSelector) {
    this._cardTemplate = document.querySelector(cardSelector).content ;
    this._title = item.title;
    this._image = item.link;
    this._alt = item.alt;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = this._cardTemplate
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
export { Card };
