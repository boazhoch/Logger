import { ISendMessageOptions } from '@/SendMessageOptions/types'
import { ISendMessage } from '@/SendMessage/types'
import SendMessage from '@/SendMessage/SendMessage'

class SendFetchMessage extends SendMessage implements ISendMessage {
  static type = 'fetch'

  constructor(opts: ISendMessageOptions, private fetchRequestOptions?: RequestInit) {
    super(opts)
  }

  send(m: string, ...optionalParams: any[]){
    return fetch(this.opts.urlEndpoint, { 
      method: 'POST', 
      credentials: 'include', 
      cache: 'no-cache', 
      mode: 'cors', 
      headers: {
        'Content-Type': this.opts.headers.contentType,
      },
      body: JSON.stringify({message: m}),
      ...this.fetchRequestOptions,
    })
  }
}

export default SendFetchMessage