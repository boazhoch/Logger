import { ITemplateString } from './types'
import { IStrigify } from '@/Stringifier/types'

class TemplateString implements ITemplateString {
  private stringifier: IStrigify;
  
  constructor(stringifier: IStrigify) {
    this.stringifier = stringifier
  }

  toString(strings: TemplateStringsArray| string, ...values: unknown[]) {
    if (typeof strings === 'string') {
      return `${strings}${values.reduce((prev, current, index) => `${prev}${current}${this.stringifier.strifigy(values[index])}`,'')}`
    }
    return strings.reduce((prev, current, index) => `${prev}${current}${this.stringifier.strifigy(values[index])}`, '')
  }
}

export default TemplateString