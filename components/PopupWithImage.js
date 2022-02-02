import { Popup } from "../components/Popup.js";
import { modalImage, capture } from "../utils/constants.js";
class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }
  open(evt) {
    super.open(evt);
    modalImage.src = evt.target.getAttribute("src");
    modalImage.alt = evt.target.getAttribute("alt");
    capture.textContent = evt.target.getAttribute("data-title");
  }
}
export { PopupWithImage };
