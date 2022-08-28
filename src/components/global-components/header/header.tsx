import { Link, useParams } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Authorization from '../authorization/Authorization';
import CustomHeaderLink from './header-custom-link';
import ThemeToggle from './themeToggle/themeToggle';

export default function Header() {
  const { group, page } = useParams();
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <Link to="/" className="logo_link">
            <img className="logo_img" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header_nav">
          <li className="nav_item">
            <CustomHeaderLink to="/" className="nav_link">home</CustomHeaderLink>
          </li>
          <li className="nav_item">
            <CustomHeaderLink to="about" className="nav_link">about</CustomHeaderLink>
          </li>
          <li className="nav_item">
            <CustomHeaderLink to={`glossary/${group || 1}/${page || 1}`} className="nav_link">glossary</CustomHeaderLink>
          </li>
          <li className="nav_item">
            <CustomHeaderLink to="games" className="nav_link">games</CustomHeaderLink>
          </li>
          <li className="nav_item">
            <CustomHeaderLink to="statistics" className="nav_link">statistics</CustomHeaderLink>
          </li>
        </div>
        <Authorization />
        <ThemeToggle />
      </div>
    </header>
  );
}
