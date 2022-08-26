import IProcessor from './iProcessor';
import Context from '../model/Context';

class Router extends IProcessor {
  constructor() {
    super(true);
  }

  runProcess(context: Context): Context {
    if (context.url.previousHash === undefined || context.url.previousHash === '') context.url.previousHash = null;
    if (this.isApplicable) {
      context.url.previousHash = context.url.hash;
      context.currentPage = context.pageClasses.get(context.url.hash!);
    }
    return context;
  }
}

export default Router;
