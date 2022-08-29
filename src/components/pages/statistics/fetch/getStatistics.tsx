import React, { useState, useEffect } from 'react';
import { USERS } from '../const/const';
import { IUserStatisticData, dataUser } from '../interfaces/interfaces';

export default function getStatistics(setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const [statisticsOfUser, setStatisticsOfUser] = useState<IUserStatisticData>();
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  async function getStatisticsOfUser() {
    setLoading(true);
    const response = await fetch(`${USERS}/${userData.userId}/statistics`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    setStatisticsOfUser(await response.json());
    setLoading(false);
  }
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    userData && getStatisticsOfUser();
  }, []);
  return statisticsOfUser;
}
