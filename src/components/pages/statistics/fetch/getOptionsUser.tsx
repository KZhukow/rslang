import { gameResult } from '../../sprint/const';
import { IWordInGame } from '../../tutorial/types';
import { USERS } from '../const/const';
import { IUserStatisticData, dataUser, IdayStatistic, IGamesStatistic } from '../interfaces/interfaces';

export async function getOptionsUser() {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const response = await fetch(`${USERS}/${userData.userId}/statistics`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}

export async function upsertOptionsUser(authorizedUser: IUserStatisticData) {
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

function addNextDay(statisticsOfUser: IUserStatisticData) {
  const path = statisticsOfUser?.optional.allTimeStatistic.daysProgress;
  const date = JSON.parse(JSON.stringify(new Date()));
  if (path.length === 0) return false;
  const date2 = path[path.length - 1].date as string;

  const dataView = `${`${date.slice(8, 10)}`}.${`${date.slice(5, 7)}`}.${`${date.slice(0, 4)}`}`;
  const dataView2 = `${`${date2.slice(8, 10)}`}.${`${date2.slice(5, 7)}`}.${`${date2.slice(0, 4)}`}`;

  return dataView2 === dataView;
}

function rightWrongAnswer(position: IdayStatistic | IGamesStatistic) {
  for (let i = 0; i < gameResult.wordInGame.length; i += 1) {
    if (gameResult.wordInGame[i].result) {
      position.allRightofDay += 1;
    } else {
      position.allWrongofDay += 1;
    }
  }
}

export async function getWordsUser() {
  const userData: dataUser = JSON.parse(localStorage.getItem('userData') as string);
  const response = await fetch(`${USERS}/${userData.userId}/words`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}

export async function saveStatisicsGame(
  game: boolean,
  newWordArray: IWordInGame[],
  amountNewStudyWords: number,
) {
  const getDataUser: IUserStatisticData = await getOptionsUser();
  const { audioCall, sprint, dayStatistic, allTimeStatistic } = getDataUser.optional;
  if (!game) {
    if (addNextDay(getDataUser)) {
      rightWrongAnswer(audioCall);
      audioCall.bestSeries = (gameResult.score > audioCall.bestSeries)
        ? gameResult.score : audioCall.bestSeries;
      audioCall.newWordsOfDay += newWordArray.length;
    } else {
      audioCall.allRightofDay = 0;
      audioCall.allWrongofDay = 0;
      audioCall.bestSeries = 0;
      audioCall.newWordsOfDay = 0;
      rightWrongAnswer(audioCall);
      audioCall.bestSeries = (gameResult.score > audioCall.bestSeries)
        ? gameResult.score : audioCall.bestSeries;
      audioCall.newWordsOfDay += newWordArray.length;
    }
  }
  if (game) {
    if (addNextDay(getDataUser)) {
      rightWrongAnswer(sprint);
      sprint.score = (gameResult.score > sprint.score)
        ? gameResult.score : sprint.score;
      sprint.newWordsOfDay += newWordArray.length;
    } else {
      sprint.allRightofDay = 0;
      sprint.allWrongofDay = 0;
      sprint.score = 0;
      sprint.newWordsOfDay = 0;
      rightWrongAnswer(sprint);
      sprint.score = (gameResult.score > sprint.score)
        ? gameResult.score : sprint.score;
      sprint.newWordsOfDay += newWordArray.length;
    }
  }

  if (addNextDay(getDataUser)) {
    rightWrongAnswer(dayStatistic);
    dayStatistic.newWordsOfDay += newWordArray.length;
    dayStatistic.learnedWords += amountNewStudyWords;
    if (dayStatistic.learnedWords < 0) {
      dayStatistic.learnedWords = 0;
    }
    allTimeStatistic.daysProgress.pop();
    allTimeStatistic.daysProgress.push(dayStatistic);
  } else {
    dayStatistic.allRightofDay = 0;
    dayStatistic.allWrongofDay = 0;
    dayStatistic.learnedWords = 0;
    dayStatistic.newWordsOfDay = 0;
    rightWrongAnswer(dayStatistic);
    dayStatistic.newWordsOfDay += newWordArray.length;
    dayStatistic.learnedWords += amountNewStudyWords;
    if (dayStatistic.learnedWords < 0) {
      dayStatistic.learnedWords = 0;
    }
    dayStatistic.date = new Date();
    allTimeStatistic.daysProgress.push(dayStatistic);
  }
  delete getDataUser.id;
  await upsertOptionsUser(getDataUser);
}

export async function upsertStatiscticGame() {
  const getDataUser: IUserStatisticData = await getOptionsUser();
  const { audioCall, sprint, dayStatistic, allTimeStatistic } = getDataUser.optional;
  if (!addNextDay(getDataUser)) {
    audioCall.allRightofDay = 0;
    audioCall.allWrongofDay = 0;
    audioCall.bestSeries = 0;
    audioCall.newWordsOfDay = 0;
    sprint.allRightofDay = 0;
    sprint.allWrongofDay = 0;
    sprint.score = 0;
    sprint.newWordsOfDay = 0;
    dayStatistic.allRightofDay = 0;
    dayStatistic.allWrongofDay = 0;
    dayStatistic.learnedWords = 0;
    dayStatistic.newWordsOfDay = 0;
    dayStatistic.date = new Date();
    allTimeStatistic.daysProgress.push(dayStatistic);
    delete getDataUser.id;
    await upsertOptionsUser(getDataUser);
  }
}

export async function updateUserStatistic(newWord: boolean, learnedWord: boolean) {
  const getDataUser: IUserStatisticData = await getOptionsUser();
  const { dayStatistic, allTimeStatistic } = getDataUser.optional;

  if (addNextDay(getDataUser)) {
    if (newWord) {
      dayStatistic.newWordsOfDay += 1;
      dayStatistic.learnedWords += 1;
    } else if (learnedWord) {
      dayStatistic.learnedWords += 1;
    } else {
      dayStatistic.learnedWords -= 1;
      if (dayStatistic.learnedWords < 0) {
        dayStatistic.learnedWords = 0;
      }
    }
    allTimeStatistic.daysProgress.pop();
    allTimeStatistic.daysProgress.push(dayStatistic);
  } else {
    if (newWord) {
      dayStatistic.newWordsOfDay += 1;
      dayStatistic.learnedWords += 1;
    } else if (learnedWord) {
      dayStatistic.learnedWords += 1;
    } else {
      dayStatistic.learnedWords -= 1;
      if (dayStatistic.learnedWords < 0) {
        dayStatistic.learnedWords = 0;
      }
    }
    allTimeStatistic.daysProgress.push(dayStatistic);
  }
  delete getDataUser.id;
  await upsertOptionsUser(getDataUser);
}
