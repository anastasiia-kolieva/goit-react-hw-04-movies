import { useState, useEffect } from 'react';
import moviesApi from '../services/movies-api';

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
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
