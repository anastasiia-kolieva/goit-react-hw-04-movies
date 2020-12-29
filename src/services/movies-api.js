// ключ API
const keyApi = '35d3949b155dd879cc4fbd73961c631e';

function fetchTrendMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`,
  ).then(responce => responce.json());
}

const api = {
  fetchTrendMovies,
};

export default api;
