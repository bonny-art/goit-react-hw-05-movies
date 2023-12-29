import React, { useEffect, useState } from 'react';

import { Loader, Message, MoviesList } from 'components';

import { getTrendMovies } from 'service/movies-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await getTrendMovies();
        setMovies(resp.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <section>
      <div>
        {isLoading && <Loader />}
        {error && <Message>{error}</Message>}
        <MoviesList movies={movies} />
      </div>
    </section>
  );
};

export default Home;
