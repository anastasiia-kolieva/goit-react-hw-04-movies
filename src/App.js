import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/movies">
        <MoviesPage />
      </Route>
    </Container>
  );
}
