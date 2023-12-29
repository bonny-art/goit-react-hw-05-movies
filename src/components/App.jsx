import { Navigate, Route, Routes } from 'react-router-dom';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getMoviesByQuery,
  getTrendMovies,
} from 'service/movies-service';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Layout } from 'components';

export const App = () => {
  getTrendMovies();
  // getMovieDetails('678512');
  // getMovieCredits('678512');
  // getMovieReviews('823482', 1);
  // getMoviesByQuery('the lion king', 2);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
