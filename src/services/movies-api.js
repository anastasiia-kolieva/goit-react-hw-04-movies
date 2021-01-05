// ключ API
const keyApi = '35d3949b155dd879cc4fbd73961c631e';

function fetchTrendMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`,
  ).then(responce => responce.json());
}

function fetchMoviesByWord(searchWord) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${searchWord}&page=1`,
  ).then(responce => responce.json());
}

function fetchMoviesDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`,
  ).then(responce => responce.json());
}

function getMoviesCredits(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${keyApi}&language=en-US`,
  ).then(responce => responce.json());
}

const api = {
  fetchTrendMovies,
  fetchMoviesByWord,
  fetchMoviesDetails,
  getMoviesCredits,
};

export default api;

// 1.	adult: false
// 2.	backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// 3.	genre_ids: (3) [14, 28, 12]
// 4.	id: 464052
// 5.	media_type: "movie"
// 6.	original_language: "en"
// 7.	original_title: "Wonder Woman 1984"
// 8.	overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// 9.	popularity: 3469.571
// 10.	poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// 11.	release_date: "2020-12-16"
// 12.	title: "Wonder Woman 1984"
// 13.	video: false
// 14.	vote_average: 7.5
// 15.	vote_count: 1274
