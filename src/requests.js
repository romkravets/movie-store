const API_KEY = '542da97a5a80db769f6c03d93cc645a3';
const BASE_URl = 'https://api.themoviedb.org/3';

const requests = {
   fetchTrenfing: `${BASE_URl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetdlixOriginals:`${BASE_URl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `${BASE_URl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `${BASE_URl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `${BASE_URl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHororMovies: `${BASE_URl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `${BASE_URl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentsries: `${BASE_URl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;