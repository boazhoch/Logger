import { ITaggedLogger } from './types'
import { ITemplateString } from '@/TemplateString/types'
import { ILogger } from '@/Logger/types'
import { ILogFormatter } from '@/LogFormatter/types'

class TaggedLogger implements ITaggedLogger {
  constructor(private tpl: ITemplateString, private _logger: ILogger, private logFormatter?: ILogFormatter){
  }

  private isTemplateStringsArray(arg: any): arg is TemplateStringsArray {
    return Array.isArray(arg) 
  }

  private getMessage<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {
    const message = this.isTemplateStringsArray(strings) ? this.tpl.toString(strings, ...values): strings as string
    return this.logFormatter ? this.logFormatter?.format(message) : message
  }

  /**
   *
   * @example logger.debug`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @template T
   * @param {T} strings
   * @param {...any[]} values
   * @memberof TaggedLogger
   */
  debug<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {  
    this._logger.debug(this.getMessage(strings, ...values))
  }

  /**
   *
   * @example logger.info`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  info<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    this._logger.info(this.getMessage(strings, ...values))
  }

  /**
   *
   * @example logger.error`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  error<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    this._logger.error(this.getMessage(strings, ...values))
  }

  /**
   *
   * @example logger.log`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  log<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    this._logger.log(this.getMessage(strings, ...values))
  }
}

export default TaggedLogger