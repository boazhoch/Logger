import { ISendMessage } from '@/SendMessage/types'
import { ILogger } from './types'
import ContextLogger from '@/ContextLogger/ContextLogger'
import { LogLevel } from '@/ContextLogger/types'

// TODO: Think to split this logger into the 2 varaints and extends BaseLogger to sendMessage,
// BaseLogger, ConsoleLogger exnteds BaseLogger implemnts ILogger and TaggedLogger exnteds BaseLogger implements ILogger


/**
 * 
 * @description: You can use this class in 2 variants: tagged and untagged,
 * tagged: uses tagged template and reduce the ease of use for the dev.
 * untagged: The dev is responsible of how to pass a correct string into the function.
 * 
 * @example tagged: logger.debug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
 * @example untagged: logger.debug(`Helo world`);
 *
 * @class Logger
 * @implements {ILogger}
 */
class Logger extends ContextLogger implements ILogger {
  
  constructor(logSender?: ISendMessage,logLevel?: LogLevel) {
    super(logSender, logLevel)
  }

  /**
   *
   *
   * @param {*} message
   * @param {(message?: any, ...optionalParams: any[]) => void} cb
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  private sendLog(message: string, cb: (message?: any) => void) {
    this.logSender && this.logSender.send(message)
    cb(message)
  }

  private invokeLog(level: LogLevel, message: string) {
    if(this.isLoglevelPass(level)) {
      this.sendLog(message, this.consoleMapper.get(this.logLevel))
    }
  }
  
  /**
   *
   * @example logger.taggedDebug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  debug(message: string) {  
    this.invokeLog(LogLevel.debug, message)
  }

  /**
   *
   * @example logger.taggedInfo`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  info(message: string){
    this.invokeLog(LogLevel.info, message)
  }

  /**
   *
   * @example logger.taggedError`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  error(message: string){
    this.invokeLog(LogLevel.error, message)
  }

  /**
   *
   * @example logger.taggedLog`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  log(message: string){
    this.invokeLog(LogLevel.info, message)
  }
}

export default Logger

