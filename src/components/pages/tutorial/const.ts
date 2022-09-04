import { IUserWordInfo } from './types';

export const adress = 'https://react-rslang-back-app.herokuapp.com/';
export const wordsPage = (group: number, page: number) => `${adress}words?group=${group}&page=${page}`;

export const getURLCreateWord = (userID: string, wordID: string) => `${adress}users/${userID}/words/${wordID}`;

export const getDefaultWordOptional = (typeAnswer: boolean, wordID: string): string => {
  const difficulty = 'none';
  const counterRight = Number(typeAnswer);
  const counterWrong = Number(!typeAnswer);
  const curSeries = Number(typeAnswer);
  const id = wordID;
  return JSON.stringify({
    difficulty,
    optional: {
      counterRight,
      counterWrong,
      curSeries,
      id,
    },
  });
};

export const getUpdateWordOptional = (result: boolean, info: IUserWordInfo): string => {
  const curSeries = result ? info.optional.curSeries + 1 : 0;
  let difficulty = 'none';
  if (info.difficulty === 'hard') {
    if (curSeries < 5) difficulty = 'hard';
    else if (curSeries === 5) difficulty = 'study';
  } else if (info.difficulty === 'none' && curSeries >= 3) {
    difficulty = 'study';
  } else if (info.difficulty === 'study' && curSeries === 0) {
    difficulty = 'none';
  }
  const counterRight = result ? info.optional.counterRight + 1 : info.optional.counterRight;
  const counterWrong = result ? info.optional.counterWrong : info.optional.counterWrong + 1;
  const { id } = info.optional;
  return JSON.stringify({
    difficulty,
    optional: {
      counterRight,
      counterWrong,
      curSeries,
      id,
    },
  });
};
