import React, { } from 'react'
import './Genre.css'
import { useDispatch, useSelector } from 'react-redux';
import { genreSelected } from '../Redux/genre';

const GenreSelect = ({onSelect}) => {
    const dispatch = useDispatch()
    const genres = useSelector((state)=> state?.gens?.genre ?? [])
    const selectedGenres = useSelector((state)=> state?.gens?.selectedGenre ?? [])
    
 
   
    return (
      <div className="genre-selector ">
        {genres.map((genre) => (
          <div
            key={genre}
            className={`genre-item ${selectedGenres.includes(genre) ? 'genre-item selected' : ''}`}
            onClick={() => (dispatch(genreSelected(genre)))}
          >
            {genre}
          </div>
        ))}
      </div>
    );
  }

export default GenreSelect