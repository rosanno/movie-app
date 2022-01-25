import axios from "axios";

export const getAllMovies = async (page) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
  );

  return data.results;
};

export const getSingleMovie = async (media_type, id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  return data;
};

export const getCredits = async (media_type, id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
  );

  return data;
};

export const getRecommendation = async (media_type, id) => {
  const { data } = await axios.get(`
  https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`);

  return data.results;
};
