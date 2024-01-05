import { Button, Loader, Message, ReviewsList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movies-service';

const Reviews = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = useState(false);
  const [page, setPage] = useState(1);

  const { movieId } = useParams();

  // TODO: Make Load more button

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const getData = async () => {
      try {
        const resp = await getMovieReviews(movieId, page);

        // setReviews(r => {
        //   console.log('r :>> ', r);
        //   console.log('resp.results :>> ', resp.results);
        //   return [...r, ...resp.results];
        // });

        setReviews(resp.results);

        setIsLoadMoreButtonVisible(page < resp.total_pages);

        !resp.results.length &&
          setError(`We don't have any reviews for this movie`);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieId, page]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const loadPage = () => {
    setPage(p => p + 1);
  };

  return (
    <section>
      <div>
        {isLoading && <Loader />}
        {error && <Message>{error}</Message>}
        <ReviewsList reviews={reviews} />
        {isLoadMoreButtonVisible && (
          <Button onClick={() => loadPage()}>Load more</Button>
        )}
      </div>
    </section>
  );
};

export default Reviews;
