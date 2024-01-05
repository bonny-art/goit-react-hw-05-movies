import React from 'react';
import { LinkStyled } from './GoBackBtn.styled';

export const GoBackBtn = ({ path, children }) => {
  return <LinkStyled to={path}>{children}</LinkStyled>;
};
