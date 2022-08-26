import IProcessor from './iProcessor';
import Context from '../model/Context';

class ViewPage extends IProcessor {
  constructor() {
    super(true);
  }

  runProcess(context: Context): Context {
    if (this.isApplicable) {
      context.root!.render(context.currentPage?.render());
    }
    return context;
  }
}

export default ViewPage;
