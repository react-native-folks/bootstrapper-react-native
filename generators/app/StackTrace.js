class StackTrace {
  static SINGLETON = null;
  errorTracer = [];
  errorOrderCount = 0;
  constructor() {
    if (StackTrace.SINGLETON) {
      return StackTrace.SINGLETON;
    }
    StackTrace.SINGLETON = this;
  }

  static createStackTrace() {
    return new StackTrace();
  }

  static addError(errObject) {
    StackTrace.SINGLETON?.errorTracer.push({
      ...errObject,
      order: StackTrace.SINGLETON.errorOrderCount
    });
    StackTrace.SINGLETON.errorOrderCount++;
  }

  static getErrors() {
    return StackTrace.SINGLETON.errorTracer.length > 0
      ? StackTrace.SINGLETON.errorTracer.slice().reverse()
      : null;
  }

  static createError(scope, command, path = '', trace = []) {
    return {
      scope,
      command,
      path,
      trace
    };
  }
}

module.exports = StackTrace;
