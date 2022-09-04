import { IUserStatisticData } from '../../../pages/statistics/interfaces/interfaces';

export const errorLogin = 'Неправильный логин или пароль';
export const errorEmail = 'пользователь с таким email уже есть';
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
      newWordsOfDay: 0,
    },
    sprint: {
      learnedWords: 0,
      score: 0,
      bestSeries: 0,
      allRightofDay: 0,
      allWrongofDay: 0,
      newWordsOfDay: 0,
    },
    audioCall: {
      learnedWords: 0,
      score: 0,
      bestSeries: 0,
      allRightofDay: 0,
      allWrongofDay: 0,
      newWordsOfDay: 0,
    },
  },
};
