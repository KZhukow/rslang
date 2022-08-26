/* eslint-disable max-len */
import { useEffect } from 'react';
import { USERS } from '../const/const';
import { IUserStatisticData, dataUser } from '../interfaces/interfaces';

export const OneAuthorizedUser: IUserStatisticData = {
  learnedWords: 0,
  optional: {
    allTimeStatistic: { daysProgress: [{ date: new Date(), learnedWords: 0, learnedWordsOfDay: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] }], words: [] },
    dayStatistic: { date: new Date(), learnedWords: 0, learnedWordsOfDay: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
    sprint: { learnedWords: 0, bestSeries: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
    audioCall: { learnedWords: 0, bestSeries: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
  },
};
// если пользователь
export function upsertStatistics(authorizedUser: IUserStatisticData = OneAuthorizedUser): void {
  async function upsertStatisticsOfUser(): Promise<void> {
    const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
    await fetch(`${USERS}/${userData.userId}/statistics`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorizedUser),
    });
  }
  useEffect(() => {
    upsertStatisticsOfUser();
  }, []);
}
