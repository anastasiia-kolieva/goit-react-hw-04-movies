import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/Appbar/Appbar';
import HomePage from './views/HomePage';

export default function App() {
  return (
    <Container>
      <AppBar />
    </Container>
  );
}
