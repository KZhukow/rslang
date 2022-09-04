/* eslint-disable max-len */
import { dataUser } from '../statistics/interfaces/interfaces';
import { adress, getDefaultWordOptional, getUpdateWordOptional, getURLCreateWord } from '../tutorial/const';
import { IOldWordsInfo, IUserWordInfo, IWordInGame } from '../tutorial/types';

export async function getUserWords(): Promise<IUserWordInfo[]> {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const response = await fetch(`${adress}users/${userData.userId}/words`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      Accept: 'application/json',
    },
  });
  const content: IUserWordInfo[] = await response.json();
  return content;
}

export async function createUserWords(newWords: IWordInGame[]) {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const requests = newWords.map((word) => fetch(getURLCreateWord(userData.userId, word.id), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: getDefaultWordOptional(word.result, word.id),
  }));
  await Promise.all(requests).then();
}

export async function updateUserWords(oldWordsInfo: IOldWordsInfo[]) {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const requests = oldWordsInfo.map((word) => fetch(getURLCreateWord(userData.userId, word.info.optional.id), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: getUpdateWordOptional(word.result, word.info),
  }));
  await Promise.all(requests).then();
}
