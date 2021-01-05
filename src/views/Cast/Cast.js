import { useState, useEffect } from 'react';
import moviesApi from '../../services/movies-api';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    moviesApi.getMoviesCredits(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <>
      {actors &&
        actors.map(person => (
          <ul key={person.id} className={s.list}>
            <li className={s.li}>
              <img
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                alt="Poster of the actor"
                width="150"
              />
            </li>
            <li className={s.title}>{person.name}</li>
            <li className={s.title}>{person.character}</li>
          </ul>
        ))}
    </>
  );
}

// adult: false
// cast_id: 0
// character: "Diana Prince / Wonder Woman"
// credit_id: "595686e4c3a368382e050da4"
// gender: 1
// id: 90633
// known_for_department: "Acting"
// name: "Gal Gadot"
// order: 0
// original_name: "Gal Gadot"
// popularity: 63.455
// profile_path: "/fysvehTvU6bE3JgxaOTRfvQJzJ4.jpg"
