import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../services/movies-api';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    moviesApi.fetchMoviesDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div className={s.wrapper}>
          <div className={s.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt="Poster of the movie"
              width="300"
            />
          </div>
          <div>
            <h2 className={s.title}>{movieDetails.original_title}</h2>
            <p className={s.paragraph_title}>
              User score: {movieDetails.popularity}
            </p>
            <p className={s.paragraph_title}>Overview:</p>
            <p>{movieDetails.overview}</p>
            <p className={s.paragraph_title}>Genres:</p>
            <div>
              {movieDetails.genres.map(item => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
