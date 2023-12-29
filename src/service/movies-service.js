import axios from 'axios';
import {
  transformCreditsData,
  transformMovieData,
  transformMoviesData,
  transformReviewsData,
} from 'helpers';

const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDU5ODVlOGM1YzQyOGM3MzFlNzU3YzExZGNlOWMwNiIsInN1YiI6IjY1OGNiMmFmZmRmYzlmMGY4OWRmZjE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ls9A60PChqzedfwKn3bBMyHWiNR--K6jqX9Bauk2wbw';
// const API_KEY = '745985e8c5c428c731e757c11dce9c06';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = BEARER_TOKEN;
axios.defaults.params = {
  // api_key: API_KEY,
  language: 'en-US',
};

export const getTrendMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  const movies = transformMoviesData(data);
  // console.log('moviesTrend :>> ', movies);
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
