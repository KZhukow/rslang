/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { USERS } from '../const/const';
import { IUserStatisticData, dataUser } from '../interfaces/interfaces';

export default function getStatistics() {
  const [statisticsOfUser, setStatisticsOfUser] = useState<IUserStatisticData>();
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  async function getStatisticsOfUser() {
    const response = await fetch(`${USERS}/${userData.userId}/statistics`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userData.token}`,
      },
    });
    setStatisticsOfUser(await response.json());
  }
  useEffect(() => {
    getStatisticsOfUser();
  }, []);
  return statisticsOfUser;
}

// export function upsertStatistics(): void {
//   const sts: IUserStatisticData = {
//     learnedWords: 2,
//     optional: {
//       allTimeStatistic: { daysProgress: [{ date: new Date(), learnedWords: 1, learnedWordsOfDay: 1, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: ['sds'] }], words: ['sds'] },
//       dayStatistic: { date: new Date(), learnedWords: 1, learnedWordsOfDay: 1, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
//       sprint: { learnedWords: 1, bestSeries: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
//       audioCall: { learnedWords: 0, bestSeries: 0, allRightofDay: 0, allWrongofDay: 0, newWordsOfDay: [] },
//     },
//   };

//   async function upsertStatisticsOfUser(): Promise<void> {
//     const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
//     await fetch(`${USERS}/${userData.userId}/statistics`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${userData.token}`,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(sts),
//     });
//   }
//   useEffect(() => {
//     upsertStatisticsOfUser();
//   }, []);
// }

// export function getDataUser() {
//   const user = {
//     'name': 'Valera',
//     'email': 'yamaraur@mail.ru',
//     'password': '111111111',
//   };
//   // eslint-disable-next-line no-shadow
//   const [dataUser, setDataUser] = useState<ISignin>();

//   async function getData() {
//     const response = await fetch(SIGNIN, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });
//     setDataUser(await response.json());
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   if (dataUser) {
//     localStorage.setItem('userData', JSON.stringify(dataUser));
//   }
//   return { dataUser };
// }
