import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withQuicklink } from 'quicklink/dist/react/hoc.js';
import Loader from 'react-loader-spinner';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import NotFoundView from './views/NotFoundView';

const HomePage = lazy(() => import('./views/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const NotFoundView = lazy(() => import('./views/NotFoundView'));

const options = {
  origins: [],
};

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="Hearts" color="#f842da" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route
            exact
            path="/movies"
            component={withQuicklink(MoviesPage, options)}
          />
          {/* <MoviesPage />
          </Route> */}

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
