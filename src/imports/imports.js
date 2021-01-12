import { lazy } from 'react';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage/MovieDetailsPage'),
);
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export { HomePage, MoviesPage, MovieDetailsPage, NotFoundView };
