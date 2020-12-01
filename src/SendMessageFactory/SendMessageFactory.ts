import { ISendMessageOptions } from '@/SendMessageOptions/types'
import SendMessageOptions from '@/SendMessageOptions/SendMessageOption'
import { ISendMessage } from '@/SendMessage/types'
import SendBeaconMessage from '@/SendBeaconMessage/SendBecaonMessage'
import SendFetchMessage from '@/SendFetchMessage/SendFetchMessage'

class SendMessageFactory {
  
  static isSupportingSendBeacon = Boolean(navigator.sendBeacon);
  
  static create(opts: ISendMessageOptions = new SendMessageOptions(), fetchRequestOptions?: RequestInit): ISendMessage {
    return this.isSupportingSendBeacon ? new SendBeaconMessage(opts) : new SendFetchMessage(opts, fetchRequestOptions)
  }
}

export default SendMessageFactory