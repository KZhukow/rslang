import { IUserStatisticData } from '../../../pages/statistics/interfaces/interfaces';

export const errorLogin = 'Incorrect login or password';
export const errorEmail = 'User with such an email already exists';
export const oneAuthorizedUser: IUserStatisticData = {
  learnedWords: 0,
  optional: {
    allTimeStatistic: { daysProgress: [], words: [] },
    dayStatistic: {
      date: new Date(),
      learnedWords: 0,
      learnedWordsOfDay: 0,
      allRightofDay: 0,
      allWrongofDay: 0,
      newWordsOfDay: [],
    },
    sprint: {
      learnedWords: 0,
      bestSeries: 0,
      allRightofDay: 0,
      allWrongofDay: 0,
      newWordsOfDay: [],
    },
    audioCall: {
      learnedWords: 0,
      bestSeries: 0,
      allRightofDay: 0,
      allWrongofDay: 0,
      newWordsOfDay: [],
    },
  },
};
