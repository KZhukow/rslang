export interface IGamesStatistic {
  learnedWords: number;
  bestSeries: number;
  allRightofDay: number;
  allWrongofDay: number;
  newWordsOfDay: Array<string | number>;
}
export interface IdayStatistic {
  date: Date | string;
  learnedWords: number;
  learnedWordsOfDay: number;
  allRightofDay: number;
  allWrongofDay: number;
  newWordsOfDay: Array<string | number> | number;
}
export interface IAlltimeStatistic {
  daysProgress:Array<IdayStatistic>;
  words:Array<string | number>;
}
export interface IDataGrafStatistis {
  title: string;
  titleX: string;
  titleY: string;
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
  learnedWords: number;
  optional: IOptionalStatistic;
}
export interface PropsAuthorize {
  statisticsOfUser: IUserStatisticData;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserCreate {
  email: string;
  id: string;
  name: string;
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
