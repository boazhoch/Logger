import { ITemplateString } from "./types";
import { IStrigify, StrinfigyValue } from "../Stringifier/types";

class TemplateString implements ITemplateString {
  private stringifier: IStrigify;

  constructor(stringifier: IStrigify) {
    this.stringifier = stringifier;
  }

  private isTemplateStringsArray(arg: any): arg is TemplateStringsArray {
    return Array.isArray(arg);
  }

  toString(strings: TemplateStringsArray | string, ...values: StrinfigyValue[]) {
    if (this.isTemplateStringsArray(strings)) {
      return strings.reduce((prev, current, index) => `${prev}${current}${this.stringifier.strinfigy(values[index])}`, "");
    }

    if (typeof strings === "string" && values.length) {
      console.warn("It is not recommended to use logger as a function, instead use logger as template tag with ``, example: logger.log`My msessage`");
      return values.reduce((prev: string, current) => `${prev} ${this.stringifier.strinfigy(current)}`, strings) as string;
    }

    return strings;
  }
}

export default TemplateString;
