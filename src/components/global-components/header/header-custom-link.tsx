import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProp } from '../../pages/tutorial/types';

export default function CustomHeaderLink({ children, to, className }: CustomLinkProp) {
  const match = useMatch(to);
  const classNameActive = match ? ' nav-link-active' : '';

  return (
    <Link to={to} className={className + classNameActive}>{children}</Link>
  );
}
