import React from 'react';
import { Link, useMatch } from 'react-router-dom';
// import logo from '../../../assets/images/logo.png';
import { restartGame } from '../../pages/sprint/utils';

export default function GameFooter() {
  const typeGame = !!useMatch('games/sprint');

  return (
    <div className="game_footer">
      <div className="header_logo">
        <Link to="/" className="logo_link">
          <img className="logo_img" src="https://react-rslang-back-app.onrender.com/files/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <button type="button" className="game_footer_link" onClick={() => restartGame(typeGame)}>Start again</button>
      <Link className="game_footer_link" to="/games">Back to the games</Link>
      <Link className="game_footer_link" to="/glossary/1/1">Glossary</Link>
    </div>
  );
}
