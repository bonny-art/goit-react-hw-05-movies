export const transformMovieData = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres: genres.map(genre => genre.name),
  };
};
