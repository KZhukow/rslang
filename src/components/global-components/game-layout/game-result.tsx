import { gameResult } from '../../pages/sprint/const';
import RowGameResult from './row-game-result';

export default function GameResult() {
  return (
    <div className="game-result">
      <h2 className="game-result-title">Game Result</h2>
      <p>{`Score: ${gameResult.score}`}</p>
      <div className="game-result-table">
        {
        gameResult.wordInGame.length
          ? gameResult.wordInGame.map((word) => (<RowGameResult word={word} key={word.id} />))
          : gameResult.firstWordInGame.map((word) => (<RowGameResult word={word} key={word.id} />))
        }
      </div>
    </div>
  );
}
