import { adress } from '../tutorial/const';
import { IWordInGame, RestartGameSprintProp } from '../tutorial/types';

export const multipliers = [1, 2, 4, 8];
export const baseScoreStep = 10;

export const audioSignalElCorrect = new Audio(`${adress}files/audio/correct.mp3`);
audioSignalElCorrect.load();
export const audioSignalElError = new Audio(`${adress}files/audio/error.mp3`);
audioSignalElError.load();

export const paramsToRestartSprintGame: RestartGameSprintProp = {
  setCounter: () => 0,
  setCurGroup: () => 0,
  setLoading: () => 0,
  setWordNum: () => 0,
  setScore: () => 0,
  setLampSeries: () => 0,
  setBirdSeries: () => 0,
  setVolumeAudioSignal: () => 0,
};

export const wordInGame: IWordInGame[] = [];
export const firstWordInGame: IWordInGame[] = [];
