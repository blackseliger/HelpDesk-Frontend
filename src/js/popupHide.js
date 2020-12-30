/* eslint-disable class-methods-use-this */
const blockTickets = document.querySelector('.block-tickets');

export default class Popup {
  constructor(popup, hidePopup) {
    this.popup = popup;
    this.hidePoppup = hidePopup;
  }

  popupShow() {
    if (this.popup.classList.contains('popup-hide')) {
      this.popup.classList.remove('popup-hide');
    }
  }

  popupPosition() {
    this.popup.style.left = `${blockTickets.getBoundingClientRect().width / 2 + blockTickets.getBoundingClientRect().left / 2}px`;
    this.popup.style.top = `${blockTickets.getBoundingClientRect().bottom / 2}px`;
  }

  popupHide() {
    if (!this.hidePoppup.classList.contains('popus-hide')) {
      this.hidePoppup.classList.add('popup-hide');
    }
  }
}
