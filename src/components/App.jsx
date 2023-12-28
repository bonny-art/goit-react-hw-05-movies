import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getMoviesByQuery,
  getTrendMovies,
} from 'service/movies-service';

export const App = () => {
  // getTrendMovies();
  // getMovieDetails('678512');
  // getMovieCredits('678512');
  // getMovieReviews('823482', 1);
  // getMoviesByQuery('the lion king', 2);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
