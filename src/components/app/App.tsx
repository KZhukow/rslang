/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
// import { gamesStatistics } from '../pages/statistics/rander/gamesStatistics';

import { AllStatisticsOfDay, GamesStatistics } from '../pages/statistics/render/gamesStatistics';
import GrafStatictics from '../pages/statistics/render/grafStatistics';
import { getStatistics, upsertStatistics } from '../pages/statistics/statistics';

function App() {
  upsertStatistics();
  // eslint-disable-next-line no-console
  const { statisticsOfUser } = getStatistics();
  if (statisticsOfUser) {
    // eslint-disable-next-line no-console
    console.log(statisticsOfUser);
  }
  return (
    <div className="wrapper">
      <header className="header" />
      <main className="main">
        <div className="mainGame">
          <div className="mainGameWrapper">
            {statisticsOfUser && <GamesStatistics title="Спринт" statisticsGame={statisticsOfUser.optional.sprint} />}
            {statisticsOfUser && <GamesStatistics title="Аудиовызов" statisticsGame={statisticsOfUser.optional.audioCall} />}
          </div>
          {statisticsOfUser && <AllStatisticsOfDay optional={statisticsOfUser.optional} learnedWords={0} />}
          <div className="mainGameWrapperGrafic">
            <div className="wrapperGraf">
              {statisticsOfUser && <GrafStatictics title="Количество новых слов" titleX="период обучения" titleY="кол-во слов" allTimeStatistic={statisticsOfUser.optional.allTimeStatistic} amountY="newWordsOfDay" />}
            </div>
            <div className="wrapperGraf">
              {statisticsOfUser && <GrafStatictics title="Количество изученных слов" titleX="период обучения" titleY="кол-во слов" allTimeStatistic={statisticsOfUser.optional.allTimeStatistic} amountY="learnedWords" />}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer" />
    </div>
  );
}
export default App;
