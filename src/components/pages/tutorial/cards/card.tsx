import { CardProp, IAudioSrc } from '../types';

import AudioBtns from './audio-btns';
import ModifierBtns from './modifierBtns';

export default function Card({ word }: CardProp) {
  const bgCard = `url(https://react-rslang-back-app.herokuapp.com/${word.image})`;
  const audioSrc: IAudioSrc = {
    audio0: `https://react-rslang-back-app.herokuapp.com/${word.audio}`,
    audio1: `https://react-rslang-back-app.herokuapp.com/${word.audioMeaning}`,
    audio2: `https://react-rslang-back-app.herokuapp.com/${word.audioExample}`,
  };

  return (
    <div className="card-container">
      <ModifierBtns />
      <div className="card-img" style={{ backgroundImage: bgCard }}>
        <div className="card-gradient">
          <p className="card-title">{ word.word }</p>
          <div className="card-subtitle">
            <span>{ word.transcription }</span>
            <span>{ word.wordTranslate }</span>
            <AudioBtns id={word.id} audioSrc={audioSrc} />
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
