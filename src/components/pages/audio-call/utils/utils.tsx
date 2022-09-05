import React from 'react';
import { adress } from '../const/const';
import { wordProps } from '../interfaces/interfaces';

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

export function randomNumber() {
  return (Math.floor(Math.random() * 59));
}

export function WordsSupportCall({ wordWrite, i }: wordProps) {
  return (
    <div className="wrapper-word-call">
      <div className={`word-call-choise ${`call${i + 1}`}`} id={`call${wordWrite.word}`}>
        {`${i + 1}${wordWrite.wordTranslate}`}
      </div>
    </div>
  );
}

export function findBestSeria(array: number[]) {
  let max = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      counter++;
      if (i === (array.length - 1)) {
        if (counter > max) max = counter;
        counter = 0;
      }
    }
    if (array[i] !== 1) {
      if (counter > max) max = counter;
      counter = 0;
    }
  }
  return max;
}
