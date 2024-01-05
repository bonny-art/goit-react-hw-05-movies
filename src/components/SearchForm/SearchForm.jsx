import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnStyled, FormStyled, InputStyled } from './SearchForm.styled';

export const SearchForm = ({ searchMovie }) => {
  const [movieQuery, setMovieQuery] = useState('');

  const handleChange = e => {
    setMovieQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovie(movieQuery);

    setMovieQuery('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        name="movie"
        required
        placeholder="Enter movie title here"
        onChange={handleChange}
        value={movieQuery}
      />
      <BtnStyled type="submit">
        <FiSearch size="16px" />
      </BtnStyled>
    </FormStyled>
  );
};
