import { ISendMessageOptions } from '@/SendMessageOptions/types'

export interface ISendMessageExecuter {
  send(messsage: string, opts: ISendMessageOptions): void
}

export interface ISendMessage {
  send(messsage: string): void
}

