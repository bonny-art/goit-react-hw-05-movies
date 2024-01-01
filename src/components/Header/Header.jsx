import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.webp';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={logo} alt="MovieMania logo" width={300} />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </HeaderStyled>
  );
};
