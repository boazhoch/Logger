import { ILogFormatter, ILogFormatterConfig, FormatType, ILogFormatteOptions } from './types'

class LogFormatter implements ILogFormatter {
  constructor(private logFormmaterConfig: ILogFormatterConfig) {

  }

  format(message:string)  {
    let msg: string = message
    for (const formatType in this.logFormmaterConfig) {
      const formatter = this.logFormmaterConfig[formatType as unknown as FormatType]
      msg = formatter.format(msg)
    }
    return msg
  }
}

class LogForrmatterPrefixer implements ILogFormatter {
  constructor(private prefix:() => string) {}

  format(message: string){
    return `${this.prefix()}${message}`
  }
}

class LogForrmatterSuffixer implements ILogFormatter {
  constructor(private suffix: () => string) {}

  format(message: string){
    return `${message}${this.suffix()}`
  }
}

const logFormatterOptionsFcatory = (logFormmaterOptions: ILogFormatteOptions) => {
  const logFormatterConfig: ILogFormatterConfig = {} as ILogFormatterConfig

  for (const option in logFormmaterOptions) {
    const item = logFormmaterOptions[option as unknown as FormatType]
    
    if (item) {
      if (option as unknown as FormatType === FormatType.prefix) {
        logFormatterConfig[FormatType.prefix] = new LogForrmatterPrefixer(item)
      }
      if (option as unknown as FormatType === FormatType.suffix) {
        logFormatterConfig[FormatType.suffix] = new LogForrmatterSuffixer(item)
      }
    }
  }

  return logFormatterConfig
}

export {LogForrmatterPrefixer, LogForrmatterSuffixer, logFormatterOptionsFcatory}

export default LogFormatter