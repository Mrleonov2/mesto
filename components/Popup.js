
class Popup {
  constructor(popup) {
    this._popup = popup;
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
  }
  _handleEscClose(event) {
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      this.close(openedPopup);
    }
  }
  setEventListeners() {
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup_opened") ||
        event.target.classList.contains("popup__button-close")
      ) {
        this.close(this._popup);

      }
    });
  }
}
export { Popup };
