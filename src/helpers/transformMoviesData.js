export const transformMoviesData = ({ results, total_pages = 1 }) => {
  return {
    results: results.map(({ title, poster_path, id, vote_average }) => ({
      title,
      id,
      poster_path,
      vote_average,
    })),
    total_pages,
  };
};
