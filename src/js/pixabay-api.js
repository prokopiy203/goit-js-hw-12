import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios('', {
    params: {
      q: query,
      key: '50178649-88518a6762b6816f005eeb1ba',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(resolve => resolve.data)
    .catch(error => error);
}
