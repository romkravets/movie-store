import React, {useState, useEffect} from 'react';
import axios from '../../axios';

const base_imgUrl = 'https://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl}) {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl);
         console.log(request.data.results);
         setMovies(request.data.results);
         return request;
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row">
         <h2>{title}</h2>
         <div className="row_posters">
            {/* row_poster(s) */}
            {movies.map(movie => (
               <img
                   clasName="row_poster"
               src={`${base_imgUrl}${movie.poster_path}`} alt={movie.name}/>
            ))}
         </div>

          {/* container -> poster */}
      </div>
   )
}

export default Row;