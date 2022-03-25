import { Popup } from "../components/Popup.js";

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this.popup = popup;
    this._modImage = this.popup.querySelector('.popup__image');
    this._modCapture =  this.popup.querySelector('.popup__image-caption');
  }
  open(evt) {
    super.open(evt);
    this._modImage.src = evt.target.getAttribute("src");
    this._modImage.alt = evt.target.getAttribute("alt");
    this._modCapture.textContent = evt.target.getAttribute("data-title");
  }
}
export { PopupWithImage };
