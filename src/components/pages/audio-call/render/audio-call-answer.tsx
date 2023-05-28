import { useContext } from 'react';
import { audioEl, AudioPlayCtx } from '../../../app/App';
import { SvgSongCallAnswer } from '../const/const';
import { CardProp } from '../interfaces/interfaces';
import { gamePlayAudio } from '../utils/utils';

export default function AnswerContentCall({ word }: CardProp) {
  const [, setAudioState] = useContext(AudioPlayCtx);
  const bgCard = `url(https://react-rslang-back-app.onrender.com/${word.image})`;
  return (
    <div className="answer-word-call call-hidden" id="answer-word-call">
      <div className="card-img-answer-call" style={{ backgroundImage: bgCard }}> </div>
      <div className="answer-right-call-wrapper">
        <button type="button" className="speakerBtnCallAnswer" onClick={() => gamePlayAudio(word.audio, audioEl, setAudioState)}>
          {SvgSongCallAnswer}
        </button>
        <div className="answer-word-right-call-wrapper">
          <div>{word.transcription}</div>
          <div>{word.word}</div>
          <div>{word.wordTranslate}</div>
        </div>
      </div>
    </div>
  );
}
