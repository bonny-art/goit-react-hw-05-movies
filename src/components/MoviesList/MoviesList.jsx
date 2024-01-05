import React from 'react';

import defaultImg01 from '../../images/absent-poster-w185-01.jpg';
import defaultImg02 from '../../images/absent-poster-w185-02.jpg';
import {
  ImgStyled,
  ImgWrapStyled,
  ItemStyled,
  LinkStyled,
  ListStyled,
  TextStyled,
  TextWrapStyled,
  TitleStyled,
} from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w185';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListStyled>
      {movies.map(({ id, poster_path, title, vote_average }) => {
        const defaultImg =
          Math.floor(Math.random() * 10) + 1 > 5 ? defaultImg01 : defaultImg02;

        return (
          <ItemStyled key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <ImgWrapStyled>
                <ImgStyled
                  src={
                    poster_path
                      ? `${BASE_IMG_URL}${POSTER_SIZE}${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                />
              </ImgWrapStyled>
              <TextWrapStyled>
                <TitleStyled>{title}</TitleStyled>
                <TextStyled>User rating: {vote_average}</TextStyled>
              </TextWrapStyled>
            </LinkStyled>
          </ItemStyled>
        );
      })}
    </ListStyled>
  );
};
