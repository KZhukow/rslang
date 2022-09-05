import { IUserWordInfo } from './types';

export const adress = 'https://react-rslang-back-app.herokuapp.com/';
export const wordsPage = (group: number, page: number) => `${adress}words?group=${group}&page=${page}`;
export const getUrlAggregateWordsPage = (group: number, page: number, id: string) => `${adress}users/${id}/aggregatedWords?wordsPerPage=20&filter={ "$and": [{ "page": ${page} }, {"group": ${group}}] }`;

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
  } else if (info.difficulty === 'none' && curSeries === 3) {
    difficulty = 'study';
  } else if (info.difficulty === 'study') {
    if (curSeries === 0) difficulty = 'none';
    else if (curSeries >= 3) difficulty = 'study';
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

export const getWordOptional = (wordID: string, typeBtn: boolean) => {
  const difficulty = typeBtn ? 'study' : 'hard';
  const counterRight = 0;
  const counterWrong = 0;
  const curSeries = typeBtn ? 3 : 0;
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
export const updateWordOptional = (
  userWord: IUserWordInfo,
  typeBtn: boolean,
  btnState: boolean,
) => {
  let { difficulty } = userWord;
  let { curSeries } = userWord.optional;
  if (!btnState) {
    difficulty = 'none';
    curSeries = 0;
  } else {
    difficulty = typeBtn ? 'study' : 'hard';
    curSeries = typeBtn ? 3 : 0;
  }
  const { counterRight, counterWrong, id } = userWord.optional;
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
