import { Loader, Message, MovieInfo } from 'components';
import { ContainerStyled, SectionStyled } from 'components/App/App.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movies-service';

const MovieDetails = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError('');
    const getData = async () => {
      try {
        const resp = await getMovieDetails(movieId);
        setMovie(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <SectionStyled>
      <ContainerStyled>
        {isLoading && <Loader />}
        {error && <Message>{error}</Message>}
        <MovieInfo movie={movie} />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default MovieDetails;
