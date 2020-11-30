import { ITaggedLogger } from './types'
import { ITemplateString } from '@/TemplateString/types'
import { ILogger } from '@/Logger/types'

class TaggedLogger implements ITaggedLogger {
  constructor(private tpl: ITemplateString, private _logger: ILogger){

  }

  private isTemplateStringsArray(arg: any): arg is TemplateStringsArray {
    return Array.isArray(arg) 
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
    const message = this.isTemplateStringsArray(strings) ? this.tpl.toString(strings, ...values): strings
    this._logger.debug(message)
  }

  /**
   *
   * @example logger.info`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  info<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    const message = this.isTemplateStringsArray(strings) ? this.tpl.toString(strings, ...values): strings
    this._logger.info(message)
  }

  /**
   *
   * @example logger.error`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  error<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    const message = this.isTemplateStringsArray(strings) ? this.tpl.toString(strings, ...values): strings
    this._logger.error(message)
  }

  /**
   *
   * @example logger.log`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  log<T extends TemplateStringsArray | string>(strings: T, ...values: any[]){
    const message = this.isTemplateStringsArray(strings) ? this.tpl.toString(strings, ...values): strings
    this._logger.log(message)
  }
}

export default TaggedLogger