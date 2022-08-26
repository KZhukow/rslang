import IProcessor from './iProcessor';
import Context from '../model/Context';

class SearchProcessing extends IProcessor {
  constructor() {
    super(true);
  }

  runProcess(context: Context): Context {
    if (this.isApplicable) {
      context.url.search = context.url.hash!.substring(context.url.hash!.indexOf('?'));
    }
    return context;
  }
}

export default SearchProcessing;
