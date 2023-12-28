export const transformReviewsData = ({ results, total_pages }) => {
  return {
    results: results.map(({ author, author_details: { rating }, content }) => ({
      author,
      rating,
      content,
    })),
    total_pages,
  };
};
