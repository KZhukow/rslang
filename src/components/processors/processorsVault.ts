import HashProcessing from './hashProcessing';
import ViewPage from './ViewPage';
import Router from './router';
import SearchProcessing from './searchProcessing';

class ProcessorsVault {
  startProcessors = [
    new HashProcessing(),
    new SearchProcessing(),
    new Router(),
    new ViewPage(),
  ];
}

export default ProcessorsVault;
