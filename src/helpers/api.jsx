import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;

const KEY = `32926626-9f8218f21c9ddc7b36f942801`;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
