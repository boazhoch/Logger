import { ILogFormatter, ILogFormatterConfig, FormatType } from './types'

class LogFormatter implements ILogFormatter {
  constructor(private logFormmaterConfig?: ILogFormatterConfig) {
  }

  format(message:string)  {
    let msg: string = message
    for (const formatType in this.logFormmaterConfig) {
      const formatter = this.logFormmaterConfig[formatType as unknown as FormatType]
      if (formatter) {
        msg = formatter.format(msg)
      }
    }
    return msg
  }
}

export default LogFormatter