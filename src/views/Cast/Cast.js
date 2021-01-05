import { useState, useEffect } from 'react';
import moviesApi from '../../services/movies-api';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    moviesApi.getMoviesCredits(movieId).then(data => setActors(data.cast));
  }, [movieId]);
  console.log(actors);

  return <></>;
}
