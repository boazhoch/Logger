import { ISendMessage } from '@/SendMessage/types'
import { ILogger } from './types'

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
class Logger implements ILogger {
  constructor(private logSender: ISendMessage) {
    this.logSender = logSender
  }

  /**
   *
   *
   * @param {*} message
   * @param {(message?: any, ...optionalParams: any[]) => void} cb
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  private sendLog(message: any, cb: (message?: any, ...optionalParams: any[]) => void, ...optionalParams: any[]) {
    this.logSender.send(message)
    cb(message, ...optionalParams)
  }
  
  /**
   *
   * @example logger.taggedDebug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  debug(message: string, ...optionalParams: any[]) {  
    this.sendLog(message, console.debug, ...optionalParams)
  }

  /**
   *
   * @example logger.taggedInfo`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  info(message: string, ...optionalParams: any[]){
    this.sendLog(message, console.info, ...optionalParams)
  }

  /**
   *
   * @example logger.taggedError`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  error(message: string, ...optionalParams: any[]){
    this.sendLog(message, console.error, ...optionalParams)
  }

  /**
   *
   * @example logger.taggedLog`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  log(message: string, ...optionalParams: any[]){
    this.sendLog(message, console.log, ...optionalParams)
  }
}

export default Logger

