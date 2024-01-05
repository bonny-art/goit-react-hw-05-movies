import { Button, Loader, Message, MoviesList, SearchForm } from 'components';
import {
  ButtonsContainer,
  ContainerStyled,
  SectionStyled,
} from 'components/App/App.styled';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'service/movies-service';

const Movies = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviousButtonVisible, setIsPreviousButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useSearchParams();

  const searchHandler = movie => {
    setMovies([]);
    setSearchQuery({ query: movie, page: 1 });
  };

  useEffect(() => {
    setError('');

    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));

    if (query) setIsLoading(true);
    if (!query) return;

    const getData = async () => {
      try {
        const resp = await getMoviesByQuery(query, page);
        setMovies([...resp.results]);

        setIsPreviousButtonVisible(page > 1);
        setIsNextButtonVisible(page < resp.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [searchQuery]);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const loadPage = step => {
    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));
    setSearchQuery({ query, page: page + step });
    scrollUp();
  };

  return (
    <SectionStyled>
      <ContainerStyled>
        {isLoading && <Loader />}
        <SearchForm searchMovie={searchHandler} />
        {error && <Message>{error}</Message>}
        {searchQuery.get('query') && (
          <>
            <ButtonsContainer>
              {isPreviousButtonVisible && (
                <Button onClick={() => loadPage(-1)}>Previous page</Button>
              )}
              <div></div>
              {isNextButtonVisible && (
                <Button onClick={() => loadPage(1)}>Next page</Button>
              )}
            </ButtonsContainer>
            {!isLoading && <MoviesList movies={movies} />}
            <ButtonsContainer>
              {isPreviousButtonVisible && (
                <Button onClick={() => loadPage(-1)}>Previous page</Button>
              )}
              <div></div>
              {isNextButtonVisible && (
                <Button onClick={() => loadPage(1)}>Next page</Button>
              )}
            </ButtonsContainer>
          </>
        )}
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Movies;
