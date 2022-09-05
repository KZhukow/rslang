import { FaCheck, FaCross } from 'react-icons/fa';
import SprintAudioBtn from '../../pages/sprint/sprint-audio-btn';
import { IWordInGame } from '../../pages/tutorial/types';

interface RowGameResultProp {
  word: IWordInGame,
}

export default function RowGameResult({ word }: RowGameResultProp) {
  return (
    <div className="game-result-table-row">
      <SprintAudioBtn src={word.audio} />
      <p>{word.word}</p>
      <p>{word.transcription}</p>
      <p>{word.wordTranslate}</p>
      {word.result ? (<FaCheck color="lime" height={100} />) : (<FaCross color="red" height={100} />)}
    </div>
  );
}
