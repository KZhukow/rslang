import { useContext, useState } from 'react';
import { AuthorizedCtx } from '../../../app/App';
import { CardProp, IAudioSrc, IPaginatedResults, IWord } from '../types';

import AudioBtns from './audio-btns';
import ModifierBtns from './modifierBtns';
import WordStatistics from './word-statistics';

export default function Card({ word, setCounter }: CardProp) {
  const bgCard = `url(https://react-rslang-back-app.herokuapp.com/${word.image})`;
  const audioSrc: IAudioSrc = {
    audio0: `https://react-rslang-back-app.herokuapp.com/${word.audio}`,
    audio1: `https://react-rslang-back-app.herokuapp.com/${word.audioMeaning}`,
    audio2: `https://react-rslang-back-app.herokuapp.com/${word.audioExample}`,
  };
  const [authorized] = useContext(AuthorizedCtx);

  const [userWordState, setUserWordState] = useState((word as IPaginatedResults).userWord);
  const [visibility, setVisibility] = useState(true);
  return (
    <div className={`card_container ${visibility ? '' : 'card-container-hidden'}`}>
      {authorized && (
        <ModifierBtns
          userWord={(word as IPaginatedResults).userWord}
          id={(word as IPaginatedResults)._id || (word as IWord).id}
          setUserWordState={setUserWordState}
          setVisibility={setVisibility}
          setCounter={setCounter}
        />
      )}
      {authorized && userWordState && (
        <WordStatistics
          right={userWordState.optional.counterRight}
          wrong={userWordState.optional.counterWrong}
        />
      )}
      <div className="card_img" style={{ backgroundImage: bgCard }}>
        <div className="card_gradient">
          <p className="card_title">{ word.word }</p>
          <div className="card_subtitle">

            <span>{ word.transcription }</span>
            <span>{ word.wordTranslate }</span>
            <AudioBtns
              id={(word as IPaginatedResults)._id || (word as IWord).id}
              audioSrc={audioSrc}
            />
          </div>
        </div>
      </div>
      <div className="card_description">
        <p dangerouslySetInnerHTML={{ __html: word.textMeaning }} />
        <p>{ word.textMeaningTranslate }</p>
        <p dangerouslySetInnerHTML={{ __html: word.textExample }} className="card_text" />
        <p>{ word.textExampleTranslate }</p>
      </div>
    </div>
  );
}
