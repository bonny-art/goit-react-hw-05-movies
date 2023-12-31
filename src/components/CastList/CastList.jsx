import React from 'react';

import defaultImgMale from '../../images/absent-fhoto-male.jpg';
import defaultImgFemale from '../../images/absent-fhoto-female.jpg';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const PROFILE_SIZE = 'w185';

export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character, gender }) => {
        const defaultImg = gender === 1 ? defaultImgFemale : defaultImgMale;
        return (
          <li key={id}>
            <h2>{name}</h2>
            <img
              src={
                profile_path
                  ? `${BASE_IMG_URL}${PROFILE_SIZE}${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
