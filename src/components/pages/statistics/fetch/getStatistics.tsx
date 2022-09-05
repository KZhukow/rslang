import { useState, useEffect, useContext } from 'react';
import { AuthorizedCtx } from '../../../app/App';
import { viewButtonLogin } from '../../../global-components/authorization/utils/utils';
import { USERS } from '../const/const';
import { IUserStatisticData, dataUser } from '../interfaces/interfaces';

export default function getStatistics() {
  const [authrize] = useContext(AuthorizedCtx);
  const [loading, setLoading] = useState(false);
  const [statisticsOfUser, setStatisticsOfUser] = useState<IUserStatisticData>();
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);

  async function getStatisticsOfUser() {
    setLoading(true);
    try {
      const response = await fetch(`${USERS}/${userData.userId}/statistics`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      setStatisticsOfUser(await response.json());
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStatisticsOfUser();
    viewButtonLogin(authrize);
  }, []);
  return { loading, statisticsOfUser, authrize };
}
