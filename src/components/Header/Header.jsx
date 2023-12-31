import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.webp';

export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
