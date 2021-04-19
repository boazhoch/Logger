import { ILoggerLogLevel, LogLevel } from "../LogLevel/LogLevel";
import { IContextLogger } from "./types";

class ContextLogger implements IContextLogger {
  protected consoleMapper = new Map<LogLevel, any>();
  private loggerLogLevel: ILoggerLogLevel;

  constructor(protected logLevel = LogLevel.debug, loggerLogLevel: ILoggerLogLevel) {
    this.logLevel = logLevel;
    this.loggerLogLevel = loggerLogLevel;

    for (const logMethod in console) {
      const logLevel = LogLevel[(logMethod as unknown) as LogLevel];
      const consoleFn = console[logMethod as never];

      if (logLevel && consoleFn) {
        this.consoleMapper.set((logLevel as unknown) as LogLevel, consoleFn);
      }
    }
  }

  protected isLoglevelPass(logLevel: LogLevel) {
    return logLevel >= this.logLevel;
  }

  protected getLogLevelName(logLevel: LogLevel) {
    return this.loggerLogLevel.getLogLevelName(logLevel);
  }

  setLogLevel(level: LogLevel) {
    if (LogLevel[level]) {
      this.logLevel = level;
    }
  }

  getLogLevel() {
    return this.logLevel;
  }
}

export default ContextLogger;
