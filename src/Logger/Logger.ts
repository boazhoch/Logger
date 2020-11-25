import { ILog } from '@/Log/types'
import { ITemplateString } from '@/TemplateString/types'
import { ILogger } from './types'

// TODO: Think to split this logger into the 2 varaints and extends BaseLogger to sendMessage,
// BaseLogger, ConsoleLogger exnteds BaseLogger implemnts ILogger and TaggedLogger exnteds BaseLogger implements ILogger

/**
 * 
 * @description: You can use this class in 2 variants: tagged and untagged,
 * tagged: uses tagged template and reduce the ease of use for the dev.
 * untagged: The dev is responsible of how to pass a correct string into the function.
 * 
 * @example tagged: logger.taggedDebug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
 * @example untagged: logger.debug(`Helo world`);
 *
 * @class Logger
 * @implements {ILogger}
 */
class Logger implements ILogger {
  constructor(private logSender: ILog, private tpl: ITemplateString) {
    this.logSender = logSender
    this.tpl = tpl
  }

  /**
   *
   * 
   * @param {*} message
   * @return {*} 
   * @memberof Logger
   */
  createStringAndSend(message: any){
    const result = this.tpl.toString`${message}`
    return result
  }

  /**
   *
   *
   * @param {*} message
   * @param {(message?: any, ...optionalParams: any[]) => void} cb
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  sendLog(message: any, cb: (message?: any, ...optionalParams: any[]) => void, ...optionalParams: any[]) {
    this.logSender.send(message, ...optionalParams)
    cb(message, ...optionalParams)
  }

  /**
   *
   * logger.debug(`Helo world`);
   * @param {*} [message]
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  debug(message?: any, ...optionalParams: any[]) {
    this.sendLog(message, console.debug, ...optionalParams)
  }

  /**
   *
   * logger.info(`Helo world`);
   * @param {*} [message]
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  info(message?: any, ...optionalParams: any[]){
    this.sendLog(message, console.info, ...optionalParams)
  }

  /**
   *
   * logger.error(`Helo world`);
   * @param {*} [message]
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  error(message?: any, ...optionalParams: any[]){
    this.sendLog(message, console.error, ...optionalParams)
  }

  /**
   *
   * logger.log(`Helo world`);
   * @param {*} [message]
   * @param {...any[]} optionalParams
   * @memberof Logger
   */
  log(message?: any, ...optionalParams: any[]){
    this.sendLog(message, console.log, ...optionalParams)
  }
  
  /**
   *
   * @example logger.taggedDebug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  taggedDebug(strings: TemplateStringsArray, ...values: any[]) {
    const message = this.tpl.toString(strings, ...values)
    this.sendLog(message, console.debug)
  }

  /**
   *
   * @example logger.taggedInfo`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  taggedInfo(strings: TemplateStringsArray, ...values: any[]){
    const message = this.tpl.toString(strings, ...values)
    this.sendLog(message, console.info)
  }

  /**
   *
   * @example logger.taggedError`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  taggedError(strings: TemplateStringsArray, ...values: any[]){
    const message = this.tpl.toString(strings, ...values)
    this.sendLog(message, console.error)
  }

  /**
   *
   * @example logger.taggedLog`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  taggedLog(strings: TemplateStringsArray, ...values: any[]){
    const message = this.tpl.toString(strings, ...values)
    this.sendLog(message, console.log)
  }
}

export default Logger