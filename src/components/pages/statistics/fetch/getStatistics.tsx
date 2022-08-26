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
    // eslint-disable-next-line no-unused-expressions
    userData && getStatisticsOfUser();
  }, []);
  return statisticsOfUser;
}
