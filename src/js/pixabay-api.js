import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  try {
    const res = await axios('', {
      params: {
        q: query,
        key: '50178649-88518a6762b6816f005eeb1ba',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
