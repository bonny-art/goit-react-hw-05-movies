import { GoBackBtn } from 'components';
import React, { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import defaultImg01 from '../../images/absent-poster-w342-01.jpg';
import defaultImg02 from '../../images/absent-poster-w342-02.jpg';

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
  console.log('location :>> ', location);
  const goBack = useRef(location?.state?.from || '/');
  console.log('goBack :>> ', goBack);

  const defaultImg =
    Math.floor(Math.random() * 10) + 1 > 5 ? defaultImg01 : defaultImg02;

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      <div>
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
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User score: {vote_average}</p>
          <div>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </div>
          <div>
            <h2>Genres:</h2>
            <p>{genres.map(genre => genre).join(', ')}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
