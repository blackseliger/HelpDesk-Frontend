import Popup from './popupHide';

const buttonAddTicket = document.querySelector('.button-add-ticket');
const editBlock = [...document.querySelectorAll('.edit-block')];
const deleteBlock = [...document.querySelectorAll('.delete-block')];
const popup = document.querySelector('.popup-add-new');
const popupDelete = document.querySelector('.popup-delete');
const formPopup = document.querySelector('[data-id=form-popup]');

console.log(formPopup);

buttonAddTicket.addEventListener('click', () => {
  const button = new Popup(popup, popupDelete);
  button.popupShow();
  button.popupPosition();
  button.popupHide();
});

editBlock.forEach((element) => {
  element.addEventListener('click', () => {
    const button = new Popup(popup, popupDelete);
    button.popupShow();
    button.popupPosition();
    button.popupHide();
  });
});

deleteBlock.forEach((element) => {
  element.addEventListener('click', () => {
    const button = new Popup(popupDelete, popup);
    button.popupShow();
    button.popupPosition();
    button.popupHide();
  });
});

formPopup.addEventListener('submit', (e) => {
  e.preventDefault();
  const { currentTarget } = e;
  // if (currentTarget.classlist.contains('popup-button-cancel')) return null;
  // const params = new URLSearchParams();
  // Array.from(currentTarget.elements)
  //   .filter(({ name }) => name)
  //   .forEach(({ name, value }) => params.append(name, value));
  // console.log(params);
  const formData = new FormData(currentTarget);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:7071');
  // xhr.addEventListener('readystatechange', () => {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     console.log(xhr.response);
  //   }
  // });
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const data = JSON.parse(xhr.responseText);
      } catch (e) {
        console.error(e);
      }
    }
  });
  // xhr.send(params);
  xhr.send(formData);
});

// const testForm = document.querySelector('[data-id=upload-form]');

// testForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const formData = new FormData(evt.currentTarget);
//   console.log(formData)
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://localhost:7070');

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const img = document.createElement('img');
//       img.src = `http://localhost:7070/${xhr.response.text}`;
//       console.log(xhr.response);
//       document.body.appendChild(img);
//     }
//   });

//   xhr.send(formData);
// });
