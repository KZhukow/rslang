import { Root } from 'react-dom/client';
import Context from '../model/Context';
import ProcessorsVault from '../processors/processorsVault';
import Main from '../pages/main/Main';
import AboutPage from '../pages/about/About';
import GlossaryPage from '../pages/glossary/Glossary';
import GamesPage from '../pages/games/Games';
import StatisticsPage from '../pages/statistics/Statistics';

function App(root: Root) {
  const processorsVault = new ProcessorsVault();
  const context = new Context();
  context.url.hash = '';
  context.pageClasses.set('/home', new Main());
  context.pageClasses.set('/', new Main());
  context.pageClasses.set('', new Main());
  context.pageClasses.set('/about', new AboutPage());
  context.pageClasses.set('/glossary', new GlossaryPage());
  context.pageClasses.set('/games', new GamesPage());
  context.pageClasses.set('/statistics', new StatisticsPage());
  context.root = root;

  processorsVault.startProcessors.forEach(((processor) => {
    if (context.isNotFinal && processor.isApplicable) processor.runProcess(context);
  }));

  window.addEventListener('hashchange', () => {
    processorsVault.startProcessors.forEach(((processor) => {
      if (context.isNotFinal && processor.isApplicable) processor.runProcess(context);
    }));
  });
}

export default App;
