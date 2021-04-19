export enum LogLevel {
  trace,
  debug,
  info,
  time,
  timeEnd,
  warn,
  error,
  off,
}

export enum LogLevelString {
  trace = "trace",
  debug = "debug",
  info = "info",
  time = "time",
  timeEnd = "timeEnd",
  warn = "warn",
  error = "error",
  off = "off",
}

type LogLevelMapper = { [key in LogLevel]: LogLevelString };

export const logLevelMapper: LogLevelMapper = {
  [LogLevel.trace]: LogLevelString.trace,
  [LogLevel.debug]: LogLevelString.debug,
  [LogLevel.info]: LogLevelString.info,
  [LogLevel.time]: LogLevelString.time,
  [LogLevel.timeEnd]: LogLevelString.timeEnd,
  [LogLevel.warn]: LogLevelString.warn,
  [LogLevel.error]: LogLevelString.error,
  [LogLevel.off]: LogLevelString.off,
};

export interface ILoggerLogLevel {
  getLogLevelName(logLevel: LogLevel): undefined | LogLevelString;
}

class LoggerLogLevel implements ILoggerLogLevel {
  private logLevelMapper: LogLevelMapper;

  constructor(logLevelMapper: LogLevelMapper) {
    this.logLevelMapper = logLevelMapper;
  }

  getLogLevelName(logLevel: LogLevel) {
    const logLevelName = this.logLevelMapper[logLevel];
    if (!logLevelName) {
      throw new Error(`log level number: ${logLevel}, couldn't find correspond log level string - log level out of range`);
    }
    return logLevelName;
  }
}

export default LoggerLogLevel;
