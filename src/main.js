import { formLnk, contactsContainerLnk } from './refs';
import { getData, postData } from './api';
import { createCard } from './markup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

formLnk.addEventListener('submit', onSubmit);

init();

async function onSubmit(e) {
  e.preventDefault();
  /*const {
    elements: { name, number, email },
  } = e.currentTarget;
    let nameCurrent = name.value.trim();
    let numberCurrent = number.value.trim();
    let emailCurrent = email.value.trim();
    console.log(nameCurrent, numberCurrent, emailCurrent);*/
  try {
    const data = Object.fromEntries(new FormData(e.target));
    data.createdAt = Date.now();
    await postData(data);
    init();
    e.target.reset();
  } catch (error) {
    console.log(error.message);
  }
}

async function init() {
  try {
    const response = await getData();
    if (!response.length) {
      return;
    }

    const markup = createCard(response);
    addMarkup(markup);
  } catch (e) {
    console.log(e.message);
  }
}

function addMarkup(markup) {
  //   contactsContainerLnk.insertAdjacentHTML('beforeend', markup);
  contactsContainerLnk.innerHTML = markup;
}
