import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
