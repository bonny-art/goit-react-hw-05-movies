import React from 'react';
import { Link } from 'react-router-dom';

export const GoBackBtn = ({ path, children }) => {
  return <Link to={path}>{children}</Link>;
};
