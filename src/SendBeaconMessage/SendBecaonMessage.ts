import { ISendMessageOptions } from '@/SendMessageOptions/types'
import { ISendMessage } from '@/SendMessage/types'
import SendMessage from '@/SendMessage/SendMessage'

class SendBeaconMessage extends SendMessage implements ISendMessage {
  static type = 'beacon'
  
  constructor(opts: ISendMessageOptions) {
    super(opts)
  }

  send(message: string) {
    const data = new Blob([this.wrapLog(message)], {type: this.opts.headers.contentType})
    navigator.sendBeacon(this.opts.urlEndpoint, data)
  }
}

export default SendBeaconMessage