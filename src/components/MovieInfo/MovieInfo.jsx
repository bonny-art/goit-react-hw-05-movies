import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { GoBackBtn } from 'components';
import defaultImg01 from '../../images/absent-poster-w342-01.jpg';
import defaultImg02 from '../../images/absent-poster-w342-02.jpg';
import {
  Container,
  HeaderStyled,
  LinkStyled,
  ListStyled,
  ScoreStyled,
  SubtitleStyled,
  TextStyled,
  Title,
  Wrapper,
} from './MovieInfo.styled';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w342';

export const MovieInfo = ({
  movie: {
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    genres = [],
  },
}) => {
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  const defaultImg =
    Math.floor(Math.random() * 10) + 1 > 5 ? defaultImg01 : defaultImg02;

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      <Container>
        <div>
          <img
            src={
              poster_path
                ? `${BASE_IMG_URL}${POSTER_SIZE}${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        </div>
        <Wrapper>
          <Title>
            {title} ({release_date?.slice(0, 4)})
          </Title>
          <ScoreStyled>User score: {vote_average}</ScoreStyled>
          <div>
            <SubtitleStyled>Overview:</SubtitleStyled>
            <TextStyled>{overview}</TextStyled>
          </div>
          <div>
            <SubtitleStyled>Genres:</SubtitleStyled>
            <TextStyled>{genres.map(genre => genre).join(', ')}</TextStyled>
          </div>
        </Wrapper>
      </Container>
      <div>
        <HeaderStyled>Aditional information</HeaderStyled>
        <ListStyled>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ListStyled>
        <Outlet />
      </div>
    </>
  );
};
