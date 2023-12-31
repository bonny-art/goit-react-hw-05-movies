import { Loader, Message, ReviewsList } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movies-service';

const Reviews = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const getData = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        setError(
          !resp.results ? `We don't have any reviews for this movie` : null
        );
        setReviews(resp.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieId]);

  return (
    <section>
      <div>
        {isLoading && <Loader />}
        {error && <Message>{error}</Message>}
        <ReviewsList reviews={reviews} />
      </div>
    </section>
  );
};

export default Reviews;
