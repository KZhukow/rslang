import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProp } from '../../pages/tutorial/types';

export default function CustomHeaderLink({ children, to, className }: CustomLinkProp) {
  const match = useMatch(to);
  const darkLink = match ? ' nav_link_active dark_nav' : ' dark_nav';
  const lightLink = match ? ' nav_link_active' : ' ';
  const classNameActive = document.querySelector('.dark_body') ? darkLink : lightLink;

  return (
    <Link to={to} className={className + classNameActive}>{children}</Link>
  );
}
