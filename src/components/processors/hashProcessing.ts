import IProcessor from './iProcessor';
import Context from '../model/Context';

class HashProcessing extends IProcessor {
  constructor() {
    super(true);
  }

  runProcess(context: Context): Context {
    if (this.isApplicable) {
      if (window.location.hash !== null) {
        const startIndex = window.location.hash.indexOf('/');
        let endIndex = window.location.hash.indexOf('?');
        if (endIndex === -1) endIndex = window.location.hash.length;
        context.url.hash = window.location.hash.substring(
          startIndex,
          endIndex,
        );
      }
      if (context.url.previousHash === undefined) context.url.previousHash = context.url.hash;
      if (context.url.hash !== context.url.previousHash) {
        context.url.previousHash = context.url.hash;
        context.url.isRedirect = true;
        context.isNotFinal = true;
      }
    }
    return context;
  }
}

export default HashProcessing;
