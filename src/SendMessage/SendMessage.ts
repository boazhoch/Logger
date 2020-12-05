import { ISendMessageOptions } from '@/SendMessageOptions/types'

class SendMessage {
  constructor(protected opts: ISendMessageOptions){}

  wrapLog(message: string) {
    if(this.opts.headers.contentType === 'application/json') {
      try {
        return JSON.stringify({ message: JSON.parse(message)})
      }
      catch {
        return JSON.stringify({ message})
      }
    }
    return message
  }
}

export default SendMessage