import React from 'react';

import defaultImgMale from '../../images/absent-fhoto-male.jpg';
import defaultImgFemale from '../../images/absent-fhoto-female.jpg';
import defaultImgNeutral from '../../images/absent-fhoto-neutral.jpg';
import {
  ItemStyled,
  ListStyled,
  TextStyled,
  TextWrapStyled,
  TitleStyled,
} from './CastList.styled';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const PROFILE_SIZE = 'w185';

export const CastList = ({ cast }) => {
  return (
    <ListStyled>
      {cast.map(({ id, name, profile_path, character, gender }) => {
        const defaultImg =
          gender === 1
            ? defaultImgFemale
            : gender === 2
            ? defaultImgMale
            : defaultImgNeutral;
        console.log('defaultImg :>> ', defaultImg);
        return (
          <ItemStyled key={id}>
            <img
              src={
                profile_path
                  ? `${BASE_IMG_URL}${PROFILE_SIZE}${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <TextWrapStyled>
              <TitleStyled>{name}</TitleStyled>
              {character && <TextStyled>Character: {character}</TextStyled>}
            </TextWrapStyled>
          </ItemStyled>
        );
      })}
    </ListStyled>
  );
};
