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

export interface IWordOptional {
  counterRight: number,
  counterWrong: number,
  curSeries: number,
  id: string,
}

export interface IUserWordInfo {
  difficulty: 'hard' | 'study' | 'none',
  optional: IWordOptional,
}

export interface IOldWordsInfo {
  result: boolean,
  info: IUserWordInfo,
}

export interface IPaginatedResults {
  userWord?: IUserWordInfo,
  audio: string,
  audioExample: string,
  audioMeaning: string,
  group: number
  image: string,
  page: number
  textExample: string,
  textExampleTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  transcription: string,
  word: string,
  wordTranslate: string,
  _id: string,
}
interface ICount {
  count: number,
}
type Count = [ICount];
export interface IAggregatedWords{
  paginatedResults: IPaginatedResults[],
  totalCount: Count,
}

export interface CardProp {
  word: IPaginatedResults | IWord;
  setCounter: React.Dispatch<React.SetStateAction<number>>,
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
export interface ModifierBtnsProp {
  userWord: IUserWordInfo | undefined,
  id: string,
  setUserWordState: React.Dispatch<React.SetStateAction<IUserWordInfo | undefined>>,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
}
export interface ITutorialParams {
  group: string,
  page: string,
}
