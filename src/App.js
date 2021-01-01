import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
