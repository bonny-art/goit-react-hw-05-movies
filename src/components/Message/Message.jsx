import { ErrorStyled } from 'components/App/App.styled';
import React from 'react';

export const Message = ({ children }) => {
  return <ErrorStyled>{children}</ErrorStyled>;
};
