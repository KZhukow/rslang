import { firstWordInGame, wordInGame } from '../../pages/sprint/const';
import RowGameResult from './row-game-result';

export default function GameResult() {
  return (
    <div className="game-result">
      <h2 className="game-result-title">Game Result</h2>
      <div className="game-result-table">
        {
        wordInGame.length
          ? wordInGame.map((word) => (<RowGameResult word={word} key={word.id} />))
          : firstWordInGame.map((word) => (<RowGameResult word={word} key={word.id} />))
        }
      </div>
    </div>
  );
}
