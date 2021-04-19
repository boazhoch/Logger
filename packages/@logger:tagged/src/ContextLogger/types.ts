import { LogLevel } from "../LogLevel/LogLevel";

export interface IContextLogger {
  setLogLevel(logLevel: LogLevel): void;
  getLogLevel(): LogLevel;
}
