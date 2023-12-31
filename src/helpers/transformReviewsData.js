export const transformReviewsData = ({ results, total_pages }) => {
  return {
    results: results.map(
      ({ id, author, author_details: { rating }, content }) => ({
        id,
        author,
        rating,
        content,
      })
    ),
    total_pages,
  };
};
