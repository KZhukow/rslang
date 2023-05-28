import { Link, useParams } from 'react-router-dom';
// import logo from '../../../assets/images/logo.png';
import Authorization from '../authorization/Authorization';
import CustomHeaderLink from './header-custom-link';
import ThemeToggle from './themeToggle/themeToggle';
import BurgerMenu from './burgerMenu/burgerMenu';

export default function Header() {
  const { group, page } = useParams();

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <Link to="/" className="logo_link">
            <img className="logo_img" src="https://react-rslang-back-app.onrender.com/files/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="header_nav menu_closed">
          <nav className="nav_wrapper">
            <ul className="nav_list">
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
            </ul>
          </nav>
        </div>
        <Authorization />
        <ThemeToggle />
        <button type="button" className="burger_btn" onClick={BurgerMenu}>
          <span />
        </button>
      </div>
    </header>
  );
}
