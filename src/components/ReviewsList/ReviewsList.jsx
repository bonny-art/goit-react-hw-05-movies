import React from 'react';
import {
  Itemtyled,
  ListStyled,
  RatingStyled,
  TextStyled,
  TitleStyled,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ListStyled>
      {reviews.map(({ id, author, rating, content }) => (
        <Itemtyled key={id}>
          <TitleStyled>{author}</TitleStyled>
          <RatingStyled>Author rating: {rating}</RatingStyled>
          <TextStyled>{content}</TextStyled>
        </Itemtyled>
      ))}
    </ListStyled>
  );
};
