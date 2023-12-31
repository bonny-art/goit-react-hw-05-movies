import { CastList } from 'components';
import { Loader } from 'components/Loader/Loader';
import { Message } from 'components/Message/Message';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/movies-service';

const Cast = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const getData = async () => {
      try {
        const resp = await getMovieCredits(movieId);
        console.log('resp :>> ', resp);
        !resp.length &&
          setError(`We don't have information about cast for this movie`);
        setCast(resp);
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
        <CastList cast={cast} />
      </div>
    </section>
  );
};

export default Cast;
