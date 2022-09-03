import React from 'react';

export interface IWord {
  id: string
  group: number
  page: number
  word: string
  image: string
  audio: string
  audioMeaning: string
  audioExample: string
  textMeaning: string
  textExample: string
  transcription: string
  wordTranslate: string
  textMeaningTranslate: string
  textExampleTranslate: string
}
export interface CardProp {
  word: IWord;
}

export type wordProps = {
  wordWrite: IWord;
  i: number;
}
export interface CardPropWords {
  words: Array<IWord>;
  word: IWord;
  wordNum: number;
  setWordNum: React.Dispatch<React.SetStateAction<number>>;
  setbestSeria: React.Dispatch<React.SetStateAction<number[]>>;
  bestSeriaArray: number[];
}

export interface RestartGameAudiocallProp {
  setCurGroup: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setLoading: React.Dispatch<React.SetStateAction<boolean>> | (() => 0),
  setWordNum: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setBestSeria: React.Dispatch<React.SetStateAction<number[]>> |
  (() => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
}
