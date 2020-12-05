export interface IContextLogger {
  setLogLevel(logLevel: LogLevel): void
  getLogLevel(): LogLevel
}

export enum LogLevel {
  trace,
  debug,
  info,
  time,
  timeEnd,
  warn,
  error,
  off
}