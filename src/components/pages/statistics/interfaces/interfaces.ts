export interface IGamesStatistic {
  learnedWords: number;
  score: number;
  bestSeries: number;
  allRightofDay: number;
  allWrongofDay: number;
  newWordsOfDay: number
}
export interface IdayStatistic {
  date: Date | string;
  learnedWords: number;
  learnedWordsOfDay: number;
  allRightofDay: number;
  allWrongofDay: number;
  newWordsOfDay: number;
}
export interface IdayStatisticAll {
  date: Date | string;
  learnedWords: number;
  newWordsOfDay: number;
}
export interface IAlltimeStatistic {
  daysProgress:Array<IdayStatisticAll>;
  words:Array<string | number>;
}
export interface IDataGrafStatistis {
  title: string;
  titleX?: string;
  titleY?: string;
  allTimeStatistic: IAlltimeStatistic;
  amountY: string;
}

export interface IOptionalStatistic {
  allTimeStatistic: IAlltimeStatistic;
  dayStatistic:IdayStatistic ;
  sprint: IGamesStatistic;
  audioCall: IGamesStatistic;
}

export interface IUserStatisticData {
  id?: string;
  learnedWords?: number;
  optional: IOptionalStatistic;
}
export interface PropsAuthorize {
  statisticsOfUser: IUserStatisticData;
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
  avatar?: string,
}

export interface dataUser {
  message: string;
  name: string;
  refreshToken: string;
  token: string;
  userId: string;
}

export interface ISignin {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface statisticsProps {
  title: string,
  statisticsGame: IGamesStatistic
}
