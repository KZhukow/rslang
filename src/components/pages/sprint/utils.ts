import React from 'react';
import { adress } from '../tutorial/const';

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
