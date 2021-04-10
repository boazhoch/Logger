import { ILogFormatter } from "@logger/formatter";
import { ITaggedLogger } from "./types";
import { ITemplateString } from "../../../stringify/dist";
import { ILogger } from "../Logger/types";
import { LogLevel } from "../ContextLogger/types";

class TaggedLogger implements ITaggedLogger {
  constructor(private tpl: ITemplateString, private _logger: ILogger, private logFormatter: ILogFormatter) {}

  private getMessage<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {
    const message = this.tpl.toString(strings, ...values);
    return this.logFormatter.format(message);
  }

  setLogLevel(logLevel: LogLevel) {
    this._logger.setLogLevel(logLevel);
  }

  getLogLevel() {
    return this._logger.getLogLevel();
  }

  flush() {
    this._logger.flush();
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
    this._logger.debug(this.getMessage(strings, ...values));
  }

  /**
   *
   * @example logger.info`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  info<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {
    this._logger.info(this.getMessage(strings, ...values));
  }

  /**
   *
   * @example logger.error`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  error<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {
    this._logger.error(this.getMessage(strings, ...values));
  }

  /**
   *
   * @example logger.log`My message is ${{type: "human", name: "Plony", lastName: "Almony"}}`;
   * @param {TemplateStringsArray} strings
   * @param {...any[]} values
   * @memberof Logger
   */
  log<T extends TemplateStringsArray | string>(strings: T, ...values: any[]) {
    this._logger.log(this.getMessage(strings, ...values));
  }
}

export default TaggedLogger;
