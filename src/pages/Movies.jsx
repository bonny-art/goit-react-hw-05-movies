import { Button, Loader, Message, MoviesList, SearchForm } from 'components';
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
    if (searchQuery.query) setIsLoading(true);
    setError('');

    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));

    console.log('query :>> ', query);
    console.log('page :>> ', page);

    if (!query) return;

    let totalPages = 1;
    const getData = async () => {
      try {
        const allData = [];
        for (let i = 1; i <= page; i += 1) {
          const resp = await getMoviesByQuery(query, i);
          allData.push(...resp.results);
          setMovies([...allData]);
          totalPages = resp.total_pages;
        }
        setIsPreviousButtonVisible(page > 1);
        setIsNextButtonVisible(page < totalPages);
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

  const loadNextPage = () => {
    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));
    setSearchQuery({ query, page: page + 1 });
    scrollUp();
  };

  const loadPreviousPage = () => {
    const query = searchQuery.get('query');
    const page = Number(searchQuery.get('page'));
    setSearchQuery({ query, page: page - 1 });
    scrollUp();
  };

  return (
    <section>
      <div>
        {isLoading && <Loader />}
        <SearchForm searchMovie={searchHandler} />
        {error && <Message>{error}</Message>}
        <MoviesList movies={movies} />
        <div>
          {isPreviousButtonVisible && (
            <Button onClick={loadPreviousPage}>Previous page</Button>
          )}
          {isNextButtonVisible && (
            <Button onClick={loadNextPage}>Next page</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
