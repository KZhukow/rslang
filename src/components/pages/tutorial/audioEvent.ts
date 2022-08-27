import React from 'react';
import { IAudioSrc } from './types';

export function startAudioPlay(
  audioSrc: IAudioSrc,
  audio: HTMLAudioElement,
  setAudioState: React.Dispatch<React.SetStateAction<string>>,
  id: string,
) {
  setAudioState(id);
  let attempt = 0;
  audio.src = audioSrc.audio0;
  audio.onended = () => {
    audio.src = audioSrc.audio1;
    audio.play();
    audio.onended = () => {
      audio.src = audioSrc.audio2;
      if (attempt++) {
        setAudioState('');
      } else {
        audio.play();
      }
    };
  };
  audio.play();
}

export function stopAudioPlay(
  audio: HTMLAudioElement,
  setAudioState: React.Dispatch<React.SetStateAction<string>>,
) {
  setAudioState('');
  audio.pause();
}
