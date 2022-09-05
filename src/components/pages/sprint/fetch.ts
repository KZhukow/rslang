/* eslint-disable max-len */
import { dataUser } from '../statistics/interfaces/interfaces';
import { adress, getDefaultWordOptional, getUpdateWordOptional, getUrlAggregateWordsPage, getURLCreateWord, getWordOptional, updateWordOptional, wordsPage } from '../tutorial/const';
import { IAggregatedWords, IOldWordsInfo, IPaginatedResults, IUserWordInfo, IWord, IWordInGame } from '../tutorial/types';

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

export async function createUserWord(wordID: string, typeBtn: boolean) {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const request = await fetch(getURLCreateWord(userData.userId, wordID), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: getWordOptional(wordID, typeBtn),
  });
  const answer: IUserWordInfo = await request.json();
  return answer;
}

export async function updateUserWord(userWord: IUserWordInfo, typeBtn: boolean, btnState: boolean) {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const request = await fetch(getURLCreateWord(userData.userId, userWord.optional.id), {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: updateWordOptional(userWord, typeBtn, btnState),
  });
  const answer = await request.json();
  return answer;
}

export async function getAggregatedWords(group: number, page: number): Promise<IPaginatedResults[]> {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const request = await fetch(getUrlAggregateWordsPage(group, page, userData.userId), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userData.token}`,
      accept: 'application/json',
    },
  });
  const studyWords: IAggregatedWords[] = await request.json();
  return studyWords[0].paginatedResults;
}

export async function getPageWords(group: number, page: number): Promise<IWord[]> {
  const request = await fetch(wordsPage(group, page));
  const words: IWord[] = await request.json();
  return words;
}
