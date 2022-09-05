import { learnSvg, learnWords, procentSvg, procentRight, strictSvg, strick, titleAll, newWordDay, learnWordDay, procentAnswerOfDay, strick2 } from '../const/const';
import { statisticsProps, IUserStatisticData } from '../interfaces/interfaces';
import Procent from '../utils/utils';

export function GamesStatisticsAudiocall({ title, statisticsGame }: statisticsProps) {
  const procent = Procent(statisticsGame.allRightofDay, statisticsGame.allWrongofDay);
  return (
    <div className="wrapperStatisticsGame">
      <div className="wrapperStatisticsGameTitle">{title}</div>
      <div className="gamesStatistics">
        {learnSvg}
        {learnWords}
        {statisticsGame.newWordsOfDay}
      </div>
      <div className="gamesStatistics">
        {procentSvg}
        {procentRight}
        {procent}
        %
      </div>
      <div className="gamesStatistics">
        {strictSvg}
        {strick}
        {statisticsGame.bestSeries}
      </div>
    </div>
  );
}

export function GamesStatisticsSprint({ title, statisticsGame }: statisticsProps) {
  if (!statisticsGame.score) {
    statisticsGame.score = 0;
  }
  const procent = Procent(statisticsGame.allRightofDay, statisticsGame.allWrongofDay);
  return (
    <div className="wrapperStatisticsGame">
      <div className="wrapperStatisticsGameTitle">{title}</div>
      <div className="gamesStatistics">
        {learnSvg}
        {learnWords}
        {statisticsGame.newWordsOfDay}
      </div>
      <div className="gamesStatistics">
        {procentSvg}
        {procentRight}
        {procent}
        %
      </div>
      <div className="gamesStatistics">
        {strictSvg}
        {strick2}
        {statisticsGame.score}
      </div>
    </div>
  );
}

export function AllStatisticsOfDay({ optional }: IUserStatisticData) {
  const procent = Procent(optional.dayStatistic.allRightofDay, optional.dayStatistic.allWrongofDay);
  if (optional.dayStatistic.learnedWords < 0) optional.dayStatistic.learnedWords = 0;
  return (
    <div className="wrapperAllStatistics">
      <div className="wrapperStatisticsTitle">{titleAll}</div>
      <div className="wrapperStatisticAll">
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {(optional.dayStatistic.newWordsOfDay)}
          </div>
          <div className="statisticAllDiscription">
            {newWordDay}
          </div>
        </div>
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {optional.dayStatistic.learnedWords}
          </div>
          <div className="statisticAllDiscription">
            {learnWordDay}
          </div>
        </div>
        <div className="statisticAll">
          <div className="statisticAllAmount">
            {procent}
            %
          </div>
          <div className="statisticAllDiscription">
            {procentAnswerOfDay}
          </div>
        </div>
      </div>
    </div>
  );
}
