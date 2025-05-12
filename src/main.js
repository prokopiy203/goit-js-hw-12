import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  showElement,
  hideElement,
  simpleLight,
  clearGallery,
} from './js/render-functions';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();
  if (searchText === '') {
    iziToast.warning({
      title: 'Warning!',
      message: 'Please enter the correct query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showElement(loader);

  getImagesByQuery(searchText)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.warning({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        clearGallery();
        return;
      }
      gallery.innerHTML = createGallery(res.hits);
      simpleLight.refresh();
    })
    .catch(error => {
      iziToast.error({
        position: 'topCenter',
        message: `Error: ${error}`,
      });
    })
    .finally(() => {
      hideElement(loader);
      form.reset();
    });
}
