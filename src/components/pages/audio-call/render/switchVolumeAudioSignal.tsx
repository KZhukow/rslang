import { useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { switchVolumeAudioSignal } from '../../sprint/utils';

export default function SwitchVolumeAudioSignal() {
  const [volumeAudioSignal, setVolumeAudioSignal] = useState(true);
  return (
    <div className="mute-btn" onClick={() => switchVolumeAudioSignal(setVolumeAudioSignal)} role="presentation">
      {!volumeAudioSignal && <FaVolumeMute color="gray" size="100%" />}
      {volumeAudioSignal && <FaVolumeUp color="gray" size="100%" />}
    </div>
  );
}
