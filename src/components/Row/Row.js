import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import './Row.css';

const base_imgUrl = 'https://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl, isLargeRow}) {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row">
         <h3>{title}</h3>
         <div className="row__posters">
            {/* row_poster(s) */}
            {movies.map(movie => (
               <img
                   key={movie.id}
                   className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                   src={`${base_imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                   alt={movie.name}
               />
            ))}
         </div>

          {/* container -> poster */}
      </div>
   )
}

export default Row;