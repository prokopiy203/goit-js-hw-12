import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const simpleLight = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryEl = document.querySelector('.js-gallery');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        tags,
        largeImageURL,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item ">
                <div>
                    <a href="${largeImageURL}" class="link">
                        <img src="${webformatURL}" alt="${tags}" class="gallery-image">
                    </a>
                </div>
                <div>
                    <ul class="wrapper-box">
                        <li class="list-item">
                            <p class="value-tittle">Likes</p>
                            <p class="label" data-likes>${likes}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Views</p>
                            <p class="label" data-views>${views}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Comments</p>
                            <p class="label" data-comments>${comments}</p>
                        </li>
                        <li class="list-item">
                            <p class="value-tittle">Downloads</p>
                            <p class="label" data-downloads>${downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  return;
}

export function showElement(element) {
  element.classList.remove('hidden');
}

export function hideElement(element) {
  element.classList.add('hidden');
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
