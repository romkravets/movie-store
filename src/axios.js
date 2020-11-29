import axios from 'axios';

const instance = axios.create({
   beseURL: 'https://api.themoviedb.org/3',
});

export default instance;