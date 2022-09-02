import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { restartGame } from '../../pages/sprint/utils';

export default function GameFooter() {
  const typeGame = !!useMatch('games/sprint');

  return (
    <div className="game-footer">
      <div className="header_logo">
        <Link to="/" className="logo_link">
          <img className="logo_img" src={logo} alt="Logo" />
        </Link>
      </div>
      <button type="button" onClick={() => restartGame(typeGame)}>Начать заново</button>
      <Link to="/games">Назад к играм</Link>
      <Link to="/glossary/1/1">Учебник</Link>
    </div>
  );
}
