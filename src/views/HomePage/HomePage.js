import { useState, useEffect } from 'react';
import moviesApi from '../../services/movies-api';
import s from './HomePage.module.css';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrendMovies().then(data => setTrendMovies(data.results));
  }, []);

  return (
    <>
      {trendMovies && (
        <ul>
          {trendMovies.map(movie => (
            <li key={movie.id} className={s.li}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
