import React from 'react';

export interface IAudioSrc {
  audio0: string,
  audio1: string,
  audio2: string,
}

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

export type TAuthorizedCtx = [boolean, React.Dispatch<React.SetStateAction<boolean>>]
export type TAudioPlay = [string, React.Dispatch<React.SetStateAction<string>>]

export interface IGlobalContext {
  audio: {
    audioEl: HTMLAudioElement,
    audioPlay: TAudioPlay,
  },
  currentPage: string,
  authorized: TAuthorizedCtx,
}

export interface CardProp {
  word: IWord;
}
export interface CardsProp {
  wordsInfo: IWord[];
}
export interface AudioBtnsProp {
  id: string,
  audioSrc: IAudioSrc,
}
export interface CustomLinkProp {
  children: React.ReactNode,
  to: string,
  className: string,
}

export interface RestartGameSprintProp {
  setCounter: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setCurGroup: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setLoading: React.Dispatch<React.SetStateAction<boolean>> | (() => 0),
  setWordNum: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setScore: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setLampSeries: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setBirdSeries: React.Dispatch<React.SetStateAction<number>> | (() => 0),
  setVolumeAudioSignal: React.Dispatch<React.SetStateAction<boolean>> | (() => 0),
}

export interface IWordInGame {
  audio: string,
  word: string,
  transcription: string,
  wordTranslate: string,
  id: string,
  result: boolean,
}

export interface IGameResult {
  score: number,
  wordInGame: IWordInGame[],
  firstWordInGame: IWordInGame[],
}
