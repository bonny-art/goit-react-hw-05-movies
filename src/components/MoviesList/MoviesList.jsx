import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w185';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('movies :>> ', movies);
  return (
    <ul>
      {movies.map(({ id, poster_path, title, vote_average }) => (
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
            <p>{vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
