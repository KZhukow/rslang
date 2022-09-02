import { useContext } from 'react';
import { ReactComponent as SpeakerBtn } from '../tutorial/image/speaker.svg';
import { gamePlayAudio } from './utils';
import { audioEl, AudioPlayCtx } from '../../app/App';

interface SprintAudioBtnProp {
  src: string,
}

export default function SprintAudioBtn({ src }: SprintAudioBtnProp) {
  const [, setAudioState] = useContext(AudioPlayCtx);
  return (
    <div className="speakerBtn" onClick={() => gamePlayAudio(src, audioEl, setAudioState)} role="presentation">
      <SpeakerBtn />
    </div>
  );
}
