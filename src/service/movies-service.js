import axios from 'axios';
import {
  transformCreditsData,
  transformMovieData,
  transformMoviesData,
  transformReviewsData,
} from 'helpers';

const API_KEY = '745985e8c5c428c731e757c11dce9c06';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrendMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  const movies = transformMoviesData(data);
  console.log('moviesTrend :>> ', movies);
  return movies;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  const movieDetails = transformMovieData(data);
  console.log('movieDetails :>> ', movieDetails);
  return movieDetails;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  const credits = transformCreditsData(data);
  console.log('credits :>> ', credits);
  return credits;
};

export const getMovieReviews = async (id, page) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      page,
    },
  });
  const reviews = transformReviewsData(data);
  console.log('reviews :>> ', reviews);
  return reviews;
};

export const getMoviesByQuery = async (query, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
  const movies = transformMoviesData(data);
  console.log('moviesSearch :>> ', movies);
  return movies;
};
