import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchForm = ({ searchMovie }) => {
  const [movieQuery, setMovieQuery] = useState('');

  const onChangeHandler = e => {
    setMovieQuery(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    searchMovie(movieQuery);
    setMovieQuery('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="movie"
        required
        placeholder="Enter movie title here"
        onChange={onChangeHandler}
        value={movieQuery}
      />
      <button type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};
