import { useContext, useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { gameResult } from '../../pages/sprint/const';
import RowGameResult from './row-game-result';

import { AuthorizedCtx } from '../../app/App';
import { ReactComponent as Spinner } from '../../pages/tutorial/image/spinner.svg';
import { createUserWords, getUserWords, updateUserWords } from '../../pages/sprint/fetch';
import { IOldWordsInfo, IUserWordInfo } from '../../pages/tutorial/types';

export default function GameResult() {
  const typeGame = !!useMatch('games/sprint');
  const [authorized] = useContext(AuthorizedCtx);
  const [loading, setLoading] = useState(false);
  async function updateUserWord() {
    setLoading(true);
    const userWords = await getUserWords();
    // Изученные слова до игры
    const studyUserWords = userWords.filter((word) => word.difficulty === 'study');
    const userWordsID = userWords.map((a) => a.optional.id);
    const newWords = gameResult.wordInGame.length
      ? gameResult.wordInGame.filter((a) => !userWordsID.includes(a.id))
      : gameResult.firstWordInGame.filter((a) => !userWordsID.includes(a.id));
    const oldWords = gameResult.wordInGame.length
      ? gameResult.wordInGame.filter((a) => userWordsID.includes(a.id))
      : gameResult.firstWordInGame.filter((a) => userWordsID.includes(a.id));
    const oldWordsInfo: IOldWordsInfo[] = oldWords.map((word) => ({
      result: word.result,
      info: userWords.find((userWord) => userWord.optional.id === word.id) as IUserWordInfo,
    }));
    await createUserWords(newWords);
    await updateUserWords(oldWordsInfo);
    const userWordsUpdate = await getUserWords();
    // Изученные слова после игры
    const studyUserWordsUpdate = userWordsUpdate.filter((word) => word.difficulty === 'study');
    // Разница по количеству слов
    const amounNewStudyWords = studyUserWordsUpdate.length - studyUserWords.length;
    console.log(amounNewStudyWords);
    setLoading(false);
  }
  useEffect(() => {
    if (authorized) {
      updateUserWord();
    }
  }, []);
  return (
    <div className="game-result">
      {loading && (<div className="spinner"><Spinner /></div>)}
      <h2 className="game-result-title">Game Result</h2>
      <p>{`${typeGame ? 'Score' : 'Best series'}: ${gameResult.score}`}</p>
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
