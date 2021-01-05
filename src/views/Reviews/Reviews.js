import { useState, useEffect } from 'react';
import moviesApi from '../../services/movies-api';
import s from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [rewievs, setRewievs] = useState([]);

  useEffect(() => {
    moviesApi.getMovieReviews(movieId).then(data => setRewievs(data.results));
  }, [movieId]);

  return (
    <>
      {rewievs.length > 0 ? (
        rewievs.map(item => (
          <ul key={item.id} className={s.list}>
            <li className={s.title}>{item.author}</li>
            <li className={s.text}>{item.content}</li>
          </ul>
        ))
      ) : (
        <h2 className={s.title}>We do not have any rewievs for this movie</h2>
      )}
    </>
  );
}

// author: "Reno"
// author_details: {name: "Reno", username: "Rangan", avatar_path: "/6ZpVUJzqXMzH35VprEtnX0sNI3.jpg", rating: 4}
// content: "**Every dog has its day.**
// ↵
// ↵Yeah, just like what we say in our country on 'made in China', a poor and cheap quality product. It seems they never ever see the bright side in this business (making products). This is the Sino-US collaboration product and as usual the film was too poor. The animation was much better than some of the B animation features. But the universe was too small, or you can say restricted for certain enclosure makes it fall in as a bad film. That's when you observe the backgrounds, you would notice how substandard it is.
// ↵
// ↵Visually and basic storyline seems not much different from other animated flicks. Because it kind of reminded me many awesome films from the recent past like it either be ' Kung Fu Panda' or 'Zootopia'. All about chasing the impossible dream and an inspiring theme. But still I believe the little kids like under 6-7 might enjoy it. Yeah, this is definitely not for the grown ups like most of the modern animated films are. That's a sad part, yet some adult would find it better.
// ↵
// ↵The film was built on the most common clichéd platform. A young Tibetan sheepdog is not interested in what his kind destined to do. Instead, he's very much into the musics and after inspired by what the famous musician said, he embarks a journey that would decide his fate. So how his life going to change comes with the remaining parts. There were some nice comedies, but nothing tried hard to uplift film. From the beginning itself, it was so familiar, which did not give any space for a better improvement in the later parts. An average film, maybe below that, yet watchable one. Short film though, with the nice music.
// ↵
// ↵_4/10_"
// created_at: "2017-07-30T16:10:53.439Z"
// id: "597e050dc3a368545101912a"
// updated_at: "2017-07-31T02:05:27.120Z"
// url: "https://www.themoviedb.org/review/597e050dc3a368545101912a"
