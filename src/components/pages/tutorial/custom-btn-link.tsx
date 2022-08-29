import { Link, useMatch } from 'react-router-dom';
import { CustomLinkProp } from './types';

export default function CustomBtnLink({ children, to, className }: CustomLinkProp) {
  const match = useMatch(to.slice(2));
  const classNameActive = match ? ' selected-btn' : '';

  return (
    <Link to={to} className={className + classNameActive}>{children}</Link>
  );
}
