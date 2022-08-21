/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

import { IGamesStatistic, IUserStatisticData } from '../../../interfaces/interfaces';
import Procent from '../utils/utils';

const learnWords = 'Новых слов: ';
const procentRight = 'Правильных ответов: ';
const strick = 'Самая длинная серия правильных ответов: ';
const learnSvg = (<svg className="MuiSvgIconRoot" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>);
const procentSvg = (<svg className="MuiSvgIconRoot" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>);
const strictSvg = (
  <svg className="MuiSvgIconRoot" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
  </svg>
);
const titleAll = 'Статистика за сегодня';
const newWordDay = 'Новых слов';
const learnWordDay = 'Слов изучено';
const procentAnswerOfDay = 'Правильных ответов';

interface statisticsProps {
  title: string,
  statisticsGame: IGamesStatistic
}

export function GamesStatistics({ title, statisticsGame }: statisticsProps) {
  const procent = Procent(statisticsGame.allRightofDay, statisticsGame.allWrongofDay);
  return (
    <div className="wrapperStatisticsGame">
      <div className="wrapperStatisticsGameTitle">{title}</div>
      <div className="gamesStatistics">
        {' '}
        {learnSvg}
        {' '}
        {learnWords}
        {' '}
        {statisticsGame.newWordsOfDay.length}
      </div>
      <div className="gamesStatistics">
        {procentSvg}
        {' '}
        {procentRight}
        {' '}
        {procent}
        %
      </div>
      <div className="gamesStatistics">
        {strictSvg}
        {' '}
        {strick}
        {' '}
        {statisticsGame.bestSeries}
      </div>
    </div>
  );
}

export function AllStatisticsOfDay({ optional }: IUserStatisticData) {
  const procent = Procent(optional.dayStatistic.allRightofDay, optional.dayStatistic.allWrongofDay);
  return (
    <div className="wrapperAllStatistics">
      <div className="wrapperStatisticsTitle">{titleAll}</div>
      <div className="wrapperStatisticAll">
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {(optional.dayStatistic.newWordsOfDay as Array<string>).length}
          </div>
          <div className="statisticAllDiscription">
            {' '}
            {newWordDay}
            {' '}
          </div>
        </div>
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {optional.dayStatistic.learnedWords}
          </div>
          <div className="statisticAllDiscription">
            {' '}
            {learnWordDay}
            {' '}
          </div>
        </div>
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {procent}
            %
          </div>
          <div className="statisticAllDiscription">
            {' '}
            {procentAnswerOfDay}
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
}
