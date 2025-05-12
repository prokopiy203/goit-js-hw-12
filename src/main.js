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
const loadButton = document.querySelector('.button-search');
const loader = document.querySelector('.loader');

let searchText = '';
let page = 1;

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  searchText = event.target.elements['search-text'].value.trim();
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
  hideElement(loadButton);

  try {
    const data = await getImagesByQuery(searchText, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      clearGallery();
      return;
    }

    if (data.totalHits > 15) {
      showElement(loadButton);
    }

    createGallery(data.hits);
    simpleLight.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topCenter',
      message: `Error: ${error}`,
    });
  } finally {
    hideElement(loader);
    form.reset();
  }
}

loadButton.addEventListener('click', showLoadMoreButton);

async function showLoadMoreButton() {
  showElement(loader);

  try {
    page += 1;
    const data = await getImagesByQuery(searchText, page);

    if (page * 15 >= data.totalHits) {
      page = 1;
      hideElement(loadButton);
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    createGallery(data.hits);

    const pictureItem = document.querySelector('.gallery-item');

    const elHeight = pictureItem.getBoundingClientRect().height;
    window.scrollBy({
      top: Math.round(elHeight) * 3,
      behavior: 'smooth',
    });

    simpleLight.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topCenter',
      message: `Error: ${error}`,
    });
  } finally {
    hideElement(loader);
    form.reset();
  }
}
