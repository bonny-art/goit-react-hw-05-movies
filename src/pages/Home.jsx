import React, { useEffect, useState } from 'react';

import { ContainerStyled, SectionStyled } from 'components/App/App.styled';
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

  //TODO Make & style loader

  return (
    <SectionStyled>
      <ContainerStyled>
        {isLoading && <Loader />}
        {error && <Message>{error}</Message>}
        <MoviesList movies={movies} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Home;
