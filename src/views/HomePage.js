import { useState } from 'react';
import moviesApi from '../services/movies-api';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);
  return (
    <>
      {trendMovies && (
        <ul>
          {trendMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
