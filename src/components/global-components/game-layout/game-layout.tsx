import './game-layout.css';
import { Outlet } from 'react-router-dom';
import GameFooter from './game-footer';
import GameResult from './game-result';

export default function GameLayout() {
  return (
    <div className="game-layout">
      <div className="game-layout-content">
        <Outlet />
        <GameFooter />
      </div>
      <GameResult />
    </div>
  );
}
