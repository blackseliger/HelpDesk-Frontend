const testForm = document.querySelector('[data-id=upload-form]');

testForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:7070');

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const img = document.createElement('img');
      img.src = `http://localhost:7070/${xhr.response}`;
      console.log(xhr.response);
      document.body.appendChild(img);
    }
  });

  xhr.send(formData);
});
