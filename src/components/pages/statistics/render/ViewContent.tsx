import { axisYOne, axisYTwo, grafTitleOne, grafTitleTwo, nameGameAudioCall, nameGameSprint } from '../const/const';
import { PropsAuthorize } from '../interfaces/interfaces';
import { AllStatisticsOfDay, GamesStatisticsAudiocall, GamesStatisticsSprint } from './gamesStatistics';
import GrafStatictics from './grafStatistics';

export default function ViewAuthorize({ statisticsOfUser }: PropsAuthorize) {
  const { optional } = statisticsOfUser;
  return (
    <main className="statistic_page">
      <div className="authorized_container">
        <div className="games_statistic">
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
        <div className="game_statistic_graphics">
          <div className="graph_content">
            {statisticsOfUser && (
            <GrafStatictics
              title={grafTitleOne}
              allTimeStatistic={optional.allTimeStatistic}
              amountY={axisYOne}
            />
            )}
          </div>
          <div className="graph_content">
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
