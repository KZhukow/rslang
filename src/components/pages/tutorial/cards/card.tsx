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
    <div className="card_container">
      <ModifierBtns />
      <div className="card_img" style={{ backgroundImage: bgCard }}>
        <div className="card_gradient">
          <p className="card_title">{ word.word }</p>
          <div className="card_subtitle">
            <span>{ word.transcription }</span>
            <span>{ word.wordTranslate }</span>
            <AudioBtns id={word.id} audioSrc={audioSrc} />
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
