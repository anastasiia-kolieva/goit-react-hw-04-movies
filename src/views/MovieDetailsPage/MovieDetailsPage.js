import { useState, useEffect } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import moviesApi from '../../services/movies-api';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    moviesApi.fetchMoviesDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <>
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
          <div className={s.adition_info_wrapper}>
            <h3 className={s.paragraph_title}>Additional information</h3>
            <NavLink
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </div>
        </>
      )}

      <Route path={`${path}/cast`}>
        {movieDetails && <Cast movieId={movieId} />}
      </Route>
      <Route path={`${path}/reviews`}>
        {movieDetails && <Reviews movieId={movieId} />}
      </Route>
    </>
  );
}
