import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

export default function GameFooter() {
  return (
    <div className="game-footer">
      <div className="header_logo">
        <Link to="/" className="logo_link">
          <img className="logo_img" src={logo} alt="Logo" />
        </Link>
      </div>
      <button type="button">Начать заново</button>
      <Link to="/games">Назад к играм</Link>
      <Link to="/glossary/1/1">Учебник</Link>
    </div>
  );
}
