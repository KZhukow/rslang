/* eslint-disable max-len */
import { IUserStatisticData } from '../../../interfaces/interfaces';
import { GamesStatistics, AllStatisticsOfDay } from './gamesStatistics';
import GrafStatictics from './grafStatistics';

interface PropsAuthorize {
  statisticsOfUser: IUserStatisticData;
}

export default function Authorize({ statisticsOfUser }: PropsAuthorize) {
  const { optional } = statisticsOfUser;
  return (
    <main className="main">
      <div className="mainGame">
        <div className="mainGameWrapper">
          {statisticsOfUser && <GamesStatistics title="Спринт" statisticsGame={optional.sprint} />}
          {statisticsOfUser && <GamesStatistics title="Аудиовызов" statisticsGame={optional.audioCall} />}
        </div>
        {statisticsOfUser && <AllStatisticsOfDay optional={optional} learnedWords={0} />}
        <div className="mainGameWrapperGrafic">
          <div className="wrapperGraf">
            {statisticsOfUser && <GrafStatictics title="Количество новых слов" titleX="период обучения" titleY="кол-во слов" allTimeStatistic={optional.allTimeStatistic} amountY="newWordsOfDay" />}
          </div>
          <div className="wrapperGraf">
            {statisticsOfUser && <GrafStatictics title="Количество изученных слов" titleX="период обучения" titleY="кол-во слов" allTimeStatistic={optional.allTimeStatistic} amountY="learnedWords" />}
          </div>
        </div>
      </div>
    </main>
  );
}
