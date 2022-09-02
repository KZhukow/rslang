import { useContext } from 'react';
import { audioEl, AudioPlayCtx } from '../../../app/App';
import { SvgSongCall } from '../const/const';
import { gamePlayAudio } from '../utils/utils';

interface SprintAudioBtnProp {
  src: string,
  curGroup: number,
}

export default function CallAudioBtn({ src, curGroup }: SprintAudioBtnProp) {
  const [, setAudioState] = useContext(AudioPlayCtx);
  if (curGroup !== -1) gamePlayAudio(src, audioEl, setAudioState);
  return (
    <div className="song-wrapper-call" id="song-wrapper-call">
      <button type="button" className="speakerBtnCall" onClick={() => gamePlayAudio(src, audioEl, setAudioState)}>
        {SvgSongCall}
      </button>
    </div>
  );
}
