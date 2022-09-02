import React from 'react';
import { adress } from '../tutorial/const';
import { RestartGameSprintProp } from '../tutorial/types';
import { audioSignalElCorrect, audioSignalElError, paramsToRestartSprintGame, gameResult } from './const';

export function getNumPages(curNumPage: number[] = []) {
  const arrNum: number[] = [...curNumPage];
  while (arrNum.length < 3) {
    const num = Math.floor(Math.random() * 29);
    if (!arrNum.includes(num)) arrNum.push(num);
  }
  return arrNum;
}

export function getWordNum(curNumWord: number) {
  let num = curNumWord;
  if (Math.random() < 0.5) {
    while (num === curNumWord) {
      num = Math.floor(Math.random() * 59);
    }
  }
  return num;
}

export function gamePlayAudio(
  src: string,
  audio: HTMLAudioElement,
  setAudioState: React.Dispatch<React.SetStateAction<string>>,
) {
  setAudioState('');
  audio.onended = null;
  audio.src = adress + src;
  audio.play();
}

export function playAudioSignal(state: boolean) {
  if (state) {
    audioSignalElError.pause();
    audioSignalElError.currentTime = 0;
    audioSignalElCorrect.currentTime = 0;
    audioSignalElCorrect.play();
  } else {
    audioSignalElCorrect.pause();
    audioSignalElCorrect.currentTime = 0;
    audioSignalElError.currentTime = 0;
    audioSignalElError.play();
  }
}

export function switchVolumeAudioSignal(
  setVolumeAudioSignal: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setVolumeAudioSignal((state) => !state);
  audioSignalElCorrect.volume = Number(!audioSignalElCorrect.volume);
  audioSignalElError.volume = Number(!audioSignalElError.volume);
}

export function restartGameSprint(params: RestartGameSprintProp) {
  params.setCounter(0);
  params.setCurGroup(-1);
  params.setLoading(true);
  params.setWordNum(0);
  params.setScore(0);
  params.setLampSeries(0);
  params.setBirdSeries(0);
  params.setVolumeAudioSignal(true);
}

export function restartGameAudioCall() {
  //
  // console.log('Функция, которая перезапустит игру Аудио вызов');
}

export function restartGame(typeGame: boolean) {
  gameResult.wordInGame.length = 0;
  if (typeGame) {
    restartGameSprint(paramsToRestartSprintGame);
  } else {
    restartGameAudioCall();
  }
}
