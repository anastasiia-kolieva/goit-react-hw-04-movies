import { useState } from 'react';
import moviesApi from '../../services/movies-api';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [searchWord, setSearchWord] = useState('');
  const [moviesArray, setMoviesArray] = useState([]);

  const handlerChange = event => {
    setSearchWord(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (!searchWord) {
      return;
    }

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
      <form onSubmit={handelSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchWord}
          onChange={handlerChange}
        />
        <button type="submit" className={s.button}>
          <span className={s.buttonText}>Search</span>
        </button>
      </form>

      {moviesArray.length > 0 && (
        <ul>
          {moviesArray.map(movie => (
            <li key={movie.id} className={s.li}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
