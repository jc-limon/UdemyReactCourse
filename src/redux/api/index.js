import axios from 'axios';

// http://www.omdbapi.com/?apikey=54371b27&t=lost
const baseURL = 'https://www.omdbapi.com/?apiKey=54371b27';

const apiCall = (url, data, headers, method) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });

export default apiCall;
