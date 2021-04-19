import { LogLevelString } from "../LogLevel/LogLevel";

export interface ILogContextBuilder {
  build: ContextBuilder;
}

type ContextBuilder = <ContextObject extends Record<string, any>>(logLevel: LogLevelString) => ContextObject;

class LogContextBuilder implements ILogContextBuilder {
  private contextBuilder: ContextBuilder;

  constructor(contextBuilder: ContextBuilder) {
    this.contextBuilder = contextBuilder;
  }

  build<ContextObject extends Record<string, any>>(logLevel: LogLevelString) {
    return this.contextBuilder<ContextObject>(logLevel);
  }
}

export default LogContextBuilder;
