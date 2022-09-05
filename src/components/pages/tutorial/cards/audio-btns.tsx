import { useContext } from 'react';

import { AudioBtnsProp } from '../types';
import { startAudioPlay, stopAudioPlay } from '../audioEvent';

import { ReactComponent as SpeakerBtn } from '../image/speaker.svg';
import { ReactComponent as PauseBtn } from '../image/pause.svg';

import { audioEl, AudioPlayCtx } from '../../../app/App';

export default function AudioBtns({ id, audioSrc }: AudioBtnsProp) {
  const [audioState, setAudioState] = useContext(AudioPlayCtx);

  return audioState === id ? (
    <button type="button" className="pauseBtn" onClick={() => stopAudioPlay(audioEl, setAudioState)}>
      <PauseBtn />
    </button>
  )
    : (
      <button type="button" className="speakerBtn" onClick={() => startAudioPlay(audioSrc, audioEl, setAudioState, id)}>
        <SpeakerBtn />
      </button>
    );
}
