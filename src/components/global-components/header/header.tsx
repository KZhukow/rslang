import { Link, useParams } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Authorization from '../authorization/Authorization';
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
            <Link to="/" className="nav_link">home</Link>
          </li>
          <li className="nav_item">
            <Link to="about" className="nav_link">about</Link>
          </li>
          <li className="nav_item">
            <Link to={`glossary/${group || 1}/${page || 1}`} className="nav_link">glossary</Link>
          </li>
          <li className="nav_item">
            <Link to="games" className="nav_link">games</Link>
          </li>
          <li className="nav_item">
            <Link to="statistics" className="nav_link">statistics</Link>
          </li>
        </div>
        <Authorization />
        <ThemeToggle />
      </div>
    </header>
  );
}
