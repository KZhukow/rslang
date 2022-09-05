import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProp } from './types';

export default function CustomBtnLink({ children, to, className }: CustomLinkProp) {
  const match = useMatch(to.slice(2));
  const darkLink = match ? ' dark_selected_btn' : '';
  const lightLink = match ? ' selected-btn' : '';
  const classNameActive = document.querySelector('.dark_body') ? darkLink : lightLink;

  return (
    <Link to={to} className={className + classNameActive}>{children}</Link>
  );
}
