import { useState } from 'react';
import moviesApi from '../services/movies-api';

export default function MoviesPage() {
  const [searchWord, setSearchWord] = useState('');
  const [moviesArray, setMoviesArray] = useState([]);

  const handlerChange = event => {
    setSearchWord(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();

    moviesApi
      .fetchMoviesByWord(searchWord)
      .then(data => setMoviesArray(data.results))
      .catch(() =>
        alert({
          text: 'Error! Please try again.',
        }),
      );

    setSearchWord('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchWord}
          onChange={handlerChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {moviesArray.length > 0 && (
        <ul>
          {moviesArray.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
