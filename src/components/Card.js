

class Card {
  constructor(itemData, handleImageClick, handleDeleteClick,handleLikeClick ,cardSelector) {
    this._cardTemplateSelector = cardSelector;
    this._name = itemData.name;
    this._link = itemData.link;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._likes = itemData.likes;
    this._id = itemData.id;
    this._ownerId = itemData.owner;
    this._userId = itemData.userId;
    console.log(this._userId)
  }

  _getTemplate() {
    const card = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".cards__item")
      .cloneNode(true);
    return card;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._title = this._element.querySelector(".cards__title");
    this._image = this._element.querySelector(".cards__image");
    this._image.src = this._link;
    this._title.textContent = this._name;
    this.setLikes(this._likes);
    const textCapture = this._title.textContent;
    this._image.setAttribute("data-title", `${textCapture}`);

    
    if(this._ownerId !== this._userId) {
      this._element.querySelector(".cards__delete").style.display = 'none'
    }
    
    return this._element;
  }
  _fillLike() {
    this._element.querySelector(".cards__like").classList.add("cards__like_active");
  }
  _removeLike(){
    this._element.querySelector(".cards__like").classList.remove("cards__like_active");
  }
  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }
  removeCard() {
    this._element.remove();
    this._element = null;
  }
  setLikes(newlikes) {
    this._likes = newlikes;
    this._likeCountElement = this._element.querySelector(".cards__like-count");
    this._likeCountElement.textContent = this._likes.length;
    if(this.isLiked()){this._fillLike()}else{
      this._removeLike()
    }
  }
  _setEventListeners() {
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", (evt) => {
        this._handleImageClick(evt);
      });
    this._element
      .querySelector(".cards__like")
      .addEventListener("click", () => {
        this._handleLikeClick(this._id)
      });

    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._id);
      });
  }
}
export { Card };
