/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

import { learnSvg, learnWords, procentSvg, procentRight, strictSvg, strick, titleAll, newWordDay, learnWordDay, procentAnswerOfDay } from '../const/const';
import { statisticsProps, IUserStatisticData } from '../interfaces/interfaces';
import Procent from '../utils/utils';

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
