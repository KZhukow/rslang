import { learnSvg, learnWords, procentSvg, procentRight, strictSvg, strick, titleAll, newWordDay, learnWordDay, procentAnswerOfDay } from '../const/const';
import { statisticsProps, IUserStatisticData } from '../interfaces/interfaces';
import Procent from '../utils/utils';

export function GamesStatistics({ title, statisticsGame }: statisticsProps) {
  const procent = Procent(statisticsGame.allRightofDay, statisticsGame.allWrongofDay);
  return (
    <div className="game_statistic_content">
      <div className="game_statistic_title">{title}</div>
      <div className="game_statistic">
        {learnSvg}
        {learnWords}
        {statisticsGame.newWordsOfDay.length}
      </div>
      <div className="game_statistic">
        {procentSvg}
        {procentRight}
        {procent}
        %
      </div>
      <div className="game_statistic">
        {strictSvg}
        {strick}
        {statisticsGame.bestSeries}
      </div>
    </div>
  );
}

export function AllStatisticsOfDay({ optional }: IUserStatisticData) {
  const procent = Procent(optional.dayStatistic.allRightofDay, optional.dayStatistic.allWrongofDay);
  return (
    <div className="all_statistics">
      <h2 className="all_statistics_title">{titleAll}</h2>
      <div className="all_statistics_content">
        <div className="all_statistic">
          <div className="all_statistic_amount">
            {(optional.dayStatistic.newWordsOfDay as Array<string>).length}
          </div>
          <div className="all_statistic_description">
            {newWordDay}
          </div>
        </div>
        <div className="all_statistic">
          <div className="all_statistic_amount">
            {optional.dayStatistic.learnedWords}
          </div>
          <div className="all_statistic_description">
            {learnWordDay}
          </div>
        </div>
        <div className="all_statistic">
          <div className="all_statistic_amount">
            {procent}
            %
          </div>
          <div className="all_statistic_description">
            {procentAnswerOfDay}
          </div>
        </div>
      </div>
    </div>
  );
}
