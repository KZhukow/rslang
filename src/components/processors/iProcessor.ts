import Context from '../model/Context';

abstract class IProcessor {
  isApplicable: boolean;

  protected constructor(isApplicable: boolean) {
    this.isApplicable = isApplicable;
  }

  abstract runProcess(context: Context): Context
}

export default IProcessor;
