import { axisYOne, axisYTwo, grafTitleOne, grafTitleTwo, nameGameAudioCall, nameGameSprint } from '../const/const';
import { PropsAuthorize } from '../interfaces/interfaces';
import { AllStatisticsOfDay, GamesStatisticsAudiocall, GamesStatisticsSprint } from './gamesStatistics';
import GrafStatictics from './grafStatistics';

export default function ViewAuthorize({ statisticsOfUser }: PropsAuthorize) {
  const { optional } = statisticsOfUser;
  return (
    <main className="main">
      <div className="mainGame">
        <div className="mainGameWrapper">
          {statisticsOfUser && (
            <GamesStatisticsSprint
              title={nameGameSprint}
              statisticsGame={optional.sprint}
            />
          )}
          {statisticsOfUser && (
          <GamesStatisticsAudiocall
            title={nameGameAudioCall}
            statisticsGame={optional.audioCall}
          />
          )}
        </div>
        {statisticsOfUser && <AllStatisticsOfDay optional={optional} />}
        <div className="mainGameWrapperGrafic">
          <div className="wrapperGraf">
            {statisticsOfUser && (
            <GrafStatictics
              title={grafTitleOne}
              allTimeStatistic={optional.allTimeStatistic}
              amountY={axisYOne}
            />
            )}
          </div>
          <div className="wrapperGraf">
            {statisticsOfUser && (
            <GrafStatictics
              title={grafTitleTwo}
              allTimeStatistic={optional.allTimeStatistic}
              amountY={axisYTwo}
            />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
