import { SIGNIN, USERS } from '../../../pages/statistics/const/const';
import { dataUser, IUser, IUserStatisticData } from '../../../pages/statistics/interfaces/interfaces';
import { oneAuthorizedUser } from '../const/const';

export async function AuthorizeUser(takeUserData: IUser) {
  const response = await fetch(SIGNIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(takeUserData),
  }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}

export async function createNewUser(takeUserData: IUser) {
  const response = await fetch(USERS, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(takeUserData),
  }).catch();
  return response.status !== 200 ? { success: false } : { success: true };
}

export async function upsertStatistics(authorizedUser: IUserStatisticData = oneAuthorizedUser) {
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
