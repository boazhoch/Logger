import { ISendMessage } from '@/SendMessage/types'
import { IContextLogger, LogLevel } from './types'

class ContextLogger implements IContextLogger {
  protected consoleMapper = new Map<LogLevel, any>();
  
  constructor(protected logSender?: ISendMessage, protected logLevel = LogLevel.debug) {
    this.logSender = logSender
    this.logLevel = logLevel
    
    for (const logMethod in console) {
      const logLevel = LogLevel[logMethod as unknown as LogLevel]
      const consoleFn = console[logMethod as never]

      if (logLevel && consoleFn) {
        this.consoleMapper.set(logLevel as unknown as LogLevel, consoleFn)
      }
    }
  }

  protected isLoglevelPass(logLevel: LogLevel) {
    return logLevel >= this.logLevel
  }

  setLogLevel(level: LogLevel) {
    if (LogLevel[level]) {
      this.logLevel = level
    }
    return this
  }

  getLogLevel() {
    return this.logLevel
  }
}

export default ContextLogger