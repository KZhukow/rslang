import { useContext, useState } from 'react';
import { AuthorizedCtx } from '../../../app/App';
import { CardProp, IAudioSrc, IPaginatedResults, IWord } from '../types';

import AudioBtns from './audio-btns';
import ModifierBtns from './modifierBtns';
import WordStatistics from './word-statistics';

export default function Card({ word }: CardProp) {
  const bgCard = `url(https://react-rslang-back-app.herokuapp.com/${word.image})`;
  const audioSrc: IAudioSrc = {
    audio0: `https://react-rslang-back-app.herokuapp.com/${word.audio}`,
    audio1: `https://react-rslang-back-app.herokuapp.com/${word.audioMeaning}`,
    audio2: `https://react-rslang-back-app.herokuapp.com/${word.audioExample}`,
  };
  const [authorized] = useContext(AuthorizedCtx);

  const [userWordState, setUserWordState] = useState((word as IPaginatedResults).userWord);

  return (
    <div className="card-container">
      {authorized && (
        <ModifierBtns
          userWord={(word as IPaginatedResults).userWord}
          id={(word as IPaginatedResults)._id || (word as IWord).id}
          setUserWordState={setUserWordState}
        />
      )}
      {authorized && userWordState && (
        <WordStatistics
          right={userWordState.optional.counterRight}
          wrong={userWordState.optional.counterWrong}
        />
      )}
      <div className="card-img" style={{ backgroundImage: bgCard }}>
        <div className="card-gradient">
          <p className="card-title">{ word.word }</p>
          <div className="card-subtitle">
            <span>{ word.transcription }</span>
            <span>{ word.wordTranslate }</span>
            <AudioBtns
              id={(word as IPaginatedResults)._id || (word as IWord).id}
              audioSrc={audioSrc}
            />
          </div>
        </div>
      </div>
      <p dangerouslySetInnerHTML={{ __html: word.textMeaning }} />
      <p>{ word.textMeaningTranslate }</p>
      <p dangerouslySetInnerHTML={{ __html: word.textExample }} />
      <p>{ word.textExampleTranslate }</p>
    </div>
  );
}
