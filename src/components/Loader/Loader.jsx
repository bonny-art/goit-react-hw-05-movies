import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Blocks
        height="80"
        width="80"
        color="#517DB9"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </LoaderStyled>
  );
};
