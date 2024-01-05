import React from 'react';

import logo from '../../images/logo.webp';
import {
  Container,
  HeaderBottom,
  HeaderStyled,
  HeaderTop,
  ImgContainer,
  ListStyled,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTop>
        <Container>
          <ImgContainer>
            <img src={logo} alt="MovieMania logo" width={300} />
          </ImgContainer>
          <ListStyled>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </ListStyled>
        </Container>
      </HeaderTop>
      <HeaderBottom></HeaderBottom>
    </HeaderStyled>
  );
};
