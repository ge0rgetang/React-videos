import axios from 'axios';

const KEY = 'AIzaSyBzWlET5sDxz_zPe3Lp4x5-DmsXqF-uEvY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
