import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import defaultImg01 from '../../images/absent-poster-w185-01.jpg';
import defaultImg02 from '../../images/absent-poster-w185-02.jpg';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w185';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, poster_path, title, vote_average }) => {
        const defaultImg =
          Math.floor(Math.random() * 10) + 1 > 5 ? defaultImg01 : defaultImg02;

        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <h2>{title}</h2>
              <img
                src={
                  poster_path
                    ? `${BASE_IMG_URL}${POSTER_SIZE}${poster_path}`
                    : defaultImg
                }
                alt={title}
              />
              <p>User rating: {vote_average}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
